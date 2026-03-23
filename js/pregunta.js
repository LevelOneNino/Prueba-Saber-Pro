
const urlParams = new URLSearchParams(window.location.search);
const index = Number(urlParams.get("index"))

if (!Number.isInteger(index) || index < 0 || index >= questionnaire.length) {
	console.error("Invalid index");
	window.location.href = "../razonamiento_cuantitativo.html";
}
document.addEventListener("DOMContentLoaded", () => {
	const contexto = document.getElementById("contexto")
	const img = document.getElementById("img")
	const question = document.getElementById("question")
	const label0 = document.getElementById("label0")
	const label1 = document.getElementById("label1")
	const label2 = document.getElementById("label2")
	const label3 = document.getElementById("label3")
	const video_retroalimentacion = document.getElementById("video_retroalimentacion")

	contexto.textContent = questionnaire[index].contexto
	img.src = `../../assets/images/${questionnaire[index].imagen}`
	img.alt = questionnaire[index].imagen
	question.textContent = questionnaire[index].pregunta
	label0.textContent = `A. ${questionnaire[index].respuestas[0].texto}`
	label1.textContent = `B. ${questionnaire[index].respuestas[1].texto}`
	label2.textContent = `C. ${questionnaire[index].respuestas[2].texto}`
	label3.textContent = `D. ${questionnaire[index].respuestas[3].texto}`

	video_retroalimentacion.querySelectorAll("source").forEach(source => {
		source.src = `../../assets/videos/${questionnaire[index]["retroalimentacion"]["video"]}`
	});
})
function responder() {
	seleccion = document.querySelector('input[type="radio"]:checked')
	if (!seleccion) {
		document.querySelectorAll(".answer").forEach(element => {
			element.style.cssText = 'background-color: hsl(from red h s l / 10%);'
		});
		return
	}
	else {
		document.querySelectorAll(".answer").forEach(element => {
			element.style.cssText = 'background-color: none;'
		});
	}
	if (questionnaire[index].respuestas[seleccion.value].correcta) {
		answered.push(index)
		answered = [... new Set(answered)]
		localStorage.setItem("answered", JSON.stringify(answered))
		answered = JSON.parse(localStorage.getItem("answered"))
		seleccion.parentNode.style.cssText = 'background-color: hsl(from green h s l / 30%);'
		correcta_dialog.showModal()
	}
	else {
		seleccion.parentNode.style.cssText = 'background-color: hsl(from red h s l / 10%);'
		incorrecta_dialog.showModal()
	}

}
