const mongoose = require("mongoose");
const app = require("./app");
const port = 8080;
app.listen(port, () => {
    console.log(`Application Listening On Port ${port}`);
});
mongoose.connect('mongodb+srv://sellpointbd:ZV29vNoG7bD5bFxi@cluster0.bypk6mj.mongodb.net/sellpoint?retryWrites=true&w=majority').then(() => {
    console.log("Database Connection Successfull")
});