document.addEventListener("DOMContentLoaded", () => {
	let razonamiento_cuantitativo = document.getElementById("razonamiento_cuantitativo")
	let h3 = razonamiento_cuantitativo.querySelector("div").querySelector("h3")
	let progress = razonamiento_cuantitativo.querySelector("progress")

	answered = [... new Set(answered)]
	let percentage = Math.floor((answered.length / questionnaire.length) * 100)

	h3.textContent = `${percentage}%`
	progress.value = percentage
})
