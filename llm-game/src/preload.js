const { contextBridge } = require('electron');
const contextManager = require('./context-manager');
const { runLLM } = require('./ai-runner');

contextBridge.exposeInMainWorld('api', {
  runLLM,
  addToHistory: contextManager.addToHistory,
  updateBaseContext: contextManager.updateBaseContext
});