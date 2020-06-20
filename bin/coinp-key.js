const commander = require('commander');

const key = require('../commands/key');

commander
    .command('set')
    .description('Set an API key obtained from https://nomics.com')
    .action(key.set);

commander
    .command('show')
    .description('Show API key')
    .action(key.show);

commander
    .command('remove')
    .description('remove API key')
    .action(key.remove);

commander.parse(process.argv);