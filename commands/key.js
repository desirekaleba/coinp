const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const isRequired = require('../utils/validation');


const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter your nomics API Key'.yellow + ' https://nomics.com',
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey((await input).key);

        if (key) {
            console.log('Your API key set successfully'.green);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.showKey();

            console.log('Your current key is: ', key.blue);
            return key;
        } catch (err) {

            console.error('OH: '.toUpperCase().red + err.message);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();

            console.log('Your API key has been successfully removed'.green);
        } catch (err) {
            console.error('OH: '.toUpperCase().red + err.message);
        }
    }
};

module.exports = key;