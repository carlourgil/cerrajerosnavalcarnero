// Barrios y zonas de Navalcarnero. Cada entrada genera su landing en
// /zonas/<slug>/ para posicionamiento local.
//
// Solo Navalcarnero: no se añaden municipios de alrededor, para que la señal
// geográfica que recibe Google no se diluya.
//
// Los nombres están comprobados en documentación municipal y en los portales
// inmobiliarios que dividen el municipio por zonas (2026-11-09). Antes de
// añadir uno nuevo, comprobarlo igual: una landing de un barrio que no existe
// no engaña a Google, engaña al vecino que la encuentra.
//
// Lo que se cuenta de cada zona sale del tipo de vivienda que hay en ella, no
// de avisos concretos: no se inventan trabajos que no se han hecho.
export type Zone = {
  slug: string;
  name: string;
  arrivalTime: string;
  /** Una línea, para las tarjetas del mapa de cobertura. */
  short: string;
  metaDescription?: string;
  /** Párrafos de entrada de la landing del barrio. */
  intro: string[];
  /** Bloques con su titular. */
  sections: { title: string; body: string[] }[];
  /** Trabajos que encajan con el tipo de vivienda de la zona. */
  typical: string[];
};

export const zones: Zone[] = [
  {
    slug: "centro",
    metaDescription: "Cerrajeros en el Centro de Navalcarnero. Apertura de puertas, cambio de cerraduras y urgencias 24 horas. Llegada estimada de 10–15 minutos. NavaLlave.",
    arrivalTime: "10–15 minutos",
    name: "Centro",
    short: "El casco antiguo, alrededor de la Plaza de Segovia",
    intro: [
      "El centro de Navalcarnero es el casco antiguo que rodea la Plaza de Segovia, con sus soportales y sus calles estrechas. Es la zona con los edificios más veteranos del municipio, y eso se nota en las puertas.",
      "Aquí las cerraduras suelen llevar décadas puestas. Funcionan, pero cuestan, y es justo cuando una cerradura empieza a costar cuando se parte la llave dentro.",
    ],
    sections: [
      {
        title: "Apertura de puertas y cerraduras antiguas en el Centro",
        body: [
          "En portales de obra antigua es habitual encontrar cerraduras de borja o de gorja, de las de llave larga, y bombines de perfil europeo de primera generación. Las dos se abren sin romper nada, pero piden maña y paciencia.",
          "Son también las más fáciles de abrir para quien no debe. Si vives en el casco y tu bombín es el original, cambiarlo por uno antibumping es la mejora de seguridad más barata que puedes hacer.",
        ],
      },
      {
        title: "Llegada del cerrajero al casco antiguo de Navalcarnero",
        body: [
          "Las calles del centro son estrechas y muchas peatonales, y eso retrasa a cualquiera. Lo tenemos en cuenta al darte el tiempo de llegada: si hay que dejar la furgoneta lejos y subir con las herramientas, se cuenta.",
          "Lo que no cambia es el precio. La tarifa es la misma en el centro que en cualquier otro punto del municipio.",
        ],
      },
    ],
    typical: [
      "Llave partida dentro de un bombín viejo",
      "Cerraduras de portal que ya no giran bien",
      "Cambio de bombín en vivienda del casco",
      "Puertas de madera que han trabajado con la humedad",
    ],
  },

  {
    slug: "el-pinar",
    metaDescription: "Cerrajeros en El Pinar, Navalcarnero. Aperturas, bombines de seguridad y cerraduras para comunidades. Atención 24 horas y llegada estimada de 20–25 minutos.",
    arrivalTime: "20–25 minutos",
    name: "El Pinar",
    short: "Vivienda nueva y urbanizaciones con zonas comunes",
    intro: [
      "El Pinar es de lo más reciente de Navalcarnero: la mayor parte de sus viviendas se levantaron a partir del año 2000, con urbanizaciones cerradas, piscina y zonas comunes.",
      "Con obra nueva el problema casi nunca es una cerradura gastada. Son puertas en buen estado y bombines modernos, así que lo que aparece es otra cosa: llaves dentro, mandos que fallan y accesos comunes que hay que controlar.",
    ],
    sections: [
      {
        title: "Cambio de bombines en puertas blindadas de El Pinar",
        body: [
          "La vivienda de esta época sale de fábrica con puerta blindada y bombín de perfil europeo. Eso es bueno para la seguridad y neutro para la apertura: se sigue trabajando por el cilindro, sin tocar la hoja.",
          "Lo que sí conviene mirar es si el bombín que trae la puerta es el básico que pone la promotora. Muchas veces lo es, y subirlo a uno certificado es cuestión de media hora.",
        ],
      },
      {
        title: "Cerrajería para comunidades y urbanizaciones de El Pinar",
        body: [
          "Portal, garaje, piscina y trastero multiplican las llaves por vivienda, y con los años acaban circulando copias que ya nadie controla.",
          "Cuando una comunidad decide poner orden, lo que se cambia es la cerradura de los accesos comunes y se reparten juegos nuevos con registro de cuántos se entregan. Se puede hacer por fases para repartir el gasto.",
        ],
      },
    ],
    typical: [
      "Llaves dentro de casa o del coche",
      "Subir el bombín de serie a uno antibumping",
      "Cerraduras de portal y de garaje de la comunidad",
      "Puertas de trastero y de piscina",
    ],
  },

  {
    slug: "la-dehesa",
    metaDescription: "Cerrajeros en La Dehesa, Navalcarnero. Apertura de puertas y cerraduras para viviendas y chalets. Urgencias 24 horas. Llegada estimada de 15–20 minutos.",
    arrivalTime: "15–20 minutos",
    name: "La Dehesa",
    short: "Zona residencial de crecimiento reciente",
    intro: [
      "La Dehesa forma, junto a El Pinar, la parte del municipio que más ha crecido en las dos últimas décadas. Es zona residencial, con vivienda construida en su mayoría desde el año 2000.",
      "Aquí se mezclan bloques y vivienda unifamiliar, y cada una pide una cosa distinta: el bloque, control de los accesos comunes; el chalé, revisar por dónde se entra además de por la puerta principal.",
    ],
    sections: [
      {
        title: "Cerraduras para puertas y accesos de chalets en La Dehesa",
        body: [
          "En un chalé o un adosado, la puerta de entrada suele ser la parte más protegida. Lo que falla es la de atrás, la del garaje o la del jardín, que muchas veces llevan una cerradura mucho más sencilla.",
          "Merece la pena revisarlas todas a la vez: una puerta trasera con un bombín de supermercado deja sin sentido la principal.",
        ],
      },
      {
        title: "Revisión de cerraduras tras las vacaciones en La Dehesa",
        body: [
          "En zonas residenciales los intentos de robo se concentran cuando las casas se quedan vacías. Si vuelves y encuentras la cerradura tocada, no fuerces: puede quedar inservible justo cuando más la necesitas.",
          "Se sustituye el mismo día para que la casa quede cerrada esa noche, y la factura detalla lo instalado, que es lo que pide el seguro.",
        ],
      },
    ],
    typical: [
      "Cerradura forzada al volver de un viaje",
      "Puertas traseras y de garaje con cerradura floja",
      "Bombines antibumping en vivienda unifamiliar",
      "Apertura de puertas sin daños",
    ],
  },

  {
    slug: "san-andres",
    metaDescription: "Cerrajeros en San Andrés, Navalcarnero. Apertura de puertas y cambio de cerraduras con presupuesto previo. Servicio 24 horas. Llegada estimada de 15–20 minutos.",
    arrivalTime: "15–20 minutos",
    name: "San Andrés",
    short: "Residencial, junto a la zona de El Pinar",
    intro: [
      "San Andrés queda en la zona de crecimiento del municipio, junto a El Pinar, con el que comparte el consejo de barrio. Es área residencial, bien comunicada por la avenida que le da nombre.",
      "Por el tipo de vivienda, lo que aparece aquí es lo propio de una casa donde se vive a diario: llaves olvidadas dentro, bombines que piden relevo y puertas de comunidad que se quedan abiertas.",
    ],
    sections: [
      {
        title: "Apertura de puertas urgente en San Andrés",
        body: [
          "La puerta que se cierra de golpe, la bolsa de la compra en el suelo y las llaves en la encimera. Pasa a todo el mundo y casi siempre se resuelve sin tocar la cerradura.",
          "Si la puerta está solo encajada, sin vuelta de llave, son minutos. Si está cerrada con llave, se trabaja el bombín y después sigue abriendo igual que antes.",
        ],
      },
      {
        title: "Cambio de cerraduras al mudarse a San Andrés",
        body: [
          "Mudanza, alquiler nuevo o una reforma con gente entrando y saliendo: en los tres casos hay llaves de tu puerta que no sabes dónde están.",
          "No hace falta cambiar la cerradura entera. Cambiando el cilindro, las llaves antiguas dejan de abrir en el momento y te cuesta bastante menos.",
        ],
      },
    ],
    typical: [
      "Apertura de puerta con las llaves dentro",
      "Cambio de bombín al entrar a vivir",
      "Cerraduras de portal de comunidad",
      "Llaves perdidas o copias sin controlar",
    ],
  },

  {
    slug: "san-isidro",
    metaDescription: "Cerrajeros en San Isidro, Navalcarnero. Cambio de bombines, cerraduras para comunidades y aperturas urgentes. Atención 24 horas y llegada estimada de 15–20 minutos.",
    arrivalTime: "15–20 minutos",
    name: "San Isidro",
    short: "Promoción reciente, en el sector de Alparrache",
    intro: [
      "El barrio de San Isidro nació del desarrollo urbanístico del sector Alparrache-La Dehesa, recogido en el planeamiento del municipio. Es vivienda de promoción, levantada toda en el mismo periodo.",
      "Eso tiene una consecuencia práctica: en un barrio así, todas las puertas son iguales. El mismo modelo de cerradura, el mismo bombín y, con los años, el mismo desgaste a la vez.",
    ],
    sections: [
      {
        title: "Sustitución de bombines de obra en San Isidro",
        body: [
          "Cuando una promoción entera monta el mismo cilindro básico, quien conoce ese modelo lo conoce para todo el bloque. Es el argumento más claro para subir a un bombín certificado, aunque la puerta sea nueva.",
          "La ventaja es que el recambio es el mismo para todos los vecinos: si varios lo cambiáis a la vez, el trabajo se organiza en una sola visita.",
        ],
      },
      {
        title: "Cambio de cerraduras en comunidades de San Isidro",
        body: [
          "No hace falta que un edificio tenga cuarenta años para que las llaves del portal se hayan multiplicado. Basta con unas cuantas mudanzas y algún juego perdido.",
          "Cambiar la cerradura del portal y repartir copias con registro es un gasto pequeño repartido entre vecinos, y es lo que de verdad cierra el edificio.",
        ],
      },
    ],
    typical: [
      "Cambio de bombín en vivienda de promoción",
      "Cerradura del portal y del garaje",
      "Apertura de puertas sin daños",
      "Llaves partidas dentro del cilindro",
    ],
  },

  {
    slug: "el-pijorro",
    metaDescription: "Cerrajeros en El Pijorro, Navalcarnero. Apertura de puertas y refuerzo de cerraduras para viviendas. Servicio 24 horas y llegada estimada de 15–20 minutos.",
    arrivalTime: "15–20 minutos",
    name: "El Pijorro",
    short: "Urbanización de vivienda unifamiliar",
    intro: [
      "El Pijorro es una de las urbanizaciones de Navalcarnero, de las que el Ayuntamiento agrupa en el consejo de urbanizaciones junto a Los Manzanos, Canto Pelín o San Sebastián. Predomina la vivienda unifamiliar con parcela.",
      "En una casa con parcela la seguridad no se juega solo en la puerta de entrada: se juega en el perímetro, en el garaje y en lo que haya en el jardín.",
    ],
    sections: [
      {
        title: "Seguridad de puertas y accesos en El Pijorro",
        body: [
          "Puerta principal, puerta de servicio, garaje, caseta y cancela. Cada una tiene su cerradura, y casi siempre la más débil es la que menos se usa.",
          "Lo razonable es revisarlas en una sola visita y reforzar las que lo pidan, en vez de poner una cerradura cara en la entrada y dejar la de atrás con un bombín de tres euros.",
        ],
      },
      {
        title: "Precio de apertura de puertas en El Pijorro",
        body: [
          "Estar en una urbanización no encarece el servicio: la tarifa de apertura es la misma que en el casco. Lo que puede cambiar es el tiempo de llegada, y eso se dice al teléfono, no al llegar.",
          "Si la urbanización tiene control de acceso, dilo al llamar para dejarlo resuelto antes y no perder minutos en la entrada.",
        ],
      },
    ],
    typical: [
      "Cancelas y puertas de parcela",
      "Cerraduras de garaje y de caseta",
      "Apertura de vivienda unifamiliar sin daños",
      "Bombines antibumping en todos los accesos",
    ],
  },

  {
    slug: "los-manzanos",
    metaDescription: "Cerrajeros en Los Manzanos, Navalcarnero. Urgencias, apertura de puertas y reparación de cerraduras tras un robo. Llegada estimada de 15–20 minutos.",
    arrivalTime: "15–20 minutos",
    name: "Los Manzanos",
    short: "Urbanización residencial, con casas con parcela",
    intro: [
      "Los Manzanos es otra de las urbanizaciones del municipio, que aparece en la documentación municipal junto a El Pijorro y Covadonga. Es zona de vivienda unifamiliar, fuera del casco.",
      "Son casas donde se vive todo el año y también segundas residencias, y esa mezcla cambia lo que hay que vigilar: una casa que pasa semanas sola pide otra cosa que una ocupada a diario.",
    ],
    sections: [
      {
        title: "Revisión de cerraduras en viviendas de Los Manzanos",
        body: [
          "Una vivienda vacía entre semana o fuera de temporada es un objetivo cómodo, porque nadie nota la puerta forzada hasta que vuelve el dueño.",
          "Ahí lo que cuenta no es solo el bombín, es el escudo que impide arrancarlo y el cerradero del marco, que es la pieza que suele ceder antes que la cerradura.",
        ],
      },
      {
        title: "Cerrajero urgente tras un robo en Los Manzanos",
        body: [
          "No la fuerces tú para entrar: una cerradura ya tocada puede quedar bloqueada del todo y complicar la apertura.",
          "Haz fotos antes de que cambiemos nada y guarda la cerradura vieja; al seguro y a la denuncia les sirve. Se sustituye el mismo día para que la casa quede cerrada esa noche.",
        ],
      },
    ],
    typical: [
      "Cerradura forzada en vivienda vacía",
      "Escudos protectores y refuerzo del marco",
      "Puertas de garaje y accesos de parcela",
      "Apertura de puertas a cualquier hora",
    ],
  },

  {
    slug: "poligono-alparrache",
    metaDescription: "Cerrajeros en el Polígono Alparrache de Navalcarnero. Apertura de locales y cerraduras para naves y oficinas. Servicio 24 horas. Llegada estimada de 20–25 minutos.",
    arrivalTime: "20–25 minutos",
    name: "Polígono Alparrache",
    short: "Naves, locales y oficinas",
    intro: [
      "El Polígono Alparrache es el área industrial de Navalcarnero: naves, talleres, almacenes y oficinas. Aquí una cerradura no es una molestia doméstica, es un negocio que no puede abrir.",
      "Por eso los avisos del polígono tienen dos horas punta: a primera hora, cuando alguien no puede entrar a trabajar, y al cierre, cuando algo no cierra y no se puede dejar la nave así.",
    ],
    sections: [
      {
        title: "Cerrajería para cierres y puertas de naves en Alparrache",
        body: [
          "Persianas y cierres enrollables, puertas peatonales de chapa, portones correderos. No se parecen a una puerta de casa: las cerraduras son más grandes, llevan más recorrido y sufren mucho más uso.",
          "Lo que más falla es lo que más se mueve: el bombín del cierre, la cerradura de la puerta peatonal y la guía de la persiana. Se puede abrir y reparar sin cortar la chapa.",
        ],
      },
      {
        title: "Apertura urgente de locales y naves en Alparrache",
        body: [
          "Un aviso en el polígono a las siete de la mañana no admite esperar al día siguiente. El servicio es de 24 horas también aquí, y la tarifa de urgencia se dice por teléfono antes de salir.",
          "Para empresas se factura con todos los datos y el detalle de lo instalado, para que entre sin problema en la contabilidad.",
        ],
      },
    ],
    typical: [
      "Cierres metálicos y persianas de local",
      "Puertas peatonales de nave y almacén",
      "Cajas fuertes de oficina",
      "Cambio de cerraduras al cambiar de inquilino",
    ],
  },
];
