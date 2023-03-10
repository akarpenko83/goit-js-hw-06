const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements);
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

 };






