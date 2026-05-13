require("dotenv").config();

const express = require("express");
const path = require("path");

const sequelize = require("./config/database");

const Producto = require("./models/Producto");

const productoRoutes = require("./routes/productos");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use("/productos", productoRoutes);

app.get("/", (req, res) => {

    res.render("index");

});

app.get("/productosVista", async (req, res) => {

    try {

        const productos = await Producto.findAll();

        res.render("productos", {
            productos
        });

    } catch (error) {

        res.send(error.message);

    }

});

app.get("/agregarProducto", (req, res) => {

    res.render("agregarProducto");

});

app.post("/agregarProducto", async (req, res) => {

    try {

        await Producto.create(req.body);

        res.redirect("/productosVista");

    } catch (error) {

        res.send(error.message);

    }

});

app.get("/editarProducto/:id", async (req, res) => {

    try {

        const producto = await Producto.findByPk(req.params.id);

        res.render("editarProducto", {
            producto
        });

    } catch (error) {

        res.send(error.message);

    }

});

app.post("/editarProducto/:id", async (req, res) => {

    try {

        const producto = await Producto.findByPk(req.params.id);

        await producto.update(req.body);

        res.redirect("/productosVista");

    } catch (error) {

        res.send(error.message);

    }

});

app.get("/eliminarProducto/:id", async (req, res) => {

    try {

        const producto = await Producto.findByPk(req.params.id);

        await producto.destroy();

        res.redirect("/productosVista");

    } catch (error) {

        res.send(error.message);

    }

});

sequelize.authenticate()
.then(() => {

    console.log("Base de datos conectada");

})
.catch((error) => {

    console.log(error);

});

sequelize.sync()
.then(() => {

    app.listen(process.env.PORT || 3000, () => {

        console.log("Servidor funcionando");

    });

})
.catch((error) => {

    console.log(error);

});