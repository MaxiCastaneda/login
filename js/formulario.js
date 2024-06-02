document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username-input');
    const togglePasswordButtons = document.querySelectorAll('#togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    const modal = document.getElementById('customAlert');
    const closeButton = document.querySelector('.close-button');
    const signInButton = document.getElementById('signInButton'); // Selecciona el botón "Sign in"

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

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    usernameInput.addEventListener('blur', () => {
        const email = usernameInput.value;
        if (email && !validateEmail(email)) {
            showModal();
        }
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Añadir el event listener para el botón "Sign in"
    signInButton.addEventListener('click', () => {
        window.location.href = 'formulario.html'; // Redirigir a la página "formulario.html"
    });
});

