---
title: Precedencia de Operadores
draft: false
tags:
- java
---

- Los operadores poseen un orden al ser evaluados en una expresión.
- Se puede **sobreescribir** esta precedencia utilizando paréntesis.
- En caso de que se tengan 2 o más operadores con el mismo nivel de precedencia; en la mayoría de los casos se evaluará de **izquierda a derecha**.
- Los operadores de esta tabla van en orden decreciente

| Operator                        | Symbols and Example                                    | Evaluation    |
|---------------------------------|--------------------------------------------------------|---------------|
| Post-unary operators            | `expression++, expression--`                           | Left-to-right |
| Pre-unary operators             | `++expression, --expression`                           | Left-to-right |
| Other unary operators           | `-, !, ~, +, (type)`                                   | Right-to-left |
| Cast                            | `(Type)reference`                                      | Right-to-left |
| Multiplication/division/modulus | `*, /, %`                                              | Left-to-right |
| Addition/subtraction            | `+, -`                                                 | Left-to-right |
| Shift operators                 | `<<, >>, >>>`                                          | Left-to-right |
| Relational operators            | `<, >, <=, >=, instanceof`                             | Left-to-right |
| Equal to/not equal to           | `==, !=`                                               | Left-to-right |
| Logical AND                     | `&`                                                    | Left-to-right |
| Logical exclusive OR            | `^`                                                    | Left-to-right |
| Logical inclusive OR            | `\|`                                                   | Left-to-right |
| Conditional AND                 | `&&`                                                   | Left-to-right |
| Conditional OR                  | `\|\|`                                                 | Left-to-right |
| Ternary operators               | `boolean expression ? expression : expression2`        | Right-to-left |
| Assignment operators            | `=, +=, -=, *=, /=, %=, &=, ^=, \|, =, <<=, >>=, >>>=` | Right-to-left |
| Arrow operator                  | `->`                                                   | Right-to-left |