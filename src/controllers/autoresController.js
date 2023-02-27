import autores from "../models/autor.js"

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
    })
    }

    static listarAutorId = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            if (err){
                res.status(400).send({message: `${err.message} - Autor não encontrado.`})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)

        autor.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor.`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err){
                res.status(500).send({message: `${err.message} - Falha ao atualizar autor.`})
            }else{
                res.status(200).send({message: `Autor atualizado com sucesso.`})
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - autor não encontrado para deletar.`})
            }else{
                res.status(200).send({message: `Autor deletado com sucesso.`})
            }
        })
    }
}

export default AutorController