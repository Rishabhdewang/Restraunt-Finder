const restrau = require('../models/restaurantmodel');
const reviews = require('../models/reviewmodel');

const {
    to
} = require('../global_functions');
const {
    response
} = require('express');
const {
    param
} = require('../routes/route');


//create
const createRestaurants = async (req, res) => {

    let name = req.body.Name;
    let location = req.body.Location;
    let pricerange = req.body.PriceRange;

    const [notcreated, created] = await to(restrau.query().insert({
        Name: name,
        Location: location,
        PriceRange: pricerange
    }));
    if (notcreated) {
        return console.log(notcreated), res.status(401).send(notcreated);
    }

    res.json({
        success: "true",
        created
    });

}

//update
const updateRestaurants = async (req, res) => {
    const id = req.params.id;
    const [notupdated, updated] = await to(restrau.query().findById(id).patch(req.body));
    if (notupdated) return res.status(400).send(notupdated), console.log(notupdated);
    else {
        res.json({
            success: "true",
            Updated: [updated]
        });
    }
}

//delete
const deleteRestaurants = async (req, res) => {

    const [notdeleted, deleted] = await to(restrau.query().deleteById(req.params.id));
    if (notdeleted) return res.status(401).send(notdeleted);
    else {
        res.sendStatus(200);
        console.log("Succesfully deleted")
    }
}

//get All Restaurants

const allRestaurants = async (req, res) => {

    const [err, Restaurants] = await to(restrau.query().returning("*"));
    if (err) return res.status(400).send(err), console.log(err)
    console.log(err)

    res.status(201);
    res.json({
        success: "true",
        Restaurants
    });
}

// Restaurant by id 
const Restaurant = async (req, res) => {

    const [notfound, found] = await to(restrau.query().findById(req.params.id));
    if (notfound) return res.status(400).send(notfound);

    const [err, review] = await to(reviews.query().where("RestaurantId", req.params.id).returning('*'))
    console.log(review)
    if (err) return res.status(401).send(err);

    res.json({
        success: "true",
        Restrua : found,
        Newreview : review 
    });
}

const AddReview = async (req, res) => {

    let RestaurantId = req.params.id;
    let Name = req.body.UserName;
    let Ratings = req.body.Ratings;
    let Review = req.body.Review;

    const [err, data] = await to(reviews.query().insert({
        RestaurantId,
        UserName : Name,
        Ratings,
        Review

    }).returning('*')
    );
    
    console.log(data)

    if (err) return res.status(400).send(err);

    res.sendStatus(201).json({
        success: "true",
            newreview : {
                r:data.rows
        }
      
    });
}


module.exports = {
    createRestaurants,
    deleteRestaurants,
    updateRestaurants,
    allRestaurants,
    Restaurant,
    AddReview
}