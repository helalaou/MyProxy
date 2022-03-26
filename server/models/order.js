const mongooose=require('mongoose');




const orderSchema=new mongooose.Schema({
    Foods:{
        type:Array,
        required:true

    },
    NameClient:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    Details:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },

});

const order=mongooose.model('order',orderSchema);
module.exports=order;


