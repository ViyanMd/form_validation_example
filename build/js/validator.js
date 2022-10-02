export class Validate {
    isEmail(input) {
        const email = input.value;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }
    ;
    isPassword(pass, passRep) {
        const password = pass.value;
        const passwordRepeat = passRep.value;
        return password == passwordRepeat && password.length > 0;
    }
    ;
    isName(input) {
        return input.value.length >= 1;
    }
    ;
}
