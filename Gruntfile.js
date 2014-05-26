
var destination = 'releases';
var source_ts = 'src';

module.exports = function(grunt) {

    grunt.initConfig({ // https://github.com/k-maru/grunt-typescript
        pkg: grunt.file.readJSON('./package.json'),
        typescript: {
          base: {
            src: [source_ts+'/**/*.ts'],
            dest: destination,
            options: {
              module: 'amd', //or commonjs
              target: 'es5', //or es3
              basePath: source_ts,
//              sourceMap: true,
//              declaration: true
            }
          }
        },
        clean: [destination],
        shell: {
            install: {
                command: function() {
                    return 'bower cache clean && bower install && cd src && npm install';
                },
                options: {
                    stdout: true,
                    stderr: true,
                    stdin: true
                }
            },
        },
        tsd: { // https://github.com/DefinitelyTyped/tsd
            refresh: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: 'tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-tsd');

    grunt.registerTask('default', ['typescript']);
    grunt.registerTask('run', ['default']);
    grunt.registerTask('install', ['shell:install', 'tsd:refresh']);


};