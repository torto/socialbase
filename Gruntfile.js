module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/css/style.css": "public/css/less/style.less"
        }
      }
    },
    watch: {
      dist: {
        files: ['!public/bower_components/**/*', 'public/**/*', '!public/css/style.css'],
        tasks: ['less'],
        options: {
          livereload: true,
        }
      }
    },
    copy: {
      project: {
        expand: true,
        cwd: '.',
        src: ['public/**/*', '!Gruntfile.js', '!package.json',
          '!public/bower.json'
        ],
        dest: 'dist'
      }
    },
    clean: {
      dist: {
        src: 'dist'
      }
    },
    usemin: {
      html: 'dist/public/index.html'
    },
    useminPrepare: {
      options: {
        root: 'dist/public',
        dest: 'dist/public'
      },
      html: 'public/index.html'
    },
    uglify: {
      options: {
        mangle: false
      }
    }
  });

  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('build', ['dist', 'minifica']);

  grunt.registerTask('dist', ['clean', 'copy']);
  grunt.registerTask('minifica', ['useminPrepare', 'concat',
    'uglify', 'usemin'
  ]);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');

};
