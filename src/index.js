const insult = require("./data/insults.js");

const Insult = () => {
    return insult.randomInsult;
}

module.exports.Insult = Insult;