const { Model } = require("objection");

class restaurant extends Model{
    static get tableName(){
        return "restaurants"
    }
}

module.exports = restaurant;