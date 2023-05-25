import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);


    router.get('/tudev', (req, res) => {
        return res.send('hello world with TuDev')
    });

    //rest api



    return app.use("/", router);
}

module.exports = initWebRoutes;
