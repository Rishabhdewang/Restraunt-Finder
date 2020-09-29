const { Model } = require('objection');

class Review extends Model{
    static get tableName(){
        return "reviews"
    }

    static get relationMappings(){

        const restaurantmodel = require('./restaurantmodel');
        return {
            detailpage : {
                relation : Model.HasManyRelations,
                modelClass : restaurantmodel,
                join : {
                    from : "reviews.RestaurantId",
                    to : "restaurants.id"
                }

            }
        }
    }
}

module.exports = Review;