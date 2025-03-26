---
title: Promoción numérica
draft: false
tags:
  - java
---

- Si dos valores tienen tipos de datos diferentes, Java automáticamente promoverá uno de los valores al tipo de dato de mayor jerarquía.
- Si uno de los valores es de tipo entero y el otro es de punto flotante, el valor entero se promoverá automáticamente al tipo de dato de punto flotante.
- Los tipos de datos más pequeños (`byte`, `short` y `char`) se promueven primero a `int` cuando se usan en cualquier operación aritmética binaria, incluso si ninguno de los operandos es un `int`.
    - los literales pueden ser asignados sin problema, al no formar parte de una operación aritmética
    
    ```java
    short a = 1; //COMPILA
    short b = 1 + 2; //COMPILA
    short c = 2 + b; // NO COMPILA
    ```
    
- Después de que todas las promociones hayan ocurrido y los operandos sean del mismo tipo de dato, el resultado de la operación tendrá el mismo tipo de los operandos promovidos.