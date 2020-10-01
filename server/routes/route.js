const router = require("express").Router();
const auth = require("../controllers/auth");
const crud = require("../controllers/crud");
const authenticate = require('../middleware/jwtverification');

router.get('/allRestaurants', authenticate.authenticateToken,crud.allRestaurants);
router.get('/Restaurant/:id', authenticate.authenticateToken,crud.Restaurant);
router.get('/ratingData', authenticate.authenticateToken,crud.RatingData);
router.post('/createRestaurant', authenticate.authenticateToken,crud.createRestaurants);
router.delete('/deleteRestaurant/:id', authenticate.authenticateToken,crud.deleteRestaurants);
router.put('/updateRestaurant/:id', authenticate.authenticateToken,crud.updateRestaurants);
router.post('/Restaurant/:id/addreview',authenticate.authenticateToken,crud.AddReview);

router.post('/SignUp', auth.SignUp)
router.post('/Login', auth.Login)

module.exports = router;