const fs = require('fs');

module.exports = (context) => {
    const scripts = fs.readdirSync(`./scripts/`);

    scripts.forEach(file => {
        console.log(`\n\n----------------- running script ${file}`);
        require(`./scripts/${file}`).beforePack(context);
    })
}