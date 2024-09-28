const eventForm = document.getElementById('event-form');
const evento_nombreinput = document.getElementById('evento-nombre');
const fechainput = document.getElementById('fecha-event');
const recordatorioinput = document.getElementById('recordar-event');
const ulu = document.getElementById('events');

eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventoNombre = evento_nombreinput.value;
    const eventofecha = fechainput.value;
    const eventorecordatorio = recordatorioinput.value;

    // Validación de campos vacíos
    if (eventoNombre === '' || eventofecha === '' || eventorecordatorio === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Crear un nuevo elemento de lista (<li>)
    const li = document.createElement('li');
    li.innerHTML = `<span>${eventoNombre} - ${eventofecha} - ${eventorecordatorio}</span> <button class="delete-btn">Eliminar</button>`;

    // Añadir el nuevo elemento a la lista
    ulu.appendChild(li);

    // Limpiar los campos de entrada
    evento_nombreinput.value = '';
    fechainput.value = '';
    recordatorioinput.value = '';

    // Añadir funcionalidad de eliminación al botón "Eliminar"
    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        li.remove(); // Eliminar el elemento de la lista
    });
});
