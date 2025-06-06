import Order from "../model/order.js";

export const orderadd=async(req ,res)=>{
    try {
        const{state,amount,customer,date,services}=req.body;
         const order = new Order({ state,amount,customer,date,services });
                        await order.save();
                        res.status(201).json({ message: 'order created', order});
                        console.log("data saved")

    } catch (error) {
        console.log(error)
    }
}

export const orderget=async(req ,res)=>{
    try {
         const order =  await Order.find();
         res.status(201).json({ message: 'order created', order});
         console.log("data saved")
    } catch (error) {
        console.log(error)
    }
}