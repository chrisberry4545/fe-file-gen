#!/usr/bin/env node
const program = require('commander');

const createFile = require('./src/create-file');
const readFiles = require('./src/read-files');
const createFolder = require('./src/create-folder');
const convertToClassName = require('./src/convert-to-class-name');
const replaceAll = require('./src/replace-all');

const nameToSub = 'chrisbnametosubhere';
const nameToSubCamelCase = nameToSub + 'CamelCase';

const fileToGenerateFolder = 'files-to-generate/';

program
  .arguments('<className>')
  .option('-t, --type <type>', 'Set type - c, s')
  .action(function(className) {
    let createdFolder = false;
    readFiles(__dirname + '/' + fileToGenerateFolder + program.type + '/', (fileName, content) => {
      if (!createdFolder) {
        createFolder(className);
        createdFolder = true;
      }
      createFile(
        className,
        fileName.replace(nameToSub, className),
        replaceAll(
          replaceAll(
            content,
            nameToSubCamelCase,
            convertToClassName(className)
          ),
          nameToSub,
          className
        )
      );
    }, (err) => {
      console.log('No files found to generate, is', program.type, 'a valid type?');
    });
  })
  .parse(process.argv);

