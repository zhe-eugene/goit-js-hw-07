const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const emailValue = form.elements.email.value.trim();

  const passwordValue = form.elements.password.value.trim();

  const isEmpty = emailValue === '' || passwordValue === '';

  if (isEmpty) {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
}
