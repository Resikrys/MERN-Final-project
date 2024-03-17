//Entidad patient
class Patient {
    constructor(dni, name, surname, address, location, postalCode, telephone) {
        this.dni = dni;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.location = location;
        this.postalCode = postalCode;
        this.telephone = telephone;
    }
}

module.exports = Patient;