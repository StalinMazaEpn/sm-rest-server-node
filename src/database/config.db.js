const mongoose = require("mongoose");

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Database is Online and Ready");
    } catch (error) {
        console.log(error);
        throw new Error("Error when database was inicializated");
    }
}

module.exports = {
    dbConnection
}