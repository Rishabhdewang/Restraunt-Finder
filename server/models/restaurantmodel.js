const { Model } = require("objection");

class Restaurant extends Model{
    static get tableName(){
        return "restaurants"
    }
}

module.exports = Restaurant;