const commander = require('commander');
const { program } = require('commander');
const check = require('../commands/check');

commander
    .command('price')
    .description('Check Coin Price')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC, ETH, XRP')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);