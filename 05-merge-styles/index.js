const fs = require('fs');
const path = require('path');
const stylesPath = path.join(__dirname, 'styles');
const distPath = path.join(__dirname, 'project-dist');

fs.unlink(path.join(distPath, 'bundle.css'), (err) => {
  if (err) console.log('no file');
});

fs.readdir(stylesPath, {withFileTypes: true}, (err, files) => {
  if (err) throw err;
  files.filter(file => file.isFile() && file.name.split('.').slice(-1) == 'css')
    .map(dirent => dirent.name)
    .forEach(function(file){
      let readableStream = fs.createReadStream(path.join(stylesPath, file));
      readableStream.on('data', data => {
        fs.appendFile(path.join(distPath, 'bundle.css'), data, err => {
          if (err) throw err;
        });
      });
    });
});