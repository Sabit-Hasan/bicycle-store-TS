import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

const port = config.port || 5000;


async function startServer() {
    try {
        await mongoose.connect(config.mongoUrl as string).then(() => {
            console.log("Connected to MongoDB");
        }).catch((error) => {
            console.error(error);
        });

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();