var config = {
    style: 'style.json',
    showMarkers: false,
    theme: 'light',
    title: 'Calidad del Aire en España',
    subtitle: 'Un recorrido por las estaciones con mejor y peor PM2.5 en 2023',
    byline: 'Datos: Ministerio para la Transición Ecológica — Evaluación oficial 2023',
    footer: 'Fuente: Evaluación de calidad del aire en España 2023, publicada con fecha oficial 1 de octubre de 2024. Datos de 330 estaciones de medición en toda España.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: '¿Cómo está el aire que respiramos?',
            image: '',
            description: 'Las partículas PM2.5 son fragmentos en suspensión de menos de 2,5 micrómetros. Son tan pequeñas que penetran en los pulmones y llegan al torrente sanguíneo. La OMS recomienda no superar los <strong>5 µg/m³</strong> de media anual. Este mapa recorre las estaciones con <strong>mejor y peor calidad del aire</strong> de España según los datos oficiales de 2023.',
            location: {
                center: [-3.7, 40.2],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 0 },
                { layer: 'top5-peores',  opacity: 0 },
                { layer: 'top5-mejores', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'peores-provincias',
            alignment: 'left',
            hidden: false,
            title: 'Las provincias con peor calidad del aire',
            image: '',
            description: 'El sur peninsular concentra los valores más altos de PM2.5. <strong>Huelva</strong> encabeza el ranking con 13,3 µg/m³, seguida de <strong>Jaén</strong> (12,7 µg/m³) y <strong>Murcia</strong> (11,6 µg/m³). La actividad industrial, el tráfico y las condiciones meteorológicas explican estos niveles elevados.',
            location: {
                center: [-4.2, 37.5],
                zoom: 6.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 0 },
                { layer: 'top5-peores',  opacity: 0 },
                { layer: 'top5-mejores', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'mejor-estacion',
            alignment: 'right',
            hidden: false,
            title: 'La estación más limpia: Zorita del Maestrazgo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Zorita_del_Maestrazgo_01.JPG/960px-Zorita_del_Maestrazgo_01.JPG',
            description: 'La estación de <strong>Zorita del Maestrazgo</strong>, en el interior de Castellón, registra solo <strong>2,9 µg/m³</strong> — el valor más bajo de toda España y casi la mitad del límite recomendado por la OMS. Enclavada en plena comarca del Maestrazgo, a más de 1.000 metros de altitud y lejos de cualquier foco industrial o urbano, es el mejor ejemplo de cómo el territorio y la altitud condicionan directamente la calidad del aire.',
            location: {
                center: [-0.17054, 40.74078],
                zoom: 11,
                pitch: 40,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 0.6 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'costa-este',
            alignment: 'right',
            hidden: false,
            title: 'La costa este, un corredor de aire limpio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Playa_El_Fosa_de_Calpe.jpg/1280px-Playa_El_Fosa_de_Calpe.jpg',
            description: 'El litoral mediterráneo concentra varios de los mejores registros del país. <strong>Castelló-Penyeta</strong> (3,0 µg/m³), <strong>Alacant-Rabassa</strong> (3,3 µg/m³) y <strong>Albalat dels Tarongers</strong> (3,5 µg/m³), en la provincia de Valencia, forman un corredor de calidad del aire excepcional. La brisa marina, la menor densidad industrial en estas zonas específicas y las condiciones de ventilación natural explican estos valores.',
            location: {
                center: [-1.08946, 39.55455],
                zoom: 6.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 0.6 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'top5-mejores', opacity: 0 }
            ]
        },
        {
            id: 'peor-estacion',
            alignment: 'left',
            hidden: false,
            title: 'La estación más contaminada: Gómez Franqueira',
            image: 'https://static.laregion.es/clip/7e96355b-38e9-41ec-82a0-c0e0821abe91_16-9-aspect-ratio_1600w_0.webp',
            description: 'Con <strong>19 µg/m³</strong> — casi cuatro veces el límite de la OMS — la estación de Gómez Franqueira encabeza el ranking negativo de toda España. Le sigue <strong>La Rábida</strong> en Huelva (17 µg/m³), situada junto al polo petroquímico de Palos de la Frontera, uno de los complejos industriales más grandes del país. En ambos casos, la proximidad a focos industriales es el factor determinante.',
            location: {
                center: [-7.90508, 42.34392],
                zoom: 10,
                pitch: 30,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 0.6 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: []
        },
        {
            id: 'madrid',
            alignment: 'left',
            hidden: false,
            title: 'Madrid: contaminación en el centro de la ciudad',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg/1920px-Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg',
            description: 'Madrid es la provincia con más estaciones de medición del país (28) y registra una media de <strong>9,83 µg/m³</strong>, casi el doble del límite recomendado. La estación de <strong>Junta Municipal de Moratalaz</strong>, con 16 µg/m³, es una de las más contaminadas de toda España. El tráfico intenso y la densidad urbana son los principales responsables de los niveles elevados en el interior de la capital.',
            location: {
                center: [-3.68, 40.41],
                zoom: 9,
                pitch: 30,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 0.8 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'canarias',
            alignment: 'left',
            hidden: false,
            title: 'Canarias: un problema inesperado',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/At_Plaza_de_Espa%C3%B1a%2C_Santa_Cruz_de_Tenerife_2019_009_edited.jpg/1280px-At_Plaza_de_Espa%C3%B1a%2C_Santa_Cruz_de_Tenerife_2019_009_edited.jpg',
            description: 'Las Islas Canarias sorprenden con dos estaciones entre las cinco peores de España. <strong>Parque La Granja</strong> en Santa Cruz de Tenerife (16 µg/m³) y <strong>Centro Cultural Alfredo Krauss</strong> en Las Palmas de Gran Canaria (16 µg/m³) destacan negativamente. La causa no es la industria sino la <strong>calima</strong>: el polvo del Sáhara que cruza el Atlántico periódicamente y dispara los niveles de partículas en suspensión.',
            location: {
                center: [-15.5, 28.2],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 1 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'top5-peores', opacity: 0 }
            ]
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Un reto pendiente para la salud pública',
            image: '',
            description: 'Más del <strong>30% de las estaciones</strong> registran valores por encima del límite recomendado por la OMS. La contaminación por PM2.5 tiene múltiples causas: industria pesada, tráfico urbano y fenómenos naturales como la calima. Reducir estos niveles requiere políticas de movilidad, transición energética y regulación industrial coordinadas a escala nacional.',
            location: {
                center: [-3.7, 40.2],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 1 },
                { layer: 'pm25-puntos',  opacity: 1 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: []
        },
                {
            id: 'explora',
            alignment: 'center',
            hidden: false,
            title: '🗺️ Explora el mapa tú mismo',
            image: '',
            description: '<strong>Haz clic en cualquier provincia</strong> para ver su media de PM2.5 y el número de estaciones analizadas.<br><br><strong>Haz clic en cualquier punto</strong> para conocer el nombre de la estación, su valor exacto y la calificación oficial de calidad del aire.<br><br>Usa el scroll y el ratón para navegar libremente por la península y los archipiélagos.',
            location: {
                center: [-3.7, 40.2],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 0.75 },
                { layer: 'pm25-puntos',  opacity: 1 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: []
        }
    ]
};

