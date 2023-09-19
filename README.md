# node-server
lista de tarea con NodeJs

¿Qué sucedio al usar async y await?
Cuando usamos "async" y "await" en nuestro código, significa que queremos que la computadora realice una tarea pero no espere a que termine antes de hacer otra cosa. Es como pedirle a la computadora que haga varias cosas al mismo tiempo. Esto ayuda a que nuestro código se ejecute más rápido y más eficientemente. Cuando usamos async y await, ciertas funciones pueden esperar a que algo termine antes de hacer lo siguiente. Esto ayuda a que el código sea más fácil de entender y trabajar. Es como pausar un videojuego para esperar a que suceda algo antes de continuar.

¿Qué sucedió al usar el método then()?
Cuando usamos el método then(), nos ayuda a hacer algo después de que haya finalizado un determinado evento o acción. Es como decirle a un amigo que espere hasta terminar su tarea antes de jugar juntos. El método then() asegura que nuestro código espere a que algo termine antes de hacer lo siguiente. ¿Qué pasó cuando usamos el método then()? Cuando usamos el método then(), conectamos promesas y decimos qué debería suceder cuando una promesa tiene éxito o no. En lugar de usar async/await, podríamos haber usado el método then() para manejar las promesas. Lo bueno de then() es que es muy claro y nos da más control sobre cómo funciona la promesa. Pero, a medida que conectamos más promesas, el código puede volverse más difícil de entender y mantener organizado.

¿Qué diferencias encontraste entre async, await y el método then()?
El uso deasync/await hace que el código sea más legible yparezcaprogramación síncrona, lo que facilitaelmanejode tareas asíncronas. El códigotieneunaestructuramás lineal.
El método then() se utiliza para encadenar promesasexplícitamente. Puede seradecuado cuando se necesitamáscontrol sobre el flujo depromesas o cuando se encadenanmúltiplespromesas.
Async/awaitfacilitaelmanejode errores con try/catch,perothen()requiere.catch()para manejar errores. La elección entre async/await y then() dependedetuestilo de programación preferido y de la complejidad del flujo de promesas en tu código
