document.addEventListener("DOMContentLoaded", () => {
	const template = document.getElementById("list_template")
	const paper = document.getElementById("paper")
	const fragment = document.createDocumentFragment()

	questionnaire.forEach((question, index) => {
		const clone = document.importNode(template.content, true)

		const anchor = clone.querySelector("a")
		const numero = anchor.querySelector("h2")
		const pregunta = anchor.querySelector("h3")
		const icon = anchor.querySelector("img")

		anchor.href = `razonamiento_cuantitativo/pregunta.html?index=${index}`
		numero.textContent = `${(index + 1).toString().padStart(2, '0')}.`
		pregunta.textContent = `${question.titulo}`

		if (answered.includes(index)) {
			icon.src = "../assets/icons/star.png"
			icon.alt = "completed"
		}

		fragment.appendChild(clone)
	});
	paper.appendChild(fragment)
})
