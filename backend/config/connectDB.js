const mongoose=require('mongoose')


const connectDB=async ()=>{
    try{

       const connect=await mongoose.connect(process.env.MONGO_URI)
       console.log('MonogDB connected')

    }catch(error){
        console,log(error)
        process.exit(1)
    }
}

module.exports=connectDB;


{/*const startServer=async ()=>{
   await connectDB();

   app.listen(PORT,()=>{
      console.log(`server is running on ${PORT}`)
   })
}

startServer();*/}