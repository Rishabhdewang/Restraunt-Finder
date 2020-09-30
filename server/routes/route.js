const router = require("express").Router();
const crud = require("../controllers/crud");

router.get('/allRestaurants',crud.allRestaurants);
router.get('/Restaurant/:id',crud.Restaurant);
router.post('/createRestaurant',crud.createRestaurants);
router.delete('/deleteRestaurant/:id',crud.deleteRestaurants);
router.put('/updateRestaurant/:id',crud.updateRestaurants);
router.post('/Restaurant/:id/addreview',crud.AddReview);

module.exports= router;
