![Brage Theme Screenshot](http://i.imgur.com/0ydeDsH.png)

# Brage Ghost Theme

A [Ghost](https://ghost.org/) theme built using Gulp.

This theme can be used as is or as a seed project for developing your own Ghost theme using Gulp to simplify and speed up development. 

Please read the following post for a more detailed description of the various Gulp tasks: **[blog.switchbit.io/developing-a-ghost-theme-with-gulp](http://blog.switchbit.io/developing-a-ghost-theme-with-gulp)**

To make developing a custom Ghost theme as seamless as possible, you would expect the following:

* Run a local instance of Ghost without any external dependencies
* Reload Ghost when changes in `.hbs` templates and `.js` files are made
* Inject changes to `.scss` files with [Browsersync](http://www.browsersync.io/)
* Optimise all assets when building for production release (minify, uglify, revision, etc.)
* Development dependencies through `npm` and `bower`

To enable this, we use Gulp to run a local instance of Ghost with configuration to watch for changes in the above files and automatically reload when necessary.
As well as the usual suspects for optimising our assets.

#### Thanks to

The layout of the Gulp tasks as well as some of the configurations are inspired by Stefan Imhoff's ["Introduction to Gulp.js 15: Performance Improvements with WebP and Gzip"](http://stefanimhoff.de/2014/gulp-tutorial-15-performance-improvements-webp-gzip/)
 
## Using the Brage theme as is
 
If you simply want to use the Brage theme for your own Ghost blog then you can [download](https://github.com/switchbitio/brage-ghost-theme/releases) the latest release
or if you prefer building it yourself, clone this repository and run:

```
$ npm install
$ bower install
$ gulp dist && gulp zip
```

Then upload the `brage-ghost-theme.zip` to your Ghost Pro instance or [install](https://www.digitalocean.com/community/questions/installing-themes-in-ghost) on your own hosted Ghost instance.
 
## Developing your own theme

If you want to use Brage Ghost theme as a seed project to develop your own theme and assuming you have Gulp installed, install all dependencies:

```
$ npm install
$ bower install
```

### Initialise Ghost for development usage

By default, Ghost uses the [Casper](https://github.com/TryGhost/Casper) theme but we need to replace Casper with our current theme when Ghost fires up for the first time.
To do this, we need to replace the reference to Casper as the default theme in `default-settings.json`

Run the default Gulp task to prepare our Ghost instance (this should only be done *once*):

```
$ gulp
```

In addition, this also downloads any Google Fonts we have specified in `fonts.list`.

### Developing your theme

After our Ghost instance is prepared, start it up by running:

```
$ gulp ghost
```

This will open a [browser](http://localhost:3000) with our current theme set as the default.
Note that any changes to `.hbs` templates or `.js` files will cause the Ghost instance to be restarted and the browser to be refreshed automatically. Changes to `.scss` files will be injected into your browser without refreshing the page.

### Preparing your theme for release

You can verify that your theme will run as expected in a production instance of Ghost by running:

```
$ gulp ghost:production
```

This will run all optimisations for the theme, load a local production instance of Ghost and open a browser for final testing.

### Releasing your theme

To produce a distributable zip file containing your newly minted theme run:

```
$ gulp dist && gulp zip
```

The theme `.zip` will be located in the `dist` directory.
You can now upload your theme to your Ghost Pro instance or install on your self hosted Ghost instance.

## Run as Docker containers

If you choose to run your Ghost blog as Docker containers, you can stand up a complete production instance of Ghost, with the Brage theme installed, by running the following:

```
# You MUST have docker-compose > 1.4.0 installed
$ gulp ghost:docker
```

This will use `docker-compose` to build the images and stand up the following containers:

* `brage_content` - A volume container that will contain your Ghost content, theme files etc.
* `brage_ghost` - Container that will contain your Ghost instance. This is separated from your blog content so that you can upgrade Ghost versions or configurations without losing your content.
* `brage_nginx` - An nginx container pre-configured and optimised to serve your Ghost blog

You can navigate to [http://localhost:2368](http://localhost:2368) or the blog URL configured in `docker/ghost/config-prod.js` to view your Ghost instance.

**NOTE:** You must first setup your blog by going to [http://localhost:2368/ghost](http://localhost:2368/ghost) and following the instructions.
Once you're done setting up your blog, don't forget to select the Brage theme under `Settings > General > Theme`.

### Mail configuration

By default [Mailgun](http://www.mailgun.com/) is used as the mail provider.
Set the following environment variables (`MAILGUN_USER` and `MAILGUN_PASSWORD`) for the `brage_ghost` container to the correct values for your Mailgun account.
You can also add these to `docker/ghost/Dockerfile`.

Alternatively, configure Ghost mail in `docker/ghost/config-prod.js` according to these instructions: [http://support.ghost.org/mail](http://support.ghost.org/mail). 
Don't forget to rebuild (this is done for you with `gulp ghost:docker`) your images after making any changes.

### Blog URL

The default blog URL is brage.switchbit.io.
Change the URL to that of your blog in `docker/ghost/config-prod.js` and don't forget to rebuild your Ghost image.

## License

See the LICENSE file for license rights and limitations (MIT).

