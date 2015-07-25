var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

var dialog = require('dialog');

// var remote = require('remote');
var Menu = require('menu');

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('open-file', function(event, path) {
  event.preventDefault();
  mainWindow.send('open-file', path);
});

function setApplicationMenu() {
  var template = [
    {
      label: 'Electron',
      submenu: [
        {
          label: 'About Electron',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide Electron',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          selector: 'terminate:'
        },
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          accelerator: 'Command+N',
          click: function() { mainWindow.send('new-file'); }
        },
        {
          label: 'Open',
          accelerator: 'Command+O',
          click: function() {
            var files = dialog.showOpenDialog({
              title: 'Open Markdown File',
              properties: [ 'openFile' ],
              filters: [{name: 'Markdown', extensions: ['md']}]
            });

            if(files) {
              mainWindow.send('open-file', files[0]);
            }
          }
        },
        {
          label: 'Save',
          accelerator: 'Command+S',
          click: function() {
            var files = dialog.showOpenDialog({
              title: 'Save Markdown File',
              properties: [ 'save-file' ],
              filters: [{name: 'Markdown', extensions: ['md']}]
            });
            if (files) mainWindow.send('save-file', files[0]); }
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: function() { app.quit(); }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+Command+Z',
          selector: 'redo:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'Command+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'Command+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'Command+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    },
    {
      label: 'Development',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: function() { mainWindow.reload(); }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+Command+I',
          click: function() { mainWindow.toggleDevTools(); }
        },
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'performClose:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }
      ]
    },
    {
      label: 'Help',
      submenu: []
    }
  ];

  menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);
}


// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Add a Menu to the Dock
  var Menu = require('menu');
  var dockMenu = Menu.buildFromTemplate([
    { label: 'New Leo Window', click: function() { console.log('New Leo Window'); } },
    { label: 'New Window with Settings', submenu: [
      { label: 'Basic' },
      { label: 'Pro'}
    ]},
    { label: 'New Command...'}
  ]);
  app.dock.setMenu(dockMenu);
  setApplicationMenu();
});
