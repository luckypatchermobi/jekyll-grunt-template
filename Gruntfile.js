'use strict';

module.exports = function(grunt) {

  // Show elapsed time after tasks run to visualize performance
  require('time-grunt')(grunt);
  // Load all Grunt tasks that are listed in package.json automagically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    dist: '_site'
  };

  grunt.initConfig({
    // Project settings
    config: config,

    pkg: grunt.file.readJSON('package.json'),

    // shell commands for use in Grunt tasks
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      }
    },

    // watch for files to change and run tasks when they do
    watch: {
      sass: {
        files: ['_sass/**/*.{scss,sass}'],
        tasks: ['sass']
      }
    },

    // sass (libsass) config
    sass: {
      options: {
        sourceMap: true,
        relativeAssets: false,
        outputStyle: 'expanded',
        sassDir: '_sass',
        cssDir: '<%= config.dist %>/css',
        includePaths: [
          'bower_components/normalize-scss',
          'bower_components/bootstrap/scss',
          'bower_components/bourbon/app/assets/stylesheets'
        ]
      },
      build: {
        files: [{
          expand: true,
          cwd: '_sass/',
          src: ['**/*.{scss,sass}'],
          dest: '_site/css',
          ext: '.css'
        }]
      }
    },

    // run tasks in parallel
    concurrent: {
      server: [
        'sass',
        'watch',
        'shell:jekyllServe'
      ],
      options: {
        logConcurrentOutput: true
      }
    }

  });

  // Register the grunt serve task
  grunt.registerTask('serve', [
    'concurrent:server'
  ]);

  // Register the grunt build task
  grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass'
  ]);

  // Register build as the default task fallback
  grunt.registerTask('default', 'build');

};
