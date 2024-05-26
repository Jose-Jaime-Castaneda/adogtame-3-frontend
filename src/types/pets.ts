export interface Pet {
    name: string;
    breed: string;
    description: string;
    sex: 'Macho' | 'Hembra' | string;
    typeOfPet: 'Perro' | 'Gato' | 'Otro' | string;
    size: 'Pequeño' | 'Mediano' | 'Grande' | string;
    age: string;
    stirilized: boolean;
}

export interface PetForm extends Pet {
    images: File[]
}