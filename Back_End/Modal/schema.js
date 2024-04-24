const mongoose = require("mongoose");
// Define schema
const schema = mongoose.Schema({
  name: String,
  email: String,
});

// Define modal
const modal = mongoose.model("Assignmentno20", schema);

// Define savedata function
const savedata = async (name, email) => {
  await mongoose.connect(
    "mongodb+srv://seebizbpt0623evdev41:l2Be11O5zei97LtK@tasks.fkxsczr.mongodb.net/"
  );
  const user = new modal({
    name: name,
    email: email,
  });
  await user.save();
};
const mainget= async (req,res)=>{
    await mongoose.connect(
        "mongodb+srv://seebizbpt0623evdev41:l2Be11O5zei97LtK@tasks.fkxsczr.mongodb.net/"
      );
      let result=await modal.find({})
      return result;
}
const del_item=async(id)=>{
  await mongoose.connect(
    "mongodb+srv://seebizbpt0623evdev41:l2Be11O5zei97LtK@tasks.fkxsczr.mongodb.net/"
  );
  await modal.findOneAndDelete({_id:id});
  return "deleted";
}
const edit=async(body)=>{
  await mongoose.connect(
    "mongodb+srv://seebizbpt0623evdev41:l2Be11O5zei97LtK@tasks.fkxsczr.mongodb.net/"
  );
  await modal.findOneAndUpdate({_id:body.id},{name:body.name},{email:body.email});
  return "Updated"
}
module.exports = { savedata,mainget,del_item,edit};
