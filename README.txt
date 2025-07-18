Sobre el proceso 😊

Este proyecto fue todo un proceso de prueba y error. Cambié varias veces el enfoque general: reorganicé la estructura de carpetas, los diseños, y sobre todo la forma de manejar los datos (contextos, estados, props). En algunos momentos incluso volví a empezar desde cero porque sentía que el rumbo que estaba tomando no era el mejor.

Tuve que aprender a soltar algunas ideas, especialmente desde el lado visual. Tenía en mente un diseño mucho más elaborado, con animaciones y detalles inspirados en apps reales, pero con el tiempo entendí que tenía que priorizar la funcionalidad. Fue un desafío bajar las expectativas, pero me permitió enfocarme en que la app funcione y en entender mejor cómo conectar todas las piezas.

Todavía tengo mucho por mejorar. De ahora en más, quiero seguir desarrollando criterios propios sobre buenas prácticas y sobre cuáles son las mejores decisiones según cada caso. Este trabajo fue un punto de partida, y aunque hay detalles por pulir, me dejó aprendizajes valiosos en cada cambio, error (lease como la app explotando 😂) y ajuste que hice en el camino.

Cosas que me gustan 🤩
 
Funcionalidades del chat:

    Los mensajes tienen una animación suave de entrada que da más vida a la conversación.
    
    Los mensajes enviados capturan la hora real.

    El chat scrollea automáticamente hacia el último mensaje al ingresar o enviar uno nuevo.

    Si el chat queda vacío (por ejemplo, tras borrar todos los mensajes), se muestra un mensaje de advertencia.

    Los mensajes enviados se guardan temporalmente y aparecen en el preview del contacto como "último mensaje" (hasta que se recarga la página).

    El campo de texto permite el uso de emojis, integrados con EmojiPickerReact.

Búsqueda y filtros:

    Hay dos filtros diferenciados:

        Uno para buscar contactos por nombre.

        Otro dentro del chat para resaltar palabras clave (subrayado con .highlight).

    El filtro de mensajes es desplegable, lo que mantiene la interfaz más limpia.

    Si no se encuentra ningún contacto al buscar, aparece un aviso claro para el usuario.

Interacción y comportamiento:

    Al enviar un mensaje, el contacto automáticamente sube al tope de la lista.

    Si no hay mensajes previos con un contacto, el preview muestra “Sin mensajes”.

Algunas dudas o cosas a revisar

    Es probable que los estilos (CSS) hayan quedado algo desorganizados. En algunos puntos tuve que hacer parches de último momento que rompieron un poco la estructura que venía manteniendo.

    Podría haber usado más variables CSS para evitar repeticiones.

Cosas importantes que llegué a actualizar desde que entregué:

    Separé los estilos por componentes

    Finalmente pude implementar la doble pantalla, yay 🥳🥳

    Mejore el diseño de ContactDetail, que venía flojo de papeles

    Reemplacé la "x" que usaba para eliminar mensajes por un tachito que aparece al hacer hover.

    PD: Creo que se ve mejor en FireFox
    PD2: Recomiendo al 200% la saga Persona 🤩