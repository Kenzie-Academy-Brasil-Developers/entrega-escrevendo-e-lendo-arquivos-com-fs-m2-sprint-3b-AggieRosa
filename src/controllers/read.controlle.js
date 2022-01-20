const db = require('../mock/db.json')
const CadastroAlunos = require('../models/alunos')

class controleCadastro {
    static
    getAll() {
        return db.alunos
    }

    static
    create(data) {
        const novoAluno = new CadastroAlunos(data)
        novoAluno.save()
        return novoAluno
    }
}

module.exports = controleCadastro