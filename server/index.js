const express=require('express');
const mongooose=require('mongoose');
const app=express();
const FoodModel=require('./models/food');
const OrderModel=require('./models/order');
const foodsArray=require('./controller/orderController');






app.use(express.json());
//allow cross origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

mongooose.connect('mongodb+srv://mehdios36000:aqzsedrftg1A-@myproxyd.dmbcn.mongodb.net/Food?retryWrites=true&w=majority',{
    useNewUrlParser:true,
})



app.get('/addFood',async (req,res)=>{;
    const food=new FoodModel({FoodItem: "test", FoodPrice: 13, Category: "test", FoodImage: "test", EstimationTime: 13, FoodDescription: "test", Score: 9});
    try{
        await food.save();
        console.log('food saved');
        res.send(food);
    }catch(error){
        console.log("error contered in saving food");
        res.send(error);
    }



})
app.get('/addOrder',async (req,res)=>{
    const order=new OrderModel({Foods:foodsArray,NameClient:"test",id:1,Details:"test",Status:"test",Time:"test"});
    try{
        await order.save();
        console.log('order saved');
        res.send(order);
    }catch(error){
        console.log("error contered in saving order");
        res.send(error);
    }


})


app.get('/getFood',async (req,res)=>{
    try{
        const food=await FoodModel.find();
        res.send(food);
    }catch(error){
        console.log("error contered in getting food");
        res.send(error);
    }
});


    });

app.get('/getOrders',async (req,res)=>{

    try{
        const order=await OrderModel.find();
        res.send(order);
        }catch(error){
            console.log("error contered in getting order");
            res.send(error);
            }
});
            
            
            





app.listen(3001,()=>{
    console.log('server is running on port 3001');
});