const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', createUserObject);

function createUserObject(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены');
  }

  const outObject = {
    email,
    password,
  };
  
  console.log(outObject);
  event.currentTarget.reset();
}
