const db = require('../database/models');

const actorsController = {
    list: (req, res) => {
        db.Actor.findAll({
            order : ['first_name']
        })
            .then(actors => {
                res.send(actors)
            })
            .catch(err => console.log(err))
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                res.send(actor)
            })
            .catch(err => console.log(err))
    }

}

module.exports = actorsController;