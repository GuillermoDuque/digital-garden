---
title: ¿Qué es var?
draft: false
tags:
  - java
---


- Permite la inferencia de tipo al declarar una variable local.
- Una vez inferido el tipo en tiempo de compilación, no puede cambiar.
- Debe declararse e inferirse en la misma sentencia; puede haber un salto de línea, pero no otra sentencia intermedia.
- No se pueden declarar múltiples variables en una misma línea con `var`:
    
    ```java
    var a, b = 3; // No compila
    ```
    
- No se puede inferir el tipo a partir de `null`, pero sí se puede inferir el tipo de un objeto y luego reasignarlo a `null`.
- `var` solo puede usarse para variables locales (no en parámetros de métodos, atributos de clase o variables de instancia).
- `var` **no es una palabra reservada**, por lo que puede usarse como identificador, pero es un **reserved type name**, lo que implica que:
    - No puede utilizarse para definir un tipo, como una clase, interfaz o `enum`.