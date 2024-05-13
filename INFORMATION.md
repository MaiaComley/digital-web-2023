# Amy Winehouse Project

### Website Setup
- Bundled with [Vite](https://vitejs.dev/)
  - This brings all of the code & assets together neatly into a single folder (can build with `yarn build`)
- Hosted on [Google Firebase](https://firebase.google.com/)
  - This is a free server from Google which updates all the changes when the code is uploaded to GitHub
- Code is on [GitHub](https://github.com/MaiaComley/digital-web-2023)
  - This is the most popular place to have code. Its like Google Drive for developers.
  - You can see a history of all the website version on [GitHub Here](https://github.com/MaiaComley/digital-web-2023/commits/main/)


### Glossary
- `package.json` - A file to hold information about the project, e.g. name, version, scripts and dependencies
- `vite.config.js` - A file that has the options for the website when it builds. Here it says which files it should look at, which folder they should get built into and which pages you want on the website (e.g. index, about, bio)
- `.firebaserc` and `firebase.json` - These are for Google, in this project they were automatically generated. It tells the server the project name (so it knows the URL to point to), where the files should be located and anything it should ignore
- `.gitignore` - This is a special file for GitHub, when it looks at the code to see what has changed it will ignore any files that are in the list (helpful for ignoring computer files, like on MacOS it generates a hidden `.DS_Store` folder in every folder, we don't need this).
- `normalise.css` - This is a list of basic styles people have decided on over time that makes browsers look more similar at the base - can read more on the [website here](https://necolas.github.io/normalize.css/)
- `.github` - This folder has two files, these are used to deploy the website to Google Firebase when our code changes - if this was a big corporate website they could be customised, but in this case they are the default ones that are automatically created when starting the project.

### How to share the code?
- The code is publicly available on GitHub [https://github.com/MaiaComley/digital-web-2023](https://github.com/MaiaComley/digital-web-2023)