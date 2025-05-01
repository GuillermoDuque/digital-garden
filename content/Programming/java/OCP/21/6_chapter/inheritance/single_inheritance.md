---
title: Herencia única
draft: false
tags:
  - java
---

- Java soporta la **herencia única** (*single inheritance*), lo que significa que una clase solo puede heredar directamente de **una sola clase padre**.

- Sin embargo, Java **sí permite múltiples niveles de herencia**. Esto quiere decir que una clase puede heredar de una clase que a su vez hereda de otra, formando una **cadena de herencia**. De este modo, una clase descendiente puede acceder a miembros heredados de todos sus antecesores.

### Ejemplo: Herencia única

```java
class Animal {
    void breathe() {
        System.out.println("Breathing...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Woof woof!");
    }
}
```