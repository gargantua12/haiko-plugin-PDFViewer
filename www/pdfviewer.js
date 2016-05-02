//  pdfviewer.js
//
//  Created by Haiko Interactive Technologies
//  Based on PdfViewer by Pierre-Emmanuel Bois on 08/08/13.
//

var PDFViewer = {
    open: function (url, title, callback) {
        cordova.exec(callback, function (err) {
                callback('Error: Preview');
            }, "PDFViewer", "open", [url, title]);
    }
};

module.exports = PDFViewer;

