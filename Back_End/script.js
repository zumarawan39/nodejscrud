let express = require("express");
let cors = require("cors");
let { savedata,mainget,del_item,edit } = require("./Modal/schema");

let app = express();
app.use(express.json());
app.use(cors());

// Define port
const port = 3000;

// Making server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
// Define post request handler
app.post("/post", async (req, res) => {
    let result = req.body;
    name= result.name;
    email = result.email;
    await savedata(name, email);     
});
app.get("/get",(req,res)=>{
  ( async()=> {
  let get_data=await mainget()
  res.send(get_data)
})()
})
// Define delete request handler
app.delete("/delete", async (req, res) => {
        const id = req.body.id;
        await del_item(id); // Await deletion
        res.send("Deleted successfully");
});
//EDIT THE DATA
app.put("/put",async(req,res)=>{
    const putdata=req.body;
    console.log(putdata);
    await edit(putdata);
    res.send("updated")
})