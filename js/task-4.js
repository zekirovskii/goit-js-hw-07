const form = document.querySelector(".login-form")

const functionSubmit = (event) => {
    
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
        alert(`Form elemanları doldurulmalıdır !`);
    }

    const data = {
        email,
        password,
    };

    console.log(data);

    form.reset();

}

form.addEventListener("submit", functionSubmit);
