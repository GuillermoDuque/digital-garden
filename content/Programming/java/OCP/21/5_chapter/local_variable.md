---
title: Local Variable
draft: false
tags:
  - java
---

- Son las variables definidas en un método o bloque
- Si una variable local retorna su valor en un método, al finalizar el método esta variable es destruida, pero su valor puede seguir existiendo siendo referenciada en un contexto más amplio.
- Las variables locales pueden tener el modificador **final,** lo que quiere decir que la referencia al valor no cambiará una vez inicializadas
    - pueden inicializarse en otra sentencia, pero deben ser inicializadas antes de usarse
    - se puede incluso usar final y var juntos.