const shell = require("shelljs");

shell.ls("src/**/*.js").forEach(function(file) {
  shell.sed("-i", /\{\[(.*)\]\}/, "{Array<$1>}", file);
});
