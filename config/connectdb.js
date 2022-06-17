const mongoose = require ('mongoose')


const connectdb = async () => {
    try{ 
    await mongoose.connect("mongodb+srv://Meriem:VfrWPCwEvpXUXeRn@cluster0.w7v05ou.mongodb.net/projetvf?retryWrites=true&w=majority")
    console.log("Good Job baby u r connected")
  } catch(err){
    console.log(err)
   }
}
module.exports = connectdb ;







