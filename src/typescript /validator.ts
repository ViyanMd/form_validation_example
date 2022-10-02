export class Validate {

    isEmail(input: HTMLInputElement): boolean {
        const email: string = input.value;
        const regex: RegExp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email)
    };

    isPassword(pass:HTMLInputElement, passRep: HTMLInputElement): boolean {
        const password = pass.value;
        const passwordRepeat = passRep.value;
        return password == passwordRepeat && password.length > 0;
    };

    isName(input: HTMLInputElement) {
        return input.value.length >= 1
    };
}