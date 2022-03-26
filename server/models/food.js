const mongooose=require('mongoose');

const foodSchema=new mongooose.Schema({
    FoodItem:{
        type:String,
        required:true

    },
    FoodPrice:{
        type:Number,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    FoodImage:{
        type:String,
        required:true
    },
    EstimationTime:{
        type:Number,
        required:true
    },
    FoodDescription:{
        type:String,
        required:false
    },
    Score:{
        type:Number,
        required:true
    },

});


const Food=mongooose.model('Food',foodSchema);
module.exports=Food;
