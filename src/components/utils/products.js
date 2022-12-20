const productos = [
  //Termicas
  {
    id: 1,
    title: "Termica Bipolar Siemens",
    description:
      "Es popularmente conocida como llave térmica. Este dispositivo protege la instalación del recalentamiento de los cables (para evitar que se quemen) ante una sobrecarga. Cuando aumenta demasiado la corriente que circula por el circuito, este dispositivo se calienta y corta. A diferencia de los fusibles -que deben ser reemplazados tras un único uso-, la llave termomagnética puede ser reconectada",
    stock: 30,
    type: "termicas",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_933305-MLA44836921013_022021-O.webp",
      secondImage:
        "https://http2.mlstatic.com/D_NQ_NP_666469-MLA42960701567_072020-O.webp",
    },
    price: 22500,
  },

  {
    id: 2,
    title: "Termica Tetrapolar Steck",
    description:
      "Es popularmente conocida como llave térmica. Este dispositivo protege la instalación del recalentamiento de los cables (para evitar que se quemen) ante una sobrecarga. Cuando aumenta demasiado la corriente que circula por el circuito, este dispositivo se calienta y corta. A diferencia de los fusibles -que deben ser reemplazados tras un único uso-, la llave termomagnética puede ser reconectada",
    stock: 30,
    type: "termicas",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_871542-MLA50697568629_072022-O.webp",
      secondImage:
        "https://http2.mlstatic.com/D_NQ_NP_962178-MLA50697568630_072022-O.webp",
    },
    price: 3500,
  },

  {
    id: 3,
    title: "Termica Unipolar ABB",
    description:
      "Es popularmente conocida como llave térmica. Este dispositivo protege la instalación del recalentamiento de los cables (para evitar que se quemen) ante una sobrecarga. Cuando aumenta demasiado la corriente que circula por el circuito, este dispositivo se calienta y corta. A diferencia de los fusibles -que deben ser reemplazados tras un único uso-, la llave termomagnética puede ser reconectada",
    stock: 30,
    type: "termicas",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_928567-MLA45412393051_042021-O.webp",
      secondImage:
        "https://http2.mlstatic.com/D_NQ_NP_838933-MLA32990453060_112019-O.webp",
    },
    price: 2000,
  },

  //Disyuntores
  {
    id: 4,
    title: "Disyuntor Siemens",
    description:
      "Es un dispositivo de conmutación que interrumpe la corriente anormal o de fallo. Es un dispositivo mecánico que interrumpe el flujo de la corriente de alta magnitud (de fallo) y además realiza la función de un interruptor. El disyuntor está diseñado principalmente para cerrar o abrir un circuito eléctrico, protegiendo así el sistema eléctrico de daños",
    stock: 6,
    type: "disyuntor",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_746393-MLA46232108025_062021-O.webp",
      secondImage:
        "https://http2.mlstatic.com/D_NQ_NP_666469-MLA42960701567_072020-O.webp",
    },
    price: 16699,
  },

  {
    id: 5,
    title: "Disyuntor Diferencial Tetrapolar ABB Tubio",
    description:
      "Es un dispositivo de conmutación que interrumpe la corriente anormal o de fallo. Es un dispositivo mecánico que interrumpe el flujo de la corriente de alta magnitud (de fallo) y además realiza la función de un interruptor. El disyuntor está diseñado principalmente para cerrar o abrir un circuito eléctrico, protegiendo así el sistema eléctrico de daños",
    stock: 6,
    type: "disyuntor",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_627088-MLA33005238230_112019-O.webp",
      secondImage:
        "https://http2.mlstatic.com/D_NQ_NP_838933-MLA32990453060_112019-O.webp",
    },
    price: 70000,
  },

  //Contactores
  {
    id: 6,
    title: "Contactor Montero 220v",
    description:
      "El Contactor es un dispositivo eléctrico que puede cerrar o abrir circuitos en carga o en vacio en los que intervengan cargas de intensidad que pudieran producir algún efecto perjudicial para quien lo accione como por ejemplo en maniobras de apertura y cierre de instalaciones de motores",
    stock: 5,
    type: "contactores",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_976117-MLA43060748679_082020-O.webp",
    },
    price: 32000,
  },

  {
    id: 7,
    title: "Contactor Montero 24v",
    description:
      "El Contactor es un dispositivo eléctrico que puede cerrar o abrir circuitos en carga o en vacio en los que intervengan cargas de intensidad que pudieran producir algún efecto perjudicial para quien lo accione como por ejemplo en maniobras de apertura y cierre de instalaciones de motores",
    stock: 5,
    type: "contactores",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_922006-MLA46894726286_072021-O.webp",
    },
    price: 35000,
  },

  //Cables
  {
    id: 8,
    title: "Cable Unipolar 2,5mm",
    description:
      "Se denomina cable monopolar o cable unipolar al cable que consta de un único hilo conductor. Con frecuencia los electricistas se suelen referir a este cable como “hilo de línea”. El cable unipolar se usa en los circuitos de interior. A la hora de comprar cable unipolar hay que tener en cuenta que está disponible en diferentes diámetros dependiendo de la intensidad de corriente y el tipo de instalación ",
    stock: 15,
    type: "cables",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_752242-MLA52269251313_112022-O.webp",
    },
    price: 15000,
  },

  {
    id: 9,
    title: "Cable Tipo Taller TPR",
    description:
      "El cable tipo taller designado OSEP se utiliza en instalaciones móviles, tanto domesticas como industriales con tensiones nominales de hasta 300/500V (excluyendo aparatos de calefacción). Las venas se encuentran aisladas individualmente por una cobertura plástica y agrupadas bajo una vaina redonda.",
    stock: 15,
    type: "cables",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_852665-MLA52041115858_102022-O.webp",
    },
    price: 13000,
  },

  {
    id: 10,
    title: "Cable Subterraneo",
    description:
      "Cables diseñados para distribución de energía en baja tensión en edificios e instalaciones industriales, en tendidos subterráneos o sobre bandejas. Especialmente aptos para instalaciones en industrias donde se requiera amplia maniobrabilidad y seguridad ante la propagación de incendios.",
    stock: 15,
    type: "cables",
    imageProduct: {
      firtsImage:
        "https://http2.mlstatic.com/D_NQ_NP_672156-MLA50801946860_072022-O.webp",
    },
    price: 30000,
  },
];

export default productos;
