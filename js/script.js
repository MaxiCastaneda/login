document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username-input');
    const togglePasswordButtons = document.querySelectorAll('#togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Alternar entre el icono de ojo abierto y cerrado
            const icon = button.querySelector('i');
            if (icon.classList.contains('fa-eye')) {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    function updateEyeIcon() {
        if (usernameInput === document.activeElement && usernameInput.value.length > 0) {
            eyeIcon.classList.remove('fa-face-grimace', 'fa-face-rolling-eyes');
            eyeIcon.classList.add('fa-face-grin-wink');
        } else if (passwordInput === document.activeElement && passwordInput.value.length > 0) {
            eyeIcon.classList.remove('fa-face-grimace', 'fa-face-grin-wink');
            eyeIcon.classList.add('fa-face-rolling-eyes');
        } else {
            eyeIcon.classList.remove('fa-face-grin-wink', 'fa-face-rolling-eyes');
            eyeIcon.classList.add('fa-face-grimace');
        }
    }

    usernameInput.addEventListener('input', updateEyeIcon);
    usernameInput.addEventListener('focus', updateEyeIcon);
    usernameInput.addEventListener('blur', updateEyeIcon);

    passwordInput.addEventListener('input', updateEyeIcon);
    passwordInput.addEventListener('focus', updateEyeIcon);
    passwordInput.addEventListener('blur', updateEyeIcon);

    // Establecer el ícono por defecto al cargar la página
    eyeIcon.classList.add('fa-face-grimace');
});
