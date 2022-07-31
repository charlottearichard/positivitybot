const router = require("express").Router();
const apiRoutes = require("./api");

const botRoutes = require("./bot-routes.js");

router.use("/", botRoutes);

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("bot");
});

router.use((req, res) => {
  res.send("Wrong Route!");
});

module.exports = router;
