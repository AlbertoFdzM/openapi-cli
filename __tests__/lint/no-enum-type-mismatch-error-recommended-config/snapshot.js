// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-enum-type-mismatch-error-recommended-config 1`] = `
The apiDefinitions field is deprecated. Use apis instead.

validating /openapi.yaml...
[1] openapi.yaml:1:1 at #/

Servers must be present.

 1 | openapi: 3.0.0
   | ^^^^^^^^^^^^^^
 2 | info:
   | ^^^^^
 … | < 43 more lines >
46 |           enum: string
   |           ^^^^^^^^^^^^

Error was generated by the no-empty-servers rule.


[2] openapi.yaml:10:5 at #/paths/~1v1~1pets~1{petId}/get/summary

Operation object should contain \`summary\` field.

 8 |
 9 | /v1/pets/{petId}:
10 |   get:
   |   ^^^
11 |     operationId: getPet
12 |     parameters:

Error was generated by the operation-summary rule.


[3] openapi.yaml:46:17 at #/components/schemas/Pet/properties/status/enum

Expected type \`array\` but got \`string\`.

44 | status:
45 |   type: string
46 |   enum: string
   |         ^^^^^^

Error was generated by the spec rule.


[4] openapi.yaml:2:1 at #/info

Info object should contain \`license\` field.

1 | openapi: 3.0.0
2 | info:
  | ^^^^
3 |   title: Petstore API
4 |   version: 1.0.0

Warning was generated by the info-license rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors and 1 warning.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;