/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! formhub - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://formhub.org/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'modilabs; */'
    },
    jasmine:{
        src: ["js/underscore-min.js"],
        specs: ["jasmine/specs/**/*.spec.js"]
    }
  });

  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'jasmine');

};
