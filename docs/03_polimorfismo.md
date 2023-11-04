# ¿Qué es el Polimorfismo?

Entendemos que dos objetos son polimorficos entre sí, si ambos pueden responder a los mismos mensajes.

Es decir, los objetos tienen la misma interfaz o métodos.

También podemos decir que comparten el mismo protocolo.

```javascript
class Human {
  speak(){
    return 'Hello!'
  }
}

class Cat {
  speak(){
    return 'Miau!'
  }
}
```
