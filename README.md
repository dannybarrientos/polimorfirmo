# Cambiando IFs por Polimorfismo

Charla para Nerdearla 101 v3

- [Objetivos](./docs/01_objetivos.md)
- [¿Qué es polimorfismo?](./docs/02_polimorfismo.md)
- [El problema de los IFs](./docs/03_IFs.md)
- [¿Cómo vamos a usar el polimorfismo?](./docs/04_usando_polimorfismo.md)
- [Kata de FizzBuzz](./docs/05_kata.md)
- [Conclusiones](./docs/06_conclusiones.md)
- [Referencias](./docs/07_referencias.md)

## Proyecto

El proyecto utiliza el siguiente stack:

- NodeJS v20 o Actual LTS al 22/11/2023 ([releases](https://nodejs.org/en/about/previous-releases)) 
- node:test para los tests ([docs](https://nodejs.org/docs/latest-v20.x/api/test.html))
- nvm para seleccionar la versión de NodeJS entre proyectos ([referencia](https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file))
- standard para el linting del código ([paquete en npm](https://www.npmjs.com/package/standard))

### Scripts

El proyecto posee los siguientes scripts de npm

- lint: verifica que se cumplan la reglas de linting en el proyecto
- lint-fix: si se puede corrige el código para cumplir con las reglas de linting
- test: corre los tests usando `node:test`

## Tags 

**SPOILER ALERT** 

A continuación se detallan los `tags` que se visitan durante la charla para ir mostrando distintos puntos importantes.

- Introducción al problema: `comienzo` 
- Antes de cambiar los IFs: `pre-remover-ifs`
- FizzBuzzWhizz inicial (Whizz simple): `whizz-naive`
- FizzBuzzWhizz componiendo NumberStringifiers: `fizzbuzzwhizz-composite`
- Extrayendo clase padre de FizzBuzz y FizzBuzzWhizz: `instancia-juego-configurable`
