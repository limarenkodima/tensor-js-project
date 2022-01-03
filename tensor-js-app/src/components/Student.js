import uuid from 'react-uuid'

export class Student {
    constructor(name, city, university, telephone, mail) {
        this.id = uuid();
        this.name = name;
        this.city = city;
        this.university = university;
        this.telephone = telephone;
        this.mail = mail;
    }
}