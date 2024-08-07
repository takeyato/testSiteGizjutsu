chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: monitorConsoleErrors
    });
  }
});

function monitorConsoleErrors() {
  window.onerror = function(message, source, lineno, colno, error) {
    chrome.runtime.sendMessage({
      type: 'error',
      message: message,
      source: source,
      lineno: lineno,
      colno: colno
    });
    return true;
  };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'error') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Console Error',
      message: `${request.message} at ${request.source}:${request.lineno}:${request.colno}`
    });
  }
});
