document.addEventListener('DOMContentLoaded', function() {

	// Добавляем событие клика
	document.querySelector('.pagination').addEventListener('click', ({target})=>{

		const cls = target.dataset.id; // Переменная для атрибута data-id

		document.querySelectorAll('.slider').forEach(item => {

			const add = cls == 'one' || item.classList.contains(cls);

			item.classList.toggle('visibility', add)

		})
	})
});