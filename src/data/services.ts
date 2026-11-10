import { SITE } from "../lib/config";

export type Service = {
  slug: string;
  /** Basename de la foto en /public/images, sin el sufijo de tamaño. */
  image?: string;
  title: string;
  /** Una línea para las tarjetas. */
  short: string;
  /** Resumen de dos frases: se usa de subtítulo y de meta description. */
  description: string;
  bullets: string[];
  /** Párrafos de entrada de la página del servicio. */
  intro: string[];
  /** Bloques de texto con su titular. */
  sections: { title: string; body: string[] }[];
  /** Preguntas propias del servicio. Alimentan también el FAQPage de Google. */
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "apertura-de-puertas",
    image: "apertura-de-puertas",
    title: "Apertura de puertas",
    short: "Sin romper tu puerta",
    description:
      "¿Te has dejado las llaves dentro o se ha roto una en la cerradura? Abrimos la puerta sin destrozarla, con ganzúa o descarrile según el tipo de bombín.",
    bullets: [
      "La cerradura sigue funcionando después de abrir",
      `${SITE.priceDay} € de lunes a viernes de ${SITE.dayStart}:00 a ${SITE.dayEnd}:00, ${SITE.priceNight} € el resto`,
      "Precio cerrado por teléfono antes de salir",
      "También puertas blindadas y acorazadas",
      "Disponibles a cualquier hora del día",
    ],
    intro: [
      `Quedarse fuera de casa pasa siempre en el peor momento: con la compra en el suelo, con un niño dentro o a las tres de la mañana. La buena noticia es que la mayoría de las puertas de ${SITE.location} se abren sin romper nada, y la cerradura sigue funcionando igual que antes.`,
      "Lo primero que hacemos es preguntarte por teléfono qué tipo de puerta tienes y qué ha pasado exactamente. Con eso ya sabemos con qué vamos a trabajar, te decimos lo que cuesta y salimos. No hay presupuestos que cambian al llegar.",
    ],
    sections: [
      {
        title: "Cómo se abre una puerta sin romperla",
        body: [
          "Si la puerta está simplemente cerrada de golpe, sin vuelta de llave, se abre con una radiografía o una lámina por el resbalón: es cuestión de minutos y no se toca nada.",
          "Si está cerrada con llave, se trabaja sobre el bombín. El ganzuado mueve los pitones uno a uno hasta alinearlos, igual que haría la llave. En bombines viejos o de baja calidad también vale el método de impresión. En ambos casos la cerradura queda intacta.",
          "Taladrar es el último recurso, y solo cuando la cerradura ya está rota, bloqueada o es un modelo de seguridad que no admite otra cosa. Si llegamos a ese punto te lo decimos antes de tocarla, con lo que cuesta sustituirla, y decides tú.",
        ],
      },
      {
        title: "Llave partida dentro del bombín",
        body: [
          "Es más común de lo que parece, sobre todo en invierno y en cerraduras que llevan tiempo costando girar. El trozo de llave se extrae con un extractor, sin desmontar la cerradura.",
          "Una vez fuera, lo importante es por qué se partió. Si la llave estaba desgastada, se saca una copia nueva; si lo que está forzado es el mecanismo, lo normal es que vuelva a pasar, y ahí sí conviene cambiar el bombín.",
        ],
      },
      {
        title: "Puertas blindadas y acorazadas",
        body: [
          "Una puerta blindada es una puerta normal reforzada con chapa: se abre igual que cualquier otra, por el bombín. Una acorazada es un bloque de acero con marco propio y varios puntos de anclaje, y ahí la paciencia cuenta más que la fuerza.",
          "En las dos, forzar es el camino caro: romper una acorazada puede costar más que la puerta. Por eso se trabaja siempre por la cerradura.",
        ],
      },
      {
        title: "Qué necesitas tener a mano",
        body: [
          "Algo que acredite que vives ahí: el DNI con esa dirección, un contrato de alquiler, una factura a tu nombre o un vecino que te conozca. No es manía nuestra, es lo que nos protege a los dos.",
          "Si no tienes nada encima porque está todo dentro de casa, se busca la forma: con el portero, con la comunidad o con el propietario. Lo hablamos al llamar.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Se va a estropear la cerradura al abrirla?",
        a: "En la mayoría de los casos no. Las técnicas que usamos trabajan la cerradura como lo haría la llave, así que después sigue abriendo igual. Solo hay que sustituirla cuando ya venía rota o cuando hay que taladrar, y eso te lo decimos antes.",
      },
      {
        q: "¿Cuánto tardáis en llegar?",
        a: `La llegada media en ${SITE.serviceArea} es de ${SITE.arrivalTime}. Si en ese momento vamos a tardar más, te lo decimos al teléfono, no cuando ya estás esperando.`,
      },
      {
        q: "¿Cuánto cuesta abrir una puerta?",
        a: `${SITE.priceDay} € de lunes a viernes de ${SITE.dayStart}:00 a ${SITE.dayEnd}:00, y ${SITE.priceNight} € por la noche, los fines de semana y los festivos. Es para puertas con la cerradura en estado normal; si está forzada o rota, te decimos qué cuesta arreglarla antes de tocar nada.`,
      },
      {
        q: "Se ha cerrado la puerta con un niño o una mascota dentro, ¿qué hago?",
        a: "Dilo nada más llamar. Esos avisos van los primeros y se atienden como emergencia. Si hay riesgo real e inmediato, llama antes al 112.",
      },
    ],
  },

  {
    slug: "urgencias-24h",
    image: "urgencias-24h",
    title: "Urgencias 24 horas",
    short: "Noches, festivos y fines de semana",
    description:
      "Servicio de guardia a cualquier hora, también en festivos y de madrugada. Llegada media de 20-30 minutos y precio acordado antes de salir.",
    bullets: [
      "Guardia real a cualquier hora, también en festivos",
      `Llegada media de ${SITE.arrivalTime}`,
      "Hablas con el técnico, no con una centralita",
      "Precio acordado por teléfono antes de salir",
      "Avisos con menores o mascotas dentro, los primeros",
    ],
    intro: [
      "Las urgencias de cerrajería no avisan. Y cuando ocurren, el problema no es solo la puerta: es no saber a quién llamas, cuánto te va a costar ni si alguien va a aparecer de verdad.",
      `En ${SITE.businessName} el teléfono de guardia lo coge ${SITE.technicianName}, que es el mismo que se sube a la furgoneta. No hay centralita que recoge el aviso y lo revende al primero que lo acepte.`,
    ],
    sections: [
      {
        title: "Qué entra en una urgencia",
        body: [
          "Quedarse fuera de casa, con o sin llaves dentro. Una llave partida en el bombín. Una cerradura que ya no gira. Una puerta que no cierra y deja la casa abierta. Un intento de robo que ha dejado la cerradura destrozada.",
          "También las puertas de local y de portal: un negocio que no puede abrir por la mañana, o un portal que se queda abierto toda la noche, son urgencias aunque no lo parezcan.",
        ],
      },
      {
        title: "Por la noche y en festivos se paga más, y se dice antes",
        body: [
          `Para abrir una puerta de vivienda con la cerradura en estado normal, la tarifa es de ${SITE.priceDay} € de ${SITE.dayHoursLabel} y de ${SITE.priceNight} € ${SITE.nightHoursLabel}. Para otros avisos, te confirmamos el precio por teléfono antes de salir.`,
          "En la web se ve siempre la tarifa que toca a esa hora, sin tener que calcular nada. Y se confirma por teléfono antes de que salga el técnico.",
        ],
      },
      {
        title: "Después de un intento de robo",
        body: [
          "Si te han forzado la puerta, lo primero es poder cerrar esa misma noche. Se sustituye la cerradura o el bombín en el momento y la vivienda queda asegurada.",
          "Guarda la cerradura vieja y haz fotos antes de que la cambiemos: al seguro y a la denuncia les sirven. Te damos factura con el detalle de lo sustituido, que es lo que te van a pedir.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿De verdad atendéis de madrugada?",
        a: `Sí. El servicio es ${SITE.hours}, incluidos domingos y festivos. Lo que cambia de noche no es la disponibilidad, es la tarifa, y se dice por teléfono antes de salir.`,
      },
      {
        q: "¿Me va a atender una centralita?",
        a: `No. El teléfono lo coge ${SITE.technicianName}, el cerrajero que va a ir. Por eso puede decirte por teléfono qué va a hacer y cuánto cuesta.`,
      },
      {
        q: "¿Cobráis por desplazamiento si al final no se puede abrir?",
        a: "El precio se acuerda antes de salir y es el que se factura. Si al llegar la situación no es la que se describió por teléfono, se te dice antes de empezar y decides tú.",
      },
    ],
  },

  {
    slug: "apertura-de-coches",
    image: "apertura-de-coches",
    title: "Apertura de coches",
    short: "Llaves dentro, sin dañar la junta",
    description:
      "Abrimos el coche con las llaves dentro sin forzar la cerradura ni marcar la junta. Hace falta acreditar que el vehículo es tuyo.",
    bullets: [
      "Sin dañar la junta, la pintura ni la cerradura",
      "También con el motor en marcha o el niño dentro",
      "Turismos, furgonetas y vehículos con cierre centralizado",
      "Hay que acreditar la propiedad del vehículo",
      "Presupuesto cerrado por teléfono",
    ],
    intro: [
      "Las llaves dentro del coche, el maletero cerrado con el bolso dentro o el mando que deja de responder con el motor arrancado. Son avisos de todos los días y casi siempre se resuelven en minutos.",
      "La diferencia está en cómo. Una apertura mal hecha deja la junta de la ventanilla marcada, la pintura rayada o el cierre centralizado tocado, y eso en un taller cuesta bastante más que la apertura.",
    ],
    sections: [
      {
        title: "Cómo se abre sin dejar marca",
        body: [
          "Se trabaja desde el hueco de la puerta, separando lo justo para pasar una varilla hasta el tirador o el botón del seguro. La junta se protege con una cuña de aire que reparte la presión en vez de concentrarla en un punto.",
          "En vehículos con el cierre centralizado electrónico se actúa sobre el mando interior, no sobre la cerradura de la puerta. La llave original sigue funcionando igual después.",
        ],
      },
      {
        title: "Con el motor en marcha o alguien dentro",
        body: [
          "Pasa más de lo que parece: se cierra el coche con el motor encendido y las llaves puestas. Es un aviso urgente, por el gasto de combustible y porque algunos modelos bloquean todo al detectar movimiento.",
          "Si lo que ha quedado dentro es un niño o un animal, dilo nada más llamar: va por delante de cualquier otro aviso. Si ves riesgo inmediato, llama antes al 112.",
        ],
      },
      {
        title: "Lo que la ley pide antes de abrir",
        body: [
          "Hay que acreditar que el vehículo es tuyo o que lo tienes legítimamente: permiso de circulación, ficha técnica, contrato de alquiler o seguro a tu nombre. Con el DNI coincidiendo basta.",
          "Si la documentación está dentro del coche, se busca otra vía: la aseguradora, el concesionario o la empresa de alquiler pueden confirmarlo. Lo hablamos al llamar, pero sin acreditar nada no se abre ningún vehículo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Vais a rayar la pintura o estropear la goma?",
        a: "Con cuña de aire y varilla, no. La presión se reparte en vez de hacer palanca en un punto, que es lo que marca la junta y abolla el marco.",
      },
      {
        q: "¿Podéis hacerme una llave nueva si la he perdido?",
        a: "Lo que hacemos es la apertura del vehículo. Las llaves con transponder y los mandos codificados se programan en el servicio oficial o en un especialista de automoción; te decimos a dónde ir.",
      },
      {
        q: "¿Qué documentación me vais a pedir?",
        a: "El permiso de circulación o la ficha técnica, y tu DNI. Si es de alquiler o de empresa, el contrato o la autorización. Es el procedimiento legal y protege también a quien de verdad es el dueño.",
      },
    ],
  },

  {
    slug: "apertura-de-cajas-fuertes",
    image: "apertura-de-cajas-fuertes",
    title: "Apertura de cajas fuertes",
    short: "Sin destruir el contenido",
    description:
      "Combinación olvidada, teclado sin pilas o cerradura bloqueada. Abrimos cajas fuertes de casa y de negocio intentando siempre no destruirlas.",
    bullets: [
      "Combinación olvidada o teclado que no responde",
      "Apertura por manipulación siempre que se pueda",
      "Cambio de combinación después de abrir",
      "Cajas de vivienda, de local y empotradas",
      "Hay que acreditar la propiedad de la caja",
    ],
    intro: [
      "Una caja fuerte cerrada es un problema raro: no corre prisa como una puerta, pero dentro suele haber documentación, dinero o cosas que no se pueden reponer. Y abrirla mal significa, muchas veces, destruirla.",
      "Por eso lo primero es saber qué caja es: marca, modelo, si es de llave, de combinación mecánica o electrónica, y desde cuándo no abre. Con una foto de la puerta y de la placa se puede decir bastante por teléfono.",
    ],
    sections: [
      {
        title: "Lo que suele fallar, y casi nunca es la caja",
        body: [
          "En las electrónicas, lo más común son las pilas. Un teclado que no se enciende o que pita raro suele ser eso, y se resuelve alimentando la caja desde fuera, sin abrir nada por la fuerza.",
          "En las mecánicas, el problema está en el disco o en el relé: la combinación es correcta pero la caja no reconoce el punto exacto. También se arregla por manipulación.",
          "Y luego está la combinación olvidada, o la del antiguo dueño del local, que es el aviso más frecuente de todos.",
        ],
      },
      {
        title: "Manipulación antes que taladro",
        body: [
          "Se intenta siempre abrir sin dañar: manipulando el mecanismo, recuperando la combinación o alimentando la electrónica. Una caja abierta así sigue sirviendo al día siguiente.",
          "Cuando no hay otra vía, el taladro se hace en el punto previsto por el fabricante para eso, no a lo bruto: se perfora, se abre y después se repara y se vuelve a dejar operativa. Si una caja no va a poder repararse, se te dice antes de empezar.",
        ],
      },
      {
        title: "Después de abrir, combinación nueva",
        body: [
          "Una caja que se ha abierto porque nadie sabía la combinación se queda sin dueño hasta que se le pone una nueva. Se cambia en el momento y te explicamos cómo cambiarla tú en adelante.",
          "Si la caja venía con el local o con la casa, este es el momento de cambiarla sí o sí: no sabes cuánta gente conoce la anterior.",
        ],
      },
      {
        title: "Qué hay que acreditar",
        body: [
          "Que la caja es tuya: factura de compra, contrato del local o de la vivienda donde está, o escritura. Para cajas de empresa, la autorización de quien pueda darla.",
          "Es el mismo criterio que con los coches y las viviendas. Una caja fuerte guarda precisamente lo que alguien querría abrir sin permiso.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Se puede abrir sin romperla?",
        a: "En muchos casos sí, sobre todo cuando el problema son las pilas, la electrónica o una combinación olvidada. Se intenta siempre por manipulación antes que por taladro.",
      },
      {
        q: "¿Qué pasa si hay que taladrar?",
        a: "Se perfora por el punto previsto por el fabricante, se abre y después se repara para dejarla operativa. Te decimos antes de empezar si tu modelo admite reparación o no.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del modelo y del tipo de bloqueo, así que no hay tarifa fija: se da presupuesto cerrado antes de empezar. Con una foto de la puerta de la caja y de la placa del fabricante se puede concretar bastante por teléfono.",
      },
    ],
  },

  {
    slug: "cambio-de-cerraduras",
    image: "cambio-de-cerraduras",
    title: "Cambio de cerraduras",
    short: "Instalación y sustitución",
    description:
      "Cambiamos cerraduras de vivienda, portal y local: por desgaste, después de un robo o cuando hay llaves por ahí que ya no quieres que abran.",
    bullets: [
      "Cerraduras de vivienda, portal, local y garaje",
      "Después de un robo, el mismo día",
      "Cuando hay copias de llave sueltas",
      "Presupuesto cerrado antes de tocar la puerta",
      "Factura con el modelo instalado, para el seguro",
    ],
    intro: [
      "Hay tres motivos para cambiar una cerradura, y solo uno es que esté rota. Los otros dos son que haya llaves por ahí que ya no controlas —un inquilino que se va, una reforma, una copia perdida— y que la que tienes sea de las que se abren en treinta segundos.",
      "Antes de cambiar nada, se mira si hace falta. Muchas veces el problema es solo el bombín, y eso es bastante más barato que sustituir la cerradura entera.",
    ],
    sections: [
      {
        title: "Cerradura entera o solo el bombín",
        body: [
          "El bombín es la pieza donde entra la llave. La cerradura es todo el mecanismo que mueve los puntos de cierre. Si lo que falla es la seguridad o quieres que las llaves viejas dejen de abrir, basta con el bombín.",
          "Hay que cambiar la cerradura completa cuando el mecanismo está forzado, cuando los pestillos no salen bien, cuando la puerta ha trabajado y el desgaste está dentro, o cuando quieres subir de nivel de seguridad y la carcasa actual no admite un bombín mejor.",
          "Te decimos cuál de los dos casos es el tuyo antes de empezar. No se cambia una cerradura entera para cobrar más.",
        ],
      },
      {
        title: "Después de un robo o un intento",
        body: [
          "Una cerradura forzada no se arregla: por dentro queda tocada aunque siga girando, y la próxima vez cede antes. Se sustituye.",
          "Se hace el mismo día, para que no tengas que dormir con la casa abierta. Y se aprovecha para revisar el resto: el marco, los puntos de anclaje y la cerradura del portal, que es por donde suelen entrar.",
          "La factura detalla el modelo instalado, que es lo que pide el seguro.",
        ],
      },
      {
        title: "Portales, locales y garajes",
        body: [
          "En una comunidad el problema no es el robo, es el control: llaves de vecinos que se fueron, copias hechas sin permiso y portales que acaban abriéndose con cualquier cosa.",
          "Se cambia la cerradura del portal y se entregan las copias que haga falta, con registro de cuántas se han dado. En locales, lo habitual es cambiar al entrar al alquiler: nunca sabes cuántas llaves hay del anterior inquilino.",
        ],
      },
      {
        title: "Qué cerradura se pone",
        body: [
          "La que encaje con tu puerta y con lo que necesitas, no la más cara del catálogo. Una puerta de madera en un primero interior no pide lo mismo que un bajo con ventana a la calle.",
          "Se trabaja con marcas de recambio habitual, para que dentro de unos años se pueda sustituir una pieza sin cambiar la puerta entera.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tengo que cambiar la cerradura entera o me vale el bombín?",
        a: "Si la cerradura funciona bien y lo que quieres es que las llaves antiguas dejen de abrir, con el bombín basta y es más barato. La cerradura completa se cambia cuando el mecanismo está forzado o desgastado.",
      },
      {
        q: "¿Lo hacéis el mismo día?",
        a: "Sí. Las cerraduras y bombines más habituales van en la furgoneta, así que se cambia en el momento. Si tu puerta pide un modelo concreto que no llevemos, te decimos cuándo lo tenemos.",
      },
      {
        q: "¿Cuánto cuesta cambiar una cerradura?",
        a: "Depende de la cerradura y de la puerta, así que va con presupuesto cerrado antes de tocar nada. La tarifa fija que tenemos publicada es la de apertura de puertas; lo demás se presupuesta.",
      },
      {
        q: "Soy el casero y se ha ido el inquilino, ¿puedo cambiarla?",
        a: "Si la vivienda está libre y el contrato terminado, sí. Mientras haya un contrato en vigor y el inquilino viviendo ahí, no se puede cambiar la cerradura sin su conocimiento. Es un asunto legal, no técnico.",
      },
    ],
  },

  {
    slug: "bombines-antibumping",
    image: "cambio-de-bombin",
    title: "Bombines antibumping",
    short: "Cilindros de alta seguridad",
    description:
      "El bombín es lo que se ataca en la mayoría de los robos. Instalamos cilindros certificados que resisten el bumping, el ganzuado y el taladro.",
    bullets: [
      "Protección real contra bumping, ganzúa y taladro",
      "Cambio en menos de media hora",
      "Las llaves antiguas dejan de abrir en el momento",
      "No hace falta cambiar toda la cerradura",
      "Llaves con tarjeta: nadie copia sin ella",
    ],
    intro: [
      "El bumping es una técnica que abre un bombín corriente en segundos, con una llave preparada y un golpe seco. No hace ruido, no deja marca y por eso muchos robos no parecen robos: la puerta está intacta y el seguro pregunta si de verdad estaba cerrada.",
      "La defensa no es poner una puerta más gorda. Es cambiar la pieza concreta que se ataca, que es el bombín, y cuesta mucho menos de lo que la gente piensa.",
    ],
    sections: [
      {
        title: "Qué hace distinto a un bombín antibumping",
        body: [
          "Lleva pitones de formas y materiales distintos dentro del mismo cilindro, de modo que el golpe no los alinea todos a la vez. Eso es lo que anula el bumping.",
          "Añade elementos antiganzúa, que hacen que el tanteo no encuentre el punto, e inserciones de acero templado contra el taladro y el arrancamiento.",
          "Lo que distingue a uno bueno de uno que solo lo pone en la caja es la certificación. Fíjate en que el producto declare ensayos contra bumping, ganzuado, taladro y extracción, no solo en la palabra en el envase.",
        ],
      },
      {
        title: "La tarjeta de propiedad",
        body: [
          "Estos bombines vienen con una tarjeta codificada. Sin ella nadie puede sacar una copia de tu llave, ni en una ferretería ni en un servicio técnico.",
          "Esa tarjeta es el bombín. Guárdala donde guardas las escrituras, no en el cajón de la entrada ni colgada del llavero.",
        ],
      },
      {
        title: "Se cambia solo el bombín, no la puerta",
        body: [
          "El cilindro se saca quitando un tornillo del canto de la puerta. Es media hora de trabajo, sin obra, sin polvo y sin tocar la carpintería.",
          "Desde ese momento las llaves antiguas dejan de abrir. Por eso es la solución cuando se va un inquilino, cuando has perdido un juego o cuando han entrado en el portal.",
          "Si la cerradura tiene años y el mecanismo va justo, conviene revisarla a la vez: un bombín bueno en una cerradura cansada rinde menos de lo que debería.",
        ],
      },
      {
        title: "Qué más mirar además del bombín",
        body: [
          "Un escudo protector es lo que impide que agarren el cilindro por fuera y lo arranquen. Un bombín de alta seguridad sin escudo deja la mitad del trabajo hecho.",
          "Y el cerradero, que es la pieza del marco: en muchas puertas antiguas la cerradura aguanta y lo que cede es el marco. Se revisa en la misma visita.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué es exactamente el bumping?",
        a: "Una técnica que usa una llave limada a la altura máxima y un golpe seco para alinear de golpe los pitones del bombín. Abre cilindros corrientes en segundos, sin ruido y sin dejar marca en la puerta.",
      },
      {
        q: "¿Hay que cambiar la puerta o la cerradura entera?",
        a: "No. Se sustituye solo el cilindro, que sale con un tornillo del canto de la puerta. Media hora, sin obra.",
      },
      {
        q: "¿Las llaves que ya andan por ahí dejarán de abrir?",
        a: "Sí, en el momento en que se cambia el bombín. Es la razón más habitual para cambiarlo cuando se va un inquilino o se pierde un juego de llaves.",
      },
      {
        q: "¿Puedo hacer copias de la llave?",
        a: "Las que quieras, pero solo presentando la tarjeta de propiedad que viene con el bombín. Sin esa tarjeta no se puede copiar, y eso es justo lo que lo hace seguro.",
      },
    ],
  },
];
