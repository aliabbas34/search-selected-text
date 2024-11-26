chrome.commands.onCommand.addListener((command) => {
    if (command === "search-selected-text") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.scripting.executeScript({
          target: { tabId },
          files: ["content.js"]
        });
      });
    }
  });
  