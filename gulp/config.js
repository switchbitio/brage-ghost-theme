var theme = 'brage-ghost-theme';

var src = 'app';
var assets = 'app/assets';
var fonts = assets + '/fonts';
var css = assets + '/css';
var scss = assets + '/scss';
var js = assets + '/js';
var images = assets + '/images';

var dist = 'dist';
var distAssets = 'dist/assets';
var distFonts = distAssets + '/fonts';
var distCss = distAssets + '/css';
var distJs = distAssets + '/js';
var distImages = distAssets + '/images';

var templatesGlob = '/**/*.hbs';
var cssGlob = '/**/*.css';
var scssGlob = '/**/*.scss';
var jsGlob = '/**/*.js';
var imagesGlob = '/**/*.{jpg,jpeg,png,gif,svg}';

module.exports = {
  reset: {
    src: 'node_modules/ghost'
  },
  template: {
    theme: theme
  },
  symlink: {
    dev: {
      src: src,
      theme: theme
    },
    prod: {
      src: dist,
      theme: theme
    }
  },
  googleWebFonts: {
    src: './fonts.list',
    dest: fonts
  },
  browserSync: {
    dev: {
      files: [
        src + templatesGlob,
        css + cssGlob,
        js + jsGlob
      ],
      proxy: 'localhost:2368'
    },
    prod: {
      proxy: 'localhost:2368'
    }
  },
  watch: {
    templates: src + templatesGlob,
    scss: scss + scssGlob,
    js: js + jsGlob
  },
  jshint: {
    src: js + jsGlob
  },
  sass: {
    src: scss + scssGlob,
    dest: css
  },
  wiredep: {
    src: src + '/default.hbs'
  },
  wiredepScss: {
    src: scss + '/screen.scss',
    dest: scss
  },
  cdnize: {
    src: dist + templatesGlob,
    dest: dist,
    files: [
      {
        file: '/bower_components/highlightjs/highlight.pack.js',
        package: 'highlightjs',
        test: 'window.hljs',
        cdn: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/highlight.min.js'
      }, {
        file: '/bower_components/highlightjs/styles/default.css',
        package: 'highlightjs',
        cdn: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/styles/default.min.css'
      }, {
        file: '/assets/fonts/fonts.css',
        cdn: '//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
      }
    ]
  },
  delete: {
    src: [ dist, 'docker/ghost/dist']
  },
  gzip: {
    src: distAssets + '/**/*.{css,js}',
    dest: distAssets
  },
  optimizeCss: {
    src: distCss + cssGlob,
    dest: distCss
  },
  optimizeImages: {
    src: images + imagesGlob,
    dest: distImages
  },
  optimizeJs: {
    src: distJs + jsGlob,
    dest: distJs
  },
  rev: {
    src: [distCss + cssGlob, distJs + jsGlob, distImages + imagesGlob],
    dest: dist
  },
  revCollect: {
    src: [dist + '/manifest.json', dist + '/**/*.{hbs,css,js}'],
    dest: dist
  },
  useref: {
    src: src + templatesGlob,
    dest: dist
  },
  webp: {
    src: distImages + '/**/*.{jpg,jpeg,png}',
    dest: distImages
  },
  zip: {
    src: dist + '/**/*',
    dest: dist,
    name: theme + '.zip'
  },
  copy: {
    package: {
      src: src + '/package.json',
      dest: dist
    },
    meta: {
      src: [
        src + '/*.txt',
        src + '/browserconfig.xml'
      ],
      dest: dist
    },
    fonts: {
      src: [
        fonts + '/**/Nexa*',
        fonts + '/icons/**'
      ],
      base: fonts,
      dest: distFonts
    },
    dist: {
      src: dist + '/**/*',
      docker: {
        dest: 'docker/ghost/dist'
      }
    }
  },
  dist: {
    docker: {
      src: 'docker',
      command: 'docker-compose -f docker-compose.http.yml -p brage build'
    }
  },
  ghost: {
    dev: {
      config: '../../ghost-dev-config.js'
    },
    prod: {
      env: 'gulp/prod.env.json',
      config: '../../ghost-prod-config.js',
      docker: 'docker-compose -f docker-compose.http.yml -p brage build && docker-compose -f docker-compose.http.yml -p brage up'
    }
  }
};
