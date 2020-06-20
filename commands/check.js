const KeyManager = require('../lib/KeyManager');
const API = require('../lib/API');

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.showKey();

            const api = new API(key);

            const priceData = await api.getPrices(cmd.coin, cmd.cur);

            console.log(priceData);
        } catch (err) {
            console.error(err);
            
        }
    }
}

module.exports = check;