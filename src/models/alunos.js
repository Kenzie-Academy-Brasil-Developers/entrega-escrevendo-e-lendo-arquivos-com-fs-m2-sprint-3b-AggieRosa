const db = require('../mock/db.json')

class CadastroAlunos {
    constructor({name, course, age, email}){
        this.name   = name
        this.course = course
        this.age    = age
        this.email  = email
    }

    save() {
        db.alunos.push(this)
    }
}

module.exports = CadastroAlunos