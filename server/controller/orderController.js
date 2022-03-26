const food=require('../models/food');


//create an array of food objects
const foodArray=[
    new food({
        FoodItem:"test",
        FoodPrice:13,
        Category:"test",
        FoodImage:"test",
        EstimationTime:13,
        FoodDescription:"test",
        Score:9
    }),
    new food({
        FoodItem:"test",
        FoodPrice:13,
        Category:"test",
        FoodImage:"test",
        EstimationTime:13,
        FoodDescription:"test",
        Score:9
    }),
    new food({
        FoodItem:"test",
        FoodPrice:13,
        Category:"test",
        FoodImage:"test",
        EstimationTime:13,
        FoodDescription:"test",
        Score:9
    }),
    
]


module.exports=foodArray;


