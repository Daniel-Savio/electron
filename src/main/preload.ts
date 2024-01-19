import { ipcRenderer } from "electron"
const { contextBridge } = require('electron');


console.log("preloaded file")

const electronHandler = {
  //First value is the channel and the scond is the data
  close: () => ipcRenderer.send("closeApp", "closeApp"),
  minimize: () => ipcRenderer.send('minimize', 'minimize'),
  maximize: () => ipcRenderer.send('maximize', 'maximize'),
  devTools: () => ipcRenderer.send('devTools', 'devTools'),
  send: (channel: any, args: any) => { ipcRenderer.send(channel, args);},


  askForScl: () => ipcRenderer.send('askFor', 'scl'),
  scl: (callback:any) => ipcRenderer.on('scl', (events, args)=>{
    callback(args);
  }),

  askForFiles: () => ipcRenderer.send('askFor', 'files'),
  files:(callback: any) => ipcRenderer.on('files', (events, args: Array<any>)=>{
    callback(args);
  }),


  on: (channel: string, func: any) => ipcRenderer.send(channel, (evt: any, ...args: any[]) =>func(...args)),
  
}



contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;