#!/bin/bash

# Install Jekyll via Github Pages
bundle install

# Install dependencies
npm install

# Run SASS watch
sass --watch src/sass/* _site/dest/styles/core.css &

# Serve the site locally
jekyll serve -w