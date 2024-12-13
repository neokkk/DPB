const { pdfjsLib } = globalThis;

console.log("content-script");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(window.location);
    if (request.action === "fetch-pdf") {
        const url = window.location.href;
        if (url?.endsWith(".pdf")) {
            fetchPDFandExtractText(url);
        }
    }
});

function fetchPDFandExtractText(pdfUrl) {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then((pdf) => {
        let pageNum = 1;
        pdf.getPage(pageNum).then((page) => {
            page.getTextContent().then((textContent) => {
                let text = textContent.items.map(item => item.str).join(" ");
                console.log(text);
            });
        });
    }).catch((error) => {
        console.error("Error: " + error);
    });
}

export {
    fetchPDFandExtractText,
};
