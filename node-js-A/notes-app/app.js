const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { command } = require('yargs');
// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  buillder: {
    title: {
      describe: 'Add a title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Add body text',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  buillder: {
    title: {
      describe: 'Remove title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
  },
});
//Read note
yargs.command({
  command: 'read',
  describe: "read a note by it's title",
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

//Listing notes
yargs.command({
  command: 'list',
  describe: 'Get all the notes',
  handler: () => {
    notes.noteList();
  },
});

yargs.parse();
