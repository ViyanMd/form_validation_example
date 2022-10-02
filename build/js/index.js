import { Validate } from "../../build/js/validator.js";
const firstname = element("firstname");
const password = element("password");
const passwordRepeat = element("password__repeat");
const email = element("email");
// Все, что не вынесено в отдельные файлы, не вынесено, потому что импорт
// все так же не работает :) я сейчас импортирую js 
function element(id) {
    return document.getElementById(id);
}
const validate = new Validate;
element("range").addEventListener('change', (e) => {
    const range = e.target;
    element("income__value_text").innerHTML = `${range.value}K`;
});
const inputArr = [firstname, passwordRepeat, email];
inputArr.forEach(input => {
    input.addEventListener('blur', (e) => {
        e.preventDefault();
        const targetInput = e.target;
        switch (targetInput.id) {
            case "firstname":
                firstname.classList.toggle("error", !validate.isName(firstname));
                break;
            case "email":
                email.classList.toggle("error", !validate.isEmail(email));
                break;
            case "password__repeat":
                passwordRepeat.classList.toggle("error", !validate.isPassword(password, passwordRepeat));
                password.classList.toggle("error", !validate.isPassword(password, passwordRepeat));
                break;
        }
    });
});
