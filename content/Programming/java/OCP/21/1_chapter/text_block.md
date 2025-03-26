---
title: Text Block
draft: true
tags:
  - java
---

- un text block comienza y termina con """ (3 pares de comillas)
- Text Block sigue siendo un String, por lo que cualquier método de String puede ser usado en Text Block
- existe el essential y incidental whitespace
    - el essential es lo que uno añade y necesita para el texto
    - el incidental solo está ahí para que el código sea más fácil de leer
- si añadimos, un triple '“' en la misma línea en la que termina nuestro string, tendremos un texto sin un salto de línea adicional.
- luego de las primeras triple '“' se necesita un salto de linea o no compilara.
    - String text = “”””hola””””; // NO COMPILA