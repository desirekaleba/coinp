#!/usr/bin/env node

const commander = require('commander');
const package = require('../package.json');

commander
    .version(package.version)
    .command('key', 'Manage API key -- https://nomics.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv);