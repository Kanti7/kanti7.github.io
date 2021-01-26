## Build instructions

Pretty self-contained, just a couple commands:

1. Assuming you've already got Node.js and NPM installed on your machine,
   install all the dependencies for this package:

   `npm install`
2. There are a couple `scripts` in `package.json` to aid development,
   but after updating the codebase to your satisfaction,
   deploying the changes (to GitHub Pages) is a simple matter of:

   `npm run publish`

   That will:
   * compile the HTML/CSS/JS into the `dist/` directory (using `webpack`)
   * push those build artifacts to the `gh-pages` branch (using `gh-pages`)

   which are then served from the GitHub Pages site at <https://kanti7.github.io/>
