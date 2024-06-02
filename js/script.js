document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const passwordInput = document.getElementById('password');
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
        if (passwordInput === document.activeElement && passwordInput.value.length > 0) {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }

    // Listen for input events and focus events on the password input field
    passwordInput.addEventListener('input', updateEyeIcon);
    passwordInput.addEventListener('focus', updateEyeIcon);
    passwordInput.addEventListener('blur', updateEyeIcon);
});
