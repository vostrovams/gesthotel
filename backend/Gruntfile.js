// wrapper funtion
module.exports = function (grunt) {
    // project and task configuration
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n',
                banner: '/*My banner*/\n',
                footer: '/*My footer*/\n',
                stripBanners: true
            },

            dist: {
                src: ['client/httpMethod.js', 'client/app.js', 'dist/client/templateCache.js', 'client/partials/**/*.js'],
                dest: 'dist/client/hotel.js'
            },

            final : {
                src : ['client/lib/angular.min.js', 'client/lib/angular-route.min.js'],
                dest : 'dist/client/vendors.js'
            }
        },

        copy: {
            main: {
                files: [
                    // { expand: true, src: ['**', '!**/*.js'], cwd: 'client/partials/', dest: 'dist/client/partials/' },
                    { expand: true, src: '**', cwd: 'server/', dest: 'dist/server/' },
                    // { expand: true, src: '**', cwd: 'client/lib/', dest: 'dist/client/lib/' }, // change directory with cwd and copy all files inside the file
                    { expand: true, src: 'index.html', cwd: 'client/', dest: 'dist/client', filter: 'isFile' },
                    { expand: true, src: 'package.json', dest: 'dist', filter: 'isFile' }
                ]
            }
        },

        clean: {
            build: ['dist/'],
            cache: ['dist/client/templateCache.js'],
            final: ['dist/client/built.js'],
           // min: ['dist/client/client.min.js']
        },

        angularTemplateCache: {
            options: {
                module: 'spa', // my main module
                strict: false, // do not insert 'use strict'
                htmlmin: {
                    collapseWhitespace: true // collapse white spaces
                }
            },

            defaultOptions: {
                cwd: 'client/',
                src: ['partials/**/*.html'],
                dest: 'dist/client/templateCache.js',
            }
        },

        uglify: {
            options: {
                mangle: true
            },

            target: {
                files: {
                    'dist/client/client.min.js': ['dist/client/built.js']
                }
            }
        }

    });

    // loading grunt plugins and task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-angular-templatecache');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // custom tasks
    grunt.registerTask('default', ['clean:build', 'angularTemplateCache', 'copy', 'concat:dist', 'clean:cache', 'uglify', 'clean:final', 'concat:final']);

}