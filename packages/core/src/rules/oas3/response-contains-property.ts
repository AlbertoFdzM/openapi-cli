import { Oas3Rule } from '../../visitors';
import { UserContext } from '../../walk';
import { getMatchingStatusCodeRange } from '../../utils';

export const ResponseContainsProperty: Oas3Rule = (options) => {
  const names: Record<string, string[]> = options.names || {};
  let key: string | number;
  return {
    Operation: {
      Response: {
        skip: (_response, key) => {
          return `${key}` === '204';
        },
        enter: (_response, ctx: UserContext) => {
          key = ctx.key;
        },
        MediaType: {
          Schema(schema, { report, location }) {
            if (schema.type !== 'object') return;
            const expectedProperties = names[key] || names[getMatchingStatusCodeRange(key)] || [];
            for (const expectedProperty of expectedProperties) {
              if (!schema.properties?.[expectedProperty]) {
                report({
                  message: `Response object must have a top-level "${expectedProperty}" property.`,
                  location: location.child('properties'),
                });
              }
            }
          },
        },
      },
    },
  };
};
