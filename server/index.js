const express=require('express');
const mongooose=require('mongoose');
const app=express();
const FoodModel=require('./models/food');
const OrderModel=require('./models/order');
//.env file
const dotenv=require('dotenv');
dotenv.config();












app.use(express.json());
//allow cross origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

mongooose.connect(process.env.URL,{
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
app.post('/addOrder',async (req,res)=>{
    //get the data from the request
    const {client,id,details,name}=req.body;
    const order=new OrderModel({Foods: [{FoodItem: name, FoodPrice: 25, Category: "Fast Food", FoodImage: "https://img.cuisineaz.com/610x610/2019/04/17/i146583-tacos-poulet-curry.jpeg", EstimationTime: 13, FoodDescription: "Tacos avec poulet et la sauce", Score: 9}], NameClient: client, id: id, Details: details,  Time: "20 MIN"});
    try{
        await order.save();
        console.log('order saved');
        res.send(order);
    }catch(error){
        console.log("error contered in saving order");
        res.send(error);
    }
    


})


//get from the link the id
app.get('/getOrder/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const order=await OrderModel.findOne({_id:id});
        res.send(order);
    }catch(error){
        res.send(error);
    }
}
)


app.get('/getFood',async (req,res)=>{
    try{
        const food=await FoodModel.find();
        res.send(food);
    }catch(error){
        console.log("error contered in getting food");
        res.send(error);
    }
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
