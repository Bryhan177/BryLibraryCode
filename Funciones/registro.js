// Selección de elementos del DOM
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Mostrar el formulario de registro
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Mostrar el formulario de inicio de sesión
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Mostrar el popup (opcional, si decides usarlo)
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Cerrar el popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Manejo del formulario de inicio de sesión
document.querySelector('form#login-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const correo = document.querySelector('input[name="correo"]').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contraseña })
        });

        const result = await response.json();

        if (response.ok && result.token) {
            // Redirigir a la página de inicio
            window.location.href = result.redirectTo;
        } else {
            alert(result.error || 'Error desconocido');
        }
    } catch (error) {
        alert('Error en la conexión al servidor');
    }
});
