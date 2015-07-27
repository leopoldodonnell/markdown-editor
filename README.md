# markdown-editor
A simple markdown editor used to explore Electron, Polymer, npm, bower.

There is no pretense that this application is awesome or is consitent etc. etc. It was just
a starting point for me to figure some of the basics out.

## What works and Doesn't

### What is demonstrated

1. A basic package.json with scripts to build and run the applicaiton
1. Buiding OS X and Windows versions of the application from OS X using wine
1. Application Menus
1. Communication between the main process and a window
1. Use of Dialogs
1. File Saving and Loading
1. Recent Files in the Dock and and responding to reload them
1. Some basic Polymer with Data Binding

### Features

1. File > Open or 'Command+O' to open a markdown file
1. File > New or 'Command+N' clears the current window
1. File > Save or 'Command+S' provides a dialog to save a file
1. Development > Reload or 'Command+R' reloads the source (index.html)
1. Development > Toggle Dev Tools or 'Alt+Command_I' toggles the chromium dev tools view
1. Using the OSX Dock to load previously visited files

### ToDo:

1. Show Integration with a Native Module
1. Break the basic editor into a Polymer object
1. Use Polymer Paper elements
1. What else...

### Not So Great

I'm not going to make an effort to use this project to solve workflow issues and am not got
to make an effort to improve consistency; this is, after all, just a play app to get some things
uderstood before doing something of more significant value.

1. Layout is poor and there's some bleeding on the bottom of the AutoGrow Text.
1. Ux is aweful.

## Pre-requisits

Visit the appropriate web sites to install:

* node
* npm
* bower
* wine (if on OSX and building for Windows)

## Build

1. clone the repository git clone
```bash
> git clone git@github.com:leopoldodonnell/markdown-editor.git
```
2. update bower and npm from the project directory
```bash
> cd markdown-editor
> bower update
> npm update
```
3. see if it will run (from the project directory)
```bash
> npm start
```
4. Build it!
```bash
> npm run build-osx
> npm run build-win
```

## License

 See MIT-LICENSE in this Repository
