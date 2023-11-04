# ¿Qué es el Polimorfismo?

Entendemos que dos objetos son polimorficos entre sí, si ambos saben responder a los mismos mensajes.

Es decir, los objetos implementan los mismos métodos.

También podemos decir que comparten la misma interfaz o protocolo.

```javascript
class Human {
  speak(){
    return 'Hola!'
  }
}

class Cat {
  speak(){
    return 'Miau!'
  }
}
```
