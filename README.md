# markdown-editor
A simple markdown editor used to explore Electron, Polymer, npm, bower.

There is no pretense that this application is awesome or is consitent etc. etc. It was just
a starting point for me to figure some of the basics out.

## What works and Doesn't

###

1. It builds
1. Loading a file works. File > Open or 'Command+O'
1. New kind of works to clear what's there. File > New
1. Save doesn't really work - got to build a save dialg.
1. toggleDevTools and Reload work.
1. Added a menu to the Dock
1. Using the OSX Dock to load previously visited files also works
1. Some extremely simple and rough Polymer code.
1. Layout is poor and there's some bleeding on the bottom of the AutoGrow Text.
1. Ux is aweful.

## Pre-requisits

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
> npm build-osx
> npm build-win
```

## License

 See MIT-LICENSE in this Repository
