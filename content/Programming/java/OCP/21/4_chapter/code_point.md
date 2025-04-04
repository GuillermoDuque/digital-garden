---
title: Code Point
draft: false
tags:
- java
---

Un code point es el numero Unicode que representa un carácter. por que usarlo? porque algunos caracteres Unicode como emojis, no caben en un solo char.

```java
public int codePointAt(int index)
public int codePointBefore(int index)
public int codePointCount(int beginIndex, int endIndex)
```

codePointAt retorna el valor número del code point según un index específico

codePointBefore hace lo mismo, pero devuelve el code point antes del índice

regresa el numero de un codepoint entre el rango de 2 indices