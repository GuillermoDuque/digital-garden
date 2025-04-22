---
title: Pasar datos entre métodos
draft: false
tags:
  - java
---


- En Java, cuando se pasa un valor a un método, **se pasa una copia**. Esa copia es la que recibe el método, por lo que **modificarla no afecta al valor original**.
- En el caso de los **tipos primitivos**, se copia el valor directamente. Por eso, cualquier cambio dentro del método **no se refleja** fuera de él.
- En el caso de los **objetos**, lo que se copia es la **referencia** al objeto, no el objeto en sí. Por lo tanto, tanto el parámetro original como el del método apuntan al **mismo objeto en memoria**.
    - Si el objeto es **mutable**, modificar su estado dentro del método **afectará al objeto original**, ya que ambas referencias apuntan al mismo lugar.
    - Si el objeto es **inmutable** (como `String`), **no es posible cambiar su contenido**. Cualquier intento de modificación creará un nuevo objeto. Así, si reasignas la referencia en el método, solo la **copia de la referencia** se ve afectada, mientras que el objeto original **permanece intacto**.