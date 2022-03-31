const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

//  SYNTAX: fx.writeFile('arg1'-name of the file, 'arg2'-function that generates file content, 'arg3'-callback function for error handling)  
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
})
