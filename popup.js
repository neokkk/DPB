chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    console.log(currentTab);
    const isPDF = currentTab.url.endsWith(".pdf");  // URL이 ".pdf"로 끝나는지 확인합니다.
    console.log(isPDF);

    const subtitle = document.getElementById("subtitle");

    if (isPDF) {
        subtitle.textContent = "References";
    } else {
        subtitle.textContent = "This is not a PDF file";
    }
});
