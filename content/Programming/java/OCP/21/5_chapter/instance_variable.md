---
title: Variables de instancias
draft: false
tags:
  - java
---

- Las variables de instancia están presenten en todas las instancias de una clase.
- Cómo los métodos también poseen modificadores, cómo ***private, package, protected*** y ***public.***
- El compilador no aplica los valores por defecto a variables finales
- También pueden tener especificadores opcionales:

| Modifier  | Description                                                                                                       |
|-----------|-------------------------------------------------------------------------------------------------------------------|
| final     | Especifica que la variable de la instancia debe ser inicializada solo una vez dentro de una instancia de la clase |
| volatile  | Le indica a la JVM que el valor de esta variable puede ser modificado por otros hilos                             |
| transient | Usado para indicar que una variable de instancia no debería ser serializada con la clase                          |