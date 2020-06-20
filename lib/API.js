const colors = require('colors');
const axios = require('axios');

class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiBaseURL = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPrices(coin, currency) {
        try {

            const currencyFormatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency
            });
            const res = await axios.get(`${this.apiBaseURL}?key=${this.apiKey}&ids=${coin}&convert=${currency}`);

            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${currencyFormatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`;
            });
            
            return output;
        } catch (err) {
            catchError(err);
        }
    }
}

function catchError(err) {
    if (err.response.status === 401) {
        throw new Error('Invalid API key, find a valid one at https://nomics.com');
    } else if (err.response.status === 404) {
        throw new Error('API key not responding');
    } else {
        throw new Error('Something went Wrong, please try again');
    }
}

module.exports = API;