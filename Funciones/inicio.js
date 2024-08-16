$(document).ready(function() {
    // Función para cargar los libros
    function cargarLibros() {
        $.ajax({
            url: 'http://localhost:5000/api/libros',
            type: 'GET',
            success: function(libros) {
                const cuerpoTabla = $('#cuerpo-tabla-libros');
                cuerpoTabla.empty(); // Limpiar la tabla antes de agregar nuevos datos
                libros.forEach(libro => {
                    const fila = `<tr>
                        <td><img src="uploads/${libro.imagen}" alt="${libro.titulo}" style="width: 50px; height: 50px;"></td>
                        <td>${libro.titulo}</td>
                        <td>${libro.autor}</td>
                        <td>${libro.genero}</td>
                        <td>${libro.precio}</td>
                        <td>${libro.cantidad}</td>
                        <td>Acciones</td>
                    </tr>`;
                    cuerpoTabla.append(fila);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error al cargar los libros:', error);
            }
        });
    }

    cargarLibros();

    // Manejo del formulario de registro de libros
    $('#registro-libro').submit(function(event) {
        event.preventDefault();

        // Recoge los datos del formulario
        const formData = new FormData(this);

        // Envía los datos al backend
        $.ajax({
            url: 'http://localhost:5000/api/libros',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                alert('Libro registrado con éxito!');
                $('#registro-libro')[0].reset();
                cargarLibros(); // Recargar la lista de libros
            },
            error: function(xhr, status, error) {
                console.error('Error al registrar el libro:', error);
                alert('Libro registrado con éxito!');
            }
        });
    });
});
