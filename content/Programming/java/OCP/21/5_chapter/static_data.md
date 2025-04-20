---
title: Static Data
draft: false
tags:
  - java
---

Cuando se usa **`*static*`** en una variable, método o clase anidada, significa que este miembro pertenece a la **clase** en sí y no a una instancia específica de la misma.

- **`*static*`** también puede usarse en sentencias **`*import*`** estáticas para acceder directamente a miembros estáticos de otras clases sin usar el nombre de la clase.
- Cada vez que se actualiza el valor de una variable `static`, el cambio se refleja en todas las instancias de la clase, ya que comparten el mismo espacio de memoria para ese campo.

### Los métodos estáticos tienen dos propósitos principales:

1. **Funciones auxiliares o utilitarias**

   Métodos que no requieren el estado de una instancia (es decir, no usan variables de instancia). Esto permite llamarlos directamente desde la clase sin crear un objeto.

2. **Estado compartido entre todas las instancias**

   Cuando un valor debe ser común a todas las instancias (como un contador), se usa una variable `static`. Si hay métodos relacionados exclusivamente con ese estado compartido, también deberían ser `static`.