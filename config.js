var config = {
    style: 'PM2.5First.json',
    showMarkers: false,
    theme: 'light',
    title: 'Calidad del Aire en España',
    subtitle: 'Un recorrido por las provincias y estaciones con mejor y peor PM2.5 en 2023',
    byline: 'Datos: Ministerio para la Transición Ecológica — Evaluación oficial 2023',
    footer: 'Fuente: Evaluación de calidad del aire en España 2023, publicada con fecha oficial 1 de octubre de 2024. Datos de 330 estaciones de medición en toda España.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: '¿Cómo está el aire que respiramos?',
            image: '',
            description: 'Las partículas PM2.5 son fragmentos en suspensión de menos de 2,5 micrómetros de diámetro. Son tan pequeñas que penetran en los pulmones y llegan al torrente sanguíneo. La OMS recomienda no superar los <strong>5 µg/m³</strong> de media anual. Este mapa muestra los datos oficiales de <strong>330 estaciones</strong> distribuidas por toda España durante 2023.',
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
                { layer: 'pm25-fill',    opacity: 0.75 },
                { layer: 'pm25-puntos',  opacity: 1 },
                { layer: 'top5-peores',  opacity: 0 },
                { layer: 'top5-mejores', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'peor-estacion',
            alignment: 'left',
            hidden: false,
            title: 'La estación más contaminada: Gómez Franqueira',
            image: '',
            description: 'Con <strong>19 µg/m³</strong>, la estación de Gómez Franqueira (Galicia) registra casi cuatro veces el límite recomendado por la OMS. Le sigue <strong>La Rábida</strong> en Huelva (17 µg/m³), situada junto al polo petroquímico de Palos de la Frontera, uno de los complejos industriales más grandes de España. Las 5 estaciones con peores valores aparecen destacadas en rojo.',
            location: {
                center: [-8.72, 42.58],
                zoom: 10,
                pitch: 30,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 0.5 },
                { layer: 'pm25-puntos',  opacity: 0.4 },
                { layer: 'top5-peores',  opacity: 1 },
                { layer: 'top5-mejores', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'top5-peores', opacity: 0 }
            ]
        },
        {
            id: 'mejores-provincias',
            alignment: 'right',
            hidden: false,
            title: 'Las provincias con aire más limpio',
            image: '',
            description: 'Las provincias del interior de Castilla y León lideran la calidad del aire en España. <strong>Zamora</strong> (4,4 µg/m³), <strong>Salamanca</strong> (4,5 µg/m³) y <strong>Burgos</strong> (5,35 µg/m³) se sitúan por debajo o muy cerca del límite de la OMS. La baja densidad industrial y de tráfico, junto a la dispersión geográfica, son los principales factores.',
            location: {
                center: [-5.6, 41.6],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 0.75 },
                { layer: 'pm25-puntos',  opacity: 1 },
                { layer: 'top5-peores',  opacity: 0 },
                { layer: 'top5-mejores', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'mejor-estacion',
            alignment: 'right',
            hidden: false,
            title: 'La estación más limpia: Zorita',
            image: '',
            description: 'La estación de <strong>Zorita</strong>, en la provincia de Guadalajara, registra solo <strong>2,9 µg/m³</strong>, el valor más bajo de toda España. Situada en un entorno rural alejado de focos industriales y urbanos, es un ejemplo de cómo el territorio y el modelo productivo determinan directamente la calidad del aire que respiran sus habitantes. Las 5 estaciones con mejores valores aparecen destacadas en verde.',
            location: {
                center: [-2.87, 40.78],
                zoom: 11,
                pitch: 40,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'pm25-fill',    opacity: 0.5 },
                { layer: 'pm25-puntos',  opacity: 0.4 },
                { layer: 'top5-peores',  opacity: 0 },
                { layer: 'top5-mejores', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'top5-mejores', opacity: 0 }
            ]
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Un reto pendiente para la salud pública',
            image: '',
            description: 'Según los datos oficiales de 2023, <strong>más del 30% de las estaciones</strong> superan el límite recomendado por la OMS. La contaminación por PM2.5 no es solo un problema de grandes ciudades: focos industriales, zonas costeras del sur y áreas con alta densidad de tráfico presentan valores preocupantes. Reducir estas cifras requiere políticas de movilidad, transición energética y regulación industrial a escala nacional.',
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
