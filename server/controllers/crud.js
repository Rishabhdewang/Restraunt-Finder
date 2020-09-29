const restrau = require('../models/restaurantmodel');
const reviews = require('../models/reviewmodel');

const { to } = require('../global_functions');
const { response } = require('express');


//create
const createRestaurants = async (req, res) => {

    let name =req.body.Name;
    let location= req.body.Location;
    let pricerange = req.body.PriceRange;

    const [notcreated, created] = await to(restrau.query().insert({
        Name: name,
        Location: location,
        PriceRange: pricerange
    }));
    if (notcreated){ return console.log(notcreated) ,res.status(401).send(notcreated) ;
    }

    res.json({
        success : "true",
        created
    });

}

//update
const updateRestaurants = async (req, res) => {
    const id = req.params.id;
    const [notupdated, updated] = await to(restrau.query().findById(id).patch(req.body));
    if (notupdated) return res.status(400).send(notupdated), console.log(notupdated);
    else{
        res.json({
            success : "true",
            Updated :[ updated]
        });
    }
}

//delete
const deleteRestaurants = async (req, res) => {

    
    const [notdeleted, deleted] = await to(restrau.query().deleteById(req.params.id));
    if (notdeleted) return res.status(401).send(notdeleted);
    else{
    res.sendStatus(200);
    console.log("Succesfully deleted")
    }
}

//get All Restaurants

const allRestaurants = async (req,res) => {

    const [err,Restaurants] = await to(restrau.query());
    if(err) return res.status(400).send(err), console.log(err)
    console.log(err)

    res.status(201);
    res.json({
        success : "true",
        Restaurants 
    });
}

// Restaurant by id 
const Restaurant = async (req,res) => {

    const [notfound,found] = await to(restrau.query().findById(req.params.id));
    if(notfound) return res.status(400).send(notfound);

    // const [err, review] = await to(reviews.query().withGraphFetched("detailpage").throwIfNotFound());
    // if(err) return res.status(401).send(err);

    res.json({
        success : "true",
        found
    });
 
    
}


module.exports = {
    createRestaurants,
    deleteRestaurants,
    updateRestaurants,
    allRestaurants,
    Restaurant
}