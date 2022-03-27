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
        default:'Pending'
    },
    Date:{
        type:Date,
        default:Date.now
    },
    Time:{
        type:String,
        required:true
    },

});

const order=mongooose.model('order',orderSchema);
module.exports=order;


