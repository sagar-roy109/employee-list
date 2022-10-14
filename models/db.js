const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://sagar:fullstack@fullstack.evgqhwb.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", function () {
  console.log("My Application is connected with MongoDB Server");
});
