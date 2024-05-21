import { ConnectOptions, connect } from "mongoose";



export const dbConnect = () =>{
    try {
        connect("mongodb+srv://URLSHORTNER:OE7KQlfoIk6L2Fhn@cluster0.0sh1ubd.mongodb.net/URLSHORTNERUI",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        } as ConnectOptions).then(()=>{
            console.log("database connected......");
        })
    } catch (error) {
        console.log("database error");
    }
}