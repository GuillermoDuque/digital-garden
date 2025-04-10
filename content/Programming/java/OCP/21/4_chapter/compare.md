---
title: compare()
draft: false
tags:
- java
---

Se necesitan varias reglas que saber al usar compare(), afortunadamente son las mismas que se usan cuando escribes un Comparator.

Los valores que retorna:

- Un valor negativo quiere decir que el primer array es más pequeño que el segundo.
- Un cero quiere decir que son iguales
- Un valor positivo quiere decir que el primer array es más grande que el segundo.

Arrays.compare(new int[]{1}, new int[] {2}); // retorna un número negativo

Cómo comparar arrays de diferentes tamaños.

- Si ambos arreglos son del mismo tamaño y tienen los mismos valores en el mismo orden, regresa cero
- Si todos los elemento son los mismos pero el segundo arreglo tiene elementos extras al final, regresa un numero negativo.
- Si todos los elementos son iguales, pero el primer arreglo tiene elementos extra al final, regresa un numero positivo.
- Si el primer elemento que difiere es menor en el primer arreglo, retorna un número negativo.
- Si el primer elemento que difiere es mayor en el primer arreglo, retorna un numero positivo.

¿Ahora que valor son menores que otros?

- null es menor que cualquier otro valor.
- Para números, el orden numero natural aplica.
- Para strings, uno es menor si es un prefijo de otro.
- Para strings/characters, números son menores que letras.
- Para strings/characters, uppercase es menor que lowercase.

| Primer Array       | Segundo Array       | Resultado       | Razón                                                               |
|--------------------|---------------------|-----------------|---------------------------------------------------------------------|
| new int[] {1,2}    | new int[] {1}       | Numero Positivo | El primer elemento es el mismo, pero el primer arreglo es más largo |
| new int[] {1,2}    | new int[] {1,2}     | Cero            | Son idénticos                                                       |
| new String[] {”a”} | new String[] {”aa”} | Número Negativo | El primer elemento es un prefijo del segundo                        |
| new String[] {”a”} | new String[] {”A”}  | Número positivo | Mayúscula es menor a minúscula                                      |
| new String[] {”a”} | new String[] {null} | Número positivo | null es menor a una letra                                           |

- Al comparar arrays deben ser del mismo tipo o subtipos, si no el código no compilará