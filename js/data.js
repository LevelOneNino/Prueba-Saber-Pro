answered = localStorage.getItem("answered")
if (!answered) {
	localStorage.setItem("answered", JSON.stringify([]))
	answered = localStorage.getItem("answered")
}
answered = JSON.parse(answered)

questionnaire = [
	{
		"titulo": "Rango etario",
		"contexto": "A continuación se presenta la pirámide de edades de la población de Cartagena de Indias en el año 1777.",
		"imagen": "../assets/images/grafico-5.png",
		"pregunta": "Según la gráfica, la mayor cantidad de	mujeres está en el ragon etario:",
		"respuestas": [
			{ "texto": "0-29", "correcta": true },
			{ "texto": "40-89", "correcta": false },
			{ "texto": "25-59", "correcta": false },
			{ "texto": "20-39", "correcta": false },
		]
	},
	{
		"titulo": "Porcentaje",
		"contexto": "A continuación se presenta la pirámide de edades de la población de Cartagena de Indias en el año 1777.",
		"imagen": "../assets/images/grafico-5.png",
		"pregunta": "Si se desea calcular el porcentaje de personas entre 15 y 34 años respecto al total de la población, ¿cuál de las siguientes expresiones representa correctamente el procedimiento?",
		"respuestas": [
			{ "texto": "(Número de personas entre 15 y 34 años / Total de la población) × 100", "correcta": true },
			{ "texto": "(Número de personas entre 15 y 34 años / Número de mujeres) × 100", "correcta": false },
			{ "texto": "ninguna de las anteriores", "correcta": false },
			{ "texto": "(Número de personas entre 15 y 34 años / Número de hombres) × 100", "correcta": false },
		]
	},
	{
		"titulo": "Estructura demográfica",
		"contexto": "A continuación se presenta la pirámide de edades de la población de Cartagena de Indias en el año 1777.",
		"imagen": "../assets/images/grafico-5.png",
		"pregunta": "Según la pirámide de edades, ¿cuál de las siguientes afirmaciones es más adecuada para describir la estructura demográfica de Cartagena en 1777?",
		"respuestas": [
			{ "texto": "La población estaba compuesta principalmente por adultos mayores.", "correcta": false },
			{ "texto": "La población tenía una proporción equilibrada entre hombres y mujeres en todos los rangos de edad.", "correcta": false },
			{ "texto": "La población tenía una base ancha, lo que indica alta natalidad.", "correcta": true },
			{ "texto": "La mayoría de la población estaba en edad avanzada, lo que indica baja mortalidad.", "correcta": false },
		]
	},
	{
		"titulo": "Tasa de masculinidad",
		"contexto": "A continuación se presenta la pirámide de edades de la población de Cartagena de Indias en el año 1777.",
		"imagen": "../assets/images/grafico-5.png",
		"pregunta": "La tasa de masculinidad es un indicador demográfico que se calcula como (# hombres/# mujeres) x100 en una población determinada. En el caso de estudio, ¿qué tendencia se observa en la tasa de masculinidad a medida que aumenta la edad?",
		"respuestas": [
			{ "texto": "Aumenta progresivamente", "correcta": false },
			{ "texto": "Se mantiene constante", "correcta": false },
			{ "texto": "Disminuye progresivamente", "correcta": true },
			{ "texto": "Fluctúa sin patrón definido", "correcta": false },
		]
	},
	{
		"titulo": "Edad mayor",
		"contexto": "A continuación se presenta la pirámide de edades de la población de Cartagena de Indias en el año 1777.",
		"imagen": "../assets/images/grafico-5.png",
		"pregunta": "¿Cuál de las siguientes afirmaciones es más adecuada para justificar por qué hay menos hombres en los grupos de edad mayores?",
		"respuestas": [
			{ "texto": "La gráfica no permite hacer ninguna inferencia sobre la mortalidad.", "correcta": false },
			{ "texto": "La gráfica muestra que los hombres eran más numerosos en todos los grupos de edad.", "correcta": false },
			{ "texto": "Los hombres vivían más años que las mujeres en esa época.", "correcta": false },
			{ "texto": "Es probable que la mortalidad masculina aumentara con la edad.", "correcta": true },
		]
	},
	{
		"titulo": "Observando datos",
		"contexto": "A continuación se presenta una tabla correspondiente con el censo de 1851, por sexos, de algunas de las principales ciudades de Colombia de la época.",
		"imagen": "../assets/images/cuadro_3.png",
		"pregunta": "¿Cuál de las siguientes afirmaciones es correcta según los datos de la tabla?",
		"respuestas": [
			{ "texto": "En todas las ciudades hay más mujeres que hombres.", "correcta": true },
			{ "texto": "En ninguna ciudad hay más mujeres que hombres.", "correcta": false },
			{ "texto": "En algunas ciudades hay más hombres que mujeres.", "correcta": false },
			{ "texto": "Todas las ciudades tienen igual número de hombres y mujeres.", "correcta": false },
		]
	},
	{
		"titulo": "Investigación adicional",
		"contexto": "A continuación se presenta una tabla correspondiente con el censo de 1851, por sexos, de algunas de las principales ciudades de Colombia de la época.",
		"imagen": "../assets/images/cuadro_3.png",
		"pregunta": "Si una ciudad tiene una diferencia significativa entre el número de hombres y mujeres, ¿cuál de las siguientes afirmaciones sería más adecuada para justificar una investigación adicional?",
		"respuestas": [
			{ "texto": "La diferencia indica que la ciudad tenía una población equilibrada.", "correcta": false },
			{ "texto": "La diferencia puede deberse a errores de transcripción en el censo.", "correcta": true },
			{ "texto": "La diferencia sugiere que no se necesita más análisis.", "correcta": false },
			{ "texto": "La diferencia no tiene relevancia estadística.", "correcta": false },
		]
	},
	{
		"titulo": "Menor población",
		"contexto": "A continuación se presenta una tabla correspondiente con el censo de 1851, por sexos, de algunas de las principales ciudades de Colombia de la época.",
		"imagen": "../assets/images/cuadro_3.png",
		"pregunta": "Si se observa que una ciudad tiene una población total mucho menor que otras, ¿cuál de las siguientes afirmaciones es más adecuada?",
		"respuestas": [
			{ "texto": "La ciudad tenía una economía más fuerte.", "correcta": false },
			{ "texto": "La ciudad tenía más mujeres que hombres.", "correcta": false },
			{ "texto": "La ciudad era probablemente menos urbanizada o menos desarrollada.", "correcta": true },
			{ "texto": "La ciudad probablemente tenía una alta densidad poblacional.", "correcta": false },
		]
	},
	{
		"titulo": "Proporción poblacional",
		"contexto": "A continuación se presenta una tabla correspondiente con el censo de 1851, por sexos, de algunas de las principales ciudades de Colombia de la época.",
		"imagen": "../assets/images/cuadro_3.png",
		"pregunta": "Según la tabla, la ciudad con más mujeres en proporción a su población total era:",
		"respuestas": [
			{ "texto": "Cartagena", "correcta": true },
			{ "texto": "Bogotá", "correcta": false },
			{ "texto": "Barranquilla", "correcta": false },
			{ "texto": "Popayán", "correcta": false },
		]
	},
	{
		"titulo": "Diferencia porcentual",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "Según el gráfico, el nivel educativo que presenta la mayor diferencia porcentual entre hombres y mujeres de 25 a 34 años es:",
		"respuestas": [
			{ "texto": "Básica completa", "correcta": false },
			{ "texto": "Universitaria completa", "correcta": true },
			{ "texto": "Básica incompleta", "correcta": false },
			{ "texto": "Media completa", "correcta": false },
		]
	},
	{
		"titulo": "Educación secundaria completa",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "Si se desea calcular el porcentaje total de personas entre 25 y 64 años que alcanzaron al menos educación secundaria completa (hasta 11 o 12 grado), ¿cuál de las siguientes combinaciones de datos se deben sumar?",
		"respuestas": [
			{ "texto": "básica incompleta, básica completa, media y superior completa", "correcta": false },
			{ "texto": "superior completa", "correcta": false },
			{ "texto": "media completa y superior completa", "correcta": true },
			{ "texto": "básica incompleta, básica completa y media completa", "correcta": false },
		]
	},
	{
		"titulo": "Educación básica incompleta",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "Si se observa que en el grupo de 25–64 años hay más hombres con básica incompleta que mujeres, ¿cuál de las siguientes afirmaciones es más adecuada?",
		"respuestas": [
			{ "texto": "Las mujeres no acceden a la educación primaria.", "correcta": false },
			{ "texto": "Los hombres abandonan más la educación básica.", "correcta": true },
			{ "texto": "La educación primaria no es obligatoria para los hombres.", "correcta": false },
			{ "texto": "Los cartageneros prefieren enviar a la escuela a las mujeres mas no a los hombres.", "correcta": false },
		]
	},
	{
		"titulo": "Mujeres universitarias",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "Si el 20% de las mujeres entre 25 y 64 años tuviesen educación universitaria completa y el total de mujeres en ese grupo es 9800, las mujeres universitarias serían:",
		"respuestas": [
			{ "texto": "980", "correcta": false },
			{ "texto": "800", "correcta": false },
			{ "texto": "2000", "correcta": false },
			{ "texto": "1960", "correcta": true },
		]
	},
	{
		"titulo": "Diferencia en nivel de educación",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "¿Cuál de las siguientes afirmaciones es más adecuada para explicar por qué las mujeres entre 25 y 34 años tienen mayores niveles de educación superior que los hombres?",
		"respuestas": [
			{ "texto": "Los hombres no están interesados en la educación universitaria.", "correcta": false },
			{ "texto": "Las políticas educativas recientes han favorecido el acceso femenino a la educación superior.", "correcta": true },
			{ "texto": "Las mujeres tienen más tiempo libre para estudiar.", "correcta": false },
			{ "texto": "Las mujeres siempre han tenido mayor acceso a la educación.", "correcta": false },
		]
	},
	{
		"titulo": "Analizando gráficas",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "De la gráfica se puede concluir que:",
		"respuestas": [
			{ "texto": "Los hombres no están interesados en la educación universitaria porque prefieren ser mototaxistas.", "correcta": false },
			{ "texto": "La población joven para el año 2005 tenía menos formación educativa que la población adulta mayor", "correcta": false },
			{ "texto": "Cartagena es una ciudad donde todos los grupos de edades y sexos tienen la misma formación educativa", "correcta": false },
			{ "texto": "La población joven para el año 2005 tenía mejor formación educativa que la población adulta mayor.", "correcta": true },
		]
	},
	{
		"titulo": "Analizando conclusiones",
		"contexto": "A continuación se presenta un gráfico que muestra el porcentaje de la población de Cartagena de Indias que alcanzó algún nivel de enseñanza en los rangos de edad 25–64 y 25–34 años, desagregado por género, según el censo de 2005. Básica en el gráfico es hasta 9no grado, básica incompleta es que terminó antes del 9no, y media completa es desde 10mo hasta 11no o 12 grado.",
		"imagen": "../assets/images/grafico_9.png",
		"pregunta": "¿Cuál de las siguientes afirmaciones es incorrecta según el gráfico?",
		"respuestas": [
			{ "texto": "Las mujeres jóvenes tienen mayor nivel educativo que los hombres jóvenes.", "correcta": false },
			{ "texto": "Los hombres superan a las mujeres en todos los niveles educativos.", "correcta": true },
			{ "texto": "La proporción de personas con educación universitaria completa es mayor en el grupo 25-34 que en el grupo 25-64.", "correcta": false },
			{ "texto": "La brecha de género en educación superior favorece a las mujeres en 2005.", "correcta": false },
		]
	},
]
