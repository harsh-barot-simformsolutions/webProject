const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const hbs = require('hbs');
const viewPath = path.join(__dirname, "../templates/views")
const templatesPath = path.join(__dirname, '../templates')
const partialsPath = path.join(__dirname, '../templates/partials')
const staticPath = path.join(__dirname, "../public");
// built in middleware
app.set("view engine" , "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath)
// app.use(express.static(staticPath));
app.get("/",(req,res) =>{
    res.render(path.join(viewPath,"/index"),{
        title : "RIDERgOESHERE"
    });
})
app.get("/about",(req,res)=>{
    res.render(path.join(viewPath,"aboutUs"),{
        title : "ABOUT US--"
    })
})
app.get("/404", (req,res)=>{
    res.render(path.join(viewPath,"error404"),{
        title:"404"
    })
})
//if user going in about us page it's fine but if user going any other section which is located into a about us page show error to him from likr below example.......

app.get("/about/*", (req,res)=>{
    res.render(path.join(viewPath,"error404"),{
        errorcomemnt : "OPPS THIS ABOUT US PAGE IS NEVER FOUND"
    })
})
app.listen(port,()=>{
    console.log(`listning to server at http//localhost:${port}`);
})