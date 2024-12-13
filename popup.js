chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const { url } = currentTab;
    const isPDF = url.endsWith(".pdf");

    const subtitle = document.getElementById("subtitle");

    if (isPDF) {
        subtitle.textContent = "References";
    } else {
        subtitle.textContent = "This is not a PDF file";
    }
});

chrome.scripting.getRegisteredContentScripts(null, (scripts) => {
    console.log(scripts);
});
