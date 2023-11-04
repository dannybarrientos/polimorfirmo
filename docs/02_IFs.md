# El problema de los IFs

```javascript
function TipoDeNumero(unNumero) {
  
  if(unNumero < 0) {
    return 'Negativo'
  } else if (unNumero === 0){
    return 'Cero'
  } else{
    return 'Positivo'
  }
}
```
Agregar una condición al `if` implica modificar la función `TipoDeNumero`.

No es posible aplicar la heurística "Cerrado para modificación, abierto para extensión".
