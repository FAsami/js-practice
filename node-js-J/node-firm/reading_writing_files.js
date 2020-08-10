//Reading and writing files
const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

//Writing files
const textOut = `This is what we know : ${textIn} `;
fs.writeFileSync('./txt/output.txt', textOut);

fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  fs.readFile(`txt/${data}.txt`, 'utf-8', (err, data1) => {
    fs.readFile(`txt/append.txt`, 'utf-8', (err, data2) => {
      fs.writeFile('txt/final.txt', data2, 'utf-8', (err) => {
        console.log('File Created');
      });
    });
  });
});

//Summary :
// 01.fs.readFileSync()
// Argument takes:
// I)Path (String)
// II)Endcoding(String)
// Argument takes:
// I)The text in the file

// 02.fs.writeFileSync()
// Argument takes:
// I)Path (String)
// II)What to write
// Returns: Nothing
