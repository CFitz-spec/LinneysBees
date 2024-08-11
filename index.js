//imports
import express from "express";


//start up app
const app = express();
const port = 3000;

//middlewares
app.use(express.static("public"));

//landingpage
app.get("/",(req,res)=>{
    res.render("index.ejs")
});




app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});