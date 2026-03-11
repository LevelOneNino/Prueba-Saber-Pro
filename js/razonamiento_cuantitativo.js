document.addEventListener("DOMContentLoaded", () => {
	const template = document.getElementById("pregunta-template")
	const paper = document.getElementById("paper")

	questionnaire.forEach((e, i) => {
		const clone = document.importNode(template.content, true)

		let anchor = clone.querySelector("a")
		let pregunta = anchor.querySelector("h3")
		let icon = anchor.querySelector("img")

		anchor.href = `razonamiento_cuantitativo/${i}`
		pregunta.textContent = `${i + 1}. ${e.titulo}`

		if (i in answered) {
			icon.src = "../assets/icons/star.png"
			icon.alt="completed"
		}

		paper.appendChild(clone)
	});
})
