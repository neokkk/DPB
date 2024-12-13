import { fetchPDFandExtractText } from "content";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url?.endsWith(".pdf")) {
        console.log("pdf!!!");
        // chrome.tabs.sendMessage(tabId, { action: "fetch-pdf" });
        fetchPDFandExtractText(tab.url);
    }
});
