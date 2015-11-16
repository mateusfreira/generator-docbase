'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('GeneratorDocbase') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'useGenerator',
      message: 'Would you like to generate static html files?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      var files = [{
        'template': '_bower.json',
        'name': 'bower.json'
      }, {
        'template': '_package.json',
        'name': 'package.json',
        'useGenerator' : true
      }, {
        'template': '_GruntFile.js',
        'name': 'GruntFile.js',
        'useGenerator' : true
      }, {
        'template': '_index.html',
        'name': 'index.html'
      }, {
        'template': '_map.json',
        'name': 'map.json'
      }, {
        'template': 'html/_main.html',
        'name': 'html/main.html'
      }, {
        'template': 'html/_navbar.html',
        'name': 'html/navbar.html'
      }, {
        'template': 'js/_docbase.js',
        'name': 'js/docbase.js'
      }, {
        'template': 'docs/v1/sample/_sample1.md',
        'name': 'docs/v1/sample/sample1.md'
      }, {
        'template': 'docs/v2/sample/_sample1.md',
        'name': 'docs/v2/sample/sample1.md'
      }      
      ];
      var opions = this.props;
      var self = this;
      files.filter(function(file){
        return !file.useGenerator || opions.useGenerator;
      }).forEach(function(file) {
        self.fs.copy(
          self.templatePath(file.template),
          self.destinationPath(file.name)
        );
      });
    },

    projectfiles: function() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function() {
    this.installDependencies();
  }
});