export interface BoxStyleRegistro {
    boxShadow: string;
    minHeight: string;
}

export interface FormRegisterState {
    name: string;
    nameClass: string;
    email: string;
    emailClass: string;
    password: string;
    passwordClass: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
}