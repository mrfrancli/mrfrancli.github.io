## ¿Quién eres?

Proyecto de Creación Multimedia Interactiva de la  Facultad de Bellas Artes de la Univesidad de Granada



# 1 Datos 



**Titulo** : ¿Quién eres?

**Web:**   https://mrfrancli.github.io/

**Autor:**  Juan José Gutiérrez Calvo

**Resumen** : *¿Quién eres?* es un juego de puzzles donde al avanzar por distintos niveles recolectando trozos de fotografía Marcial, el protagonista de la historia, va descubriendo quién es. Marcial es una persona que no sabe quién es, qué ha ocurrido o dónde está. A través de la recomposición de fotografías, Marcial va recordando su identidad y desgranando poco a poco la historia de aquello que lo condenó a la eternidad. 

***Este juego sólo es una demo de prueba y únicamente contiene el nivel introductorio. En la página web oficial podrá adquirir la*** **Edición DELUXE Sacramentos de la Iniquidad** ***por 19,99$ y disfrutar de todo el contenido del juego más extras adicionales.***
**Estilo/género:**  Juego de puzzles

**Logotipo** : 
![girl](https://github.com/mrfrancli/mrfrancli.github.io/blob/master/logo.png)

**Resolución:** 800x600px (no reescalable puesto que algunos elementos perderían excesiva calidad)

**Probado en:**   Google Chrome / MS Edge (no apto para dispositivos que no dispongan de teclado con flechas de dirección)

**Tamaño proyecto:** 19.5MB 

**Licencia** Este proyecto tiene una Licencia CC Reconocimiento Compartir igual (CC BY-SA)

**Fecha** : 16/06/2020

**Medios** (donde se tiene presencia relacionada):

- Github: https://github.com/mrfrancli/mrfrancli.github.io
- Twitter: https://twitter.com/mrfrancli
- Instagram: https://www.instagram.com/mrfrancli/




# 2. Memoria del proyecto 

### 2.1 Storyboard: 

Al iniciar el proyecto aparece una pantalla que aconseja jugar haciendo uso de cascos o auriculares para una experiencia más óptima. Tras esta, comienza a reproducirse una introducción a la historia del juego la cual tiene la opción de poder saltarla. Después se llega al menú, donde se encuentran principalmente tres opciones y una cuarta, cuyo icono es una nota musical, donde se puede modificar los volúmenes de los distintos tipos de sonido que se van a reproducir durante el proyecto.

- **¿Quién eres?:** Es la opción principal. Al clicar sobre ella se inicia el juego reproduciendo una pequeña introducción a la situación del personaje principal. Luego, se comienza a jugar pudiendo manejar al personaje principal a través de las distintas pantallas del nivel en busca y recolección de pequeños fragmentos de fotografías que, al coleccionarlos todos, revelan una imagen a partir de la cual el protagonista avanza en su historia. Una vez concluido, se reproducen los créditos del juego.

- **Galería:** En esta opción se accede a la galería del juego la cual ahúna imágenes del elenco de seres que componen el lore de la historia del juego. Consta de cuatro siendo estos los principales en la historia y las imágenes van acompañadas de una breve explicación del rol de cada uno dentro de su mundo.

- **Créditos:** Al pulsar esta opción se direcciona al jugador a la pantalla de créditos con la posibilidad de volver al menú principal.



### 2.2. Esquema de navegación 



(imagen con las distintas pantallas de navegación, usa draw.io o cualquier programa de dibujo)







# 3. Metodología

Metodología de desarrollo de productos multimedia basado en una metodología de UX (User Experience)



### Etapa 1: Ideación de proyecto

**Investigación de campo** (propuestas inspiradoras para el proyecto)

- Cube Escape Series (juegos de puzzles) http://www.cubeescape.com/ (inspiración principal para trabajar sobre la jugabilidad y género del juego)

- Limbo (juego de plataformas) https://store.steampowered.com/app/48000/LIMBO/?l=spanish (inspiración para trabajar en la propuesta visual del juego)

- Neon Genesis Evangelion (serie de animación) https://www.netflix.com/es/title/81033445 (inspiración principal para el diseño de inicuos y la creación de lore en la historia)




**Motivación de la propuesta** 

Cuando en la asignatura se propuso la idea de realizar un gran proyecto en el cual ir avanzando a lo largo del curso, no estaba seguro de qué buscaba hacer, simplemente quería contar una historia. Esa fue mi principal motivación y la opción tomada sobre la cual acabé valorando la posiblidad de diversos formatos. Sí que quería hacer un juego, solo que por aquel entonces desconocía qué funciones me ofrecía Hippani para poder desarrollarlo. Con el avance del tiempo y al ir descubriendo formas de programar según qué mecánicas fui poco a poco desarrollando el proyecto y dando forma a la jugabilidad. Luego, quería que la narrativa fuese tríptica con una historia que se fuese desgranando poco a poco e impactando al jugador a medida que avanzase porque desde siempre me han motivado mucho ese tipo de estrategias narrativas en todo tipo de medios, tanto audiovisuales e interactivos como más tradicionales y analógicos. Supongo que la razón de las decisiones tomadas no es más que una lista de procederes que he visto aplicados en otros sitios y que han tenido cierto impacto en mí, desde la narrativa hasta el diseño pasando por la jugabilidad.



**Público / audiencia**

- Orientado a personas interesadas en juegos de puzzles mayores de 18 años, dado el contenido algo perturbador que dentro del juego puede desvelarse.





### Etapa 2: Desarrollo / actividades realizadas

- **Juego.** Programar y adecuar las mecánicas del juego fue sin duda la parte que mayor trabajo me supuso de todo el proyecto. Lo primero que hice fue que el personaje se moviese y, aunque conseguirlo no era del todo difícil, lo realmente duro se convirtió en adecuarlo a la estructura del nivel del juego. Quise que los niveles estuviesen compuestos de diferentes pantallas puesto que, como no sabía exactamente qué jugabilidad quería que tuviese en aquel momento, necesitaba que se dispusieran así principalmente para que la función del personaje principal desplazándose tuviese un propósito mecánico. Esto dificultó en parte los procesos porque tuve que establecer una variable que detectase en qué pantalla del nivel estaría el jugador y en función de eso llevarlo a la siguiente, a la anterior o no poder avanzar en caso de no haber más recorrido en adelante o hacia detrás, donde el valor de la variable sería el que identificaría la pantalla y variaría en función se avanzase o se retrocediese. Cuando ya decidí que el juego contuviese la mecánica de drag and drop tuve que programarla y tener en cuenta que por el movimiento que se le permitía realizar al jugador, los trozos de fotografía a coleccionar debían desaparecer del todo una vez recogidos y, en caso de no haberlos guardado, volver a aparecer al estar de vuelta en un escenario y desaparecer momentáneamente en caso de avanzar a otro. Para esto me serví una vez más de variables y de scripts de fotograma para sincronizarlas con el juego y así poder cumplir con los requerimientos para que todo funcionase correctamente.
- **Vídeo.** Para el vídeo me serví de la animación que realicé para la introducción del juego, la cual exporté desde hippani en calidad de vídeo. Una vez en el editor, le apliqué un chroma key para que el fondo verde que tenía desapareciese y dejase ver las líneas de tiempo inferiores. Me serví de imágenes transparentes (.png) dispuestas unas sobre otras y animadas a diferentes velocidades para dar sensación de profundidad, jugando también con desenfoques de lente. A la hora de exportar traté que pesase lo menos posible, quedando finalmente con un tamaño de poco más de 5 MB.
- **Instrucciones y ayuda al usuario.** Dentro del juego me vi en la necesidad de poner información sobre las mecánicas disponibles porque, a pesar de que el tono de la historia es algo críptico y que en cierta medida la vuelve abstrusa, sí que quise apostar por una jugabilidad apta para todo el mundo que te deje clara las bases desde el primer momento. De esta manera, a medida que el jugador avanza por el nivel se le revelan las mecánicas de las que dispone por medio de eventos, en cierta medida, instructivos donde se explica cada función. 
- **Menús y elementos de navegación.** En cuanto a la interfaz, creo que todos los botones son bastante explícitos e intuitivos de por sí salvo el que te lleva a jugar ya que este quería que suscitase algo más de misterio introduciendo al tono de la propia historia. Son botones bastante simples que al pulsar bien te llevan a otra opción del menú o varían algún valor como los slider del volumen de la música y los sonidos. Traté de hacerles como una pequeña animación a las tres opciones principales, pero lo intenté de un modo incorrecto y en caso de haber querido solucionarlo habría tenido que rediseñarlos por completo, cosa que el tiempo restante hasta la entrega no me permitía.
- **Música y sonidos.** Los recursos de audio pude integrarlos de forma bastante óptima en el juego. Asimismo, destacar que en el proyecto abundan los silencios llenados con sonidos vacíos, y la única melodía que hay la compuse yo mismo sirviéndome de un piano emulado por mi dispositivo móvil. La selección del resto de sonidos no fue del todo difícil porque tenía claro el tono que quería, quizás lo más soporífero fuera encontrar recursos de uso libre o sin derechos de autor.
- **Gráficos.** El diseño de los elementos gráficos lo realicé también yo mismo apostando por una estética monocromática y austera donde solo un color se colase dentro de la monocromía. De esta forma, podía usar ese tono para dar sombras y hacer algo más voluminosos los diseños del juego. Para los diseños de los inicuos me inspiré en los ángeles bíblicos, yendo tras un aspecto perturbador e imponente así como poderoso. La razón por la cual estos diseños no tienen sombras es porque quería esperar a ver como los introduciría en sus respectivos niveles del juego, pero dado a que sólo he llegado a realizar el primero, no me dio tiempo llegar a diseñar otros escenarios.




### Etapa 3: Problemas identificados

(que consideras que no  funciona correctamente y por qué )



# 4. Conclusiones 

(explica brevemente tu valoración, problemas que has detectado y que te gustaría hacer o mejorar en el futuro )







# 5 Referencias 

**Artículos y blogs** 

- Crofts, S., Fox, M., Retsema, A. and Williams, B. (2005) *Podcasting: A new technology in search of viable business models*First Monday, 10(9). https://doi.org/10.5210/fm.v10i9.1273. Recuperado el 8 de abril de 2020 de: https://journals.uic.edu/ojs/index.php/fm/article/view/1273/1193

**Recursos y materiales audiovisuales:**

* Música: Space white noise sound no copyright, Button free use sound & Piano by Juan José Gutiérrez Calvo
* Imágenes: Juan José Gutiérrez Calvo
* Tipografía: Times New Roman, Sans Seriff, Arial y Agency FB

**Herramientas utilizadas**

- Hippani Animator 5.1
- DaVinci Resolve
- Paint Tool SAI
- Photoshop CS6





https://creativecommons.org/licenses/?lang=es

Junio 2021
