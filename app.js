const path = require("node:path");
const methodOverride = require("method-override");
const express = require("express");

const app = express();

const categoryRouter = require("./routes/categoryroute");
const itemRouter = require("./routes/itemroute");

const assetsPath = path.join(__dirname, "public");

app.use(methodOverride("_method"));

app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", categoryRouter);
app.use("/", itemRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.redirect("/categories");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});