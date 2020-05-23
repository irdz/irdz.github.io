#!/bin/bash

# Install Jekyll via Github Pages
bundle install

# Install dependencies
npm install

# Serve the site locally
jekyll serve -w