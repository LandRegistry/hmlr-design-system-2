const metalsmith = require('../lib/metalsmith') // configured static site generator

var assets = require('metalsmith-assets');

// use metalsmith-assets to place 404 page in the root in order to work with http-server magic
metalsmith.use(assets({
  source: './assets', // relative to the working directory
  destination: './' // relative to the build directory
}))

// build to destination directory
metalsmith.build(function (err, files) {
  if (err) { throw err }
})
