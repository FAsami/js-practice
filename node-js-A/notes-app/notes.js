const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

function getNotes() {
  return 'Notes ...';
}

function addNotes(title, body) {
  const notes = loadNotes();
  debugger;
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(`${title} added  successfully`);
  } else {
    console.log('Title alredy taken ');
  }
}

function removeNotes(title) {
  const notes = loadNotes();
  const filtered = notes.filter((note) => title !== note.title);
  if (notes.length === filtered.length) {
    console.log(chalk.red.inverse(`${title} not found`));
  } else {
    saveNotes(filtered);
    console.log(chalk.bgGreen(`${title} removed successfully`));
  }
}

function noteList() {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.greenBright('All of your notes are printed Below : '));
    notes.forEach((note) => {
      console.log(chalk.blueBright(`Title : ${note.title}`));
      console.log(chalk.bgBlueBright(`Body :${note.body}`));
    });
  } else {
    console.log(chalk.bgRedBright('No notes found'));
  }
}

function readNote(title) {
  const notes = loadNotes();
  const note = notes.find((n) => n.title === title);
  if (note) {
    console.log(`
  Title : ${note.title} 
  Body : ${note.body}`);
  } else {
    console.log('No note found ');
  }
}

function saveNotes(data) {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync('./notes.json', dataJSON);
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync('./notes.json');
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  noteList: noteList,
  readNote: readNote,
};
