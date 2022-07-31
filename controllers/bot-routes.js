const router = require("express").Router();
const sequelize = require("../config/connection");

const { Affirmations, Quotes, Teas } = require("../models");

router.get("/bot", (req, res) => {
  // Affirmations
  Affirmations.findAll({
    attributes: ["id", "affirmation_phrase"],
  }).then((AffirmationsData) => {
    // pass a single post object into the bot template
    const affirmations = AffirmationsData.map((affirmations) =>
      affirmations.get({ plain: true })
    );

    //Quotes
    Quotes.findAll({
      attributes: ["quote", "by"],
    }).then((QuotesData) => {
      // pass a single post object into the bot template
      const quotes = QuotesData.map((quotes) => quotes.get({ plain: true }));

      //Teas
      Teas.findAll({
        attributes: ["tea_type", "benefits"],
      }).then((TeasData) => {
        // pass a single post object into the bot template
        const teas = TeasData.map((teas) => teas.get({ plain: true }));

        console.log(quotes);
        res.render("bot", { affirmations, quotes, teas });
      });
    });
  });
});

module.exports = router;
