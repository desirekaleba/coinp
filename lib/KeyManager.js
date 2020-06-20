const ConfigStore = require('configstore');
const packageJson = require('../package.json');
const key = require('../commands/key');

class KeyManager {
    constructor() {
        this.config = new ConfigStore(packageJson.name);
    }

    setKey(key) {
        this.config.set('APIKey', key);
        return key;
    }

    showKey() {
        const key = this.config.get('APIKey');

        if (!key) {
            throw new Error('It looks like you don\'t have any key yet, get one at https://nomics.com');
        }
        return key;
    }

    deleteKey() {
        const key = this.config.get('APIKey');

        if (!key) {
            throw new Error('You don\'t have any key, get one at https://nomics.com');
        }
        this.config.delete('APIKey');
        return;
    }
}

module.exports = KeyManager;