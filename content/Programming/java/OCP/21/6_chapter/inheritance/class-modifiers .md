---
title: Modificadores de clases
draft: false
tags:
  - java
---

| Modificador  | Descripción                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------|
| `final`      | La clase no podrá ser extendida                                                                                |
| `abstract`   | La clase es abstracta, puede contener métodos abstractos u requiere una subclase concreta para ser instanciada |
| `sealed`     | La clase puede ser extendida por una lista especifica d clases                                                 |
| `non-sealed` | Una subclass de una sealed class permite potencialmente unnamed subclass                                       |
| `static`     | Usado para clases staticas anidadas definidas dentro de otra clase                                             |