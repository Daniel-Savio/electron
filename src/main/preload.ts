import { ipcRenderer } from "electron"
const { contextBridge } = require('electron');


// White-listed channels.
const ipc = {
  'render': {
      // From render to main.
      'send': [],
      // From main to render.
      'receive': [
          'test:channel' // Our channel name
      ],
      // From render to main and back again.
      'sendReceive': []
  }
};


console.log("preloaded file")

const electronHandler = {
  //First value is the channel and the scond is the data
  close: () => ipcRenderer.send("closeApp", "closeApp"),
  minimize: () => ipcRenderer.send('minimize', 'minimize'),
  maximize: () => ipcRenderer.send('maximize', 'maximize'),
  //updateSystem: (callback: any) => ipcRenderer.send('system-update', (events: any, args: any) => {callback(...args)}),
  send: (channel: any, args: any) => {
    ipcRenderer.send(channel, args);
  },


  on: (channel: string, func: any) => ipcRenderer.send(channel, (evt: any, ...args: any[]) =>func(...args)),
  
}



contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;