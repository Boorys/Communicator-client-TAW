export class UserCreatePostDto {


    password: string
    email: string
    firstName: string

    constructor(password: string, email: string, firstName: string) {

        this.password = password;
        this.email = email;
        this.firstName = firstName;

    }

}