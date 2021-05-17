const fs = require("fs");
const modelsDirectory = 'src/models';

const getModelsConfig = () => {

    const filenames = fs.readdirSync(modelsDirectory);
    let modelsConfig = []

    filenames.forEach((file) => {
        file != 'index.js' ? modelsConfig.push(require(`./${file}`)) : null;
    });

    return modelsConfig;
}

module.exports = getModelsConfig;

