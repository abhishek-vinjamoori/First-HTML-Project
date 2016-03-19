var browser = navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ? 'chrome' : 'other';
if (BrowserDetect.browser.indexOf("chrome")>-1) {
document.write('<'+'link rel="stylesheet" href="../CSS/indexmain.css" />');
} else if (BrowserDetect.browser.indexOf("mozilla")>-1) {
    document.write('<'+'link rel="stylesheet" href="../CSS/index.css" />');
} else if (BrowserDetect.browser.indexOf("explorer")>-1) {
    document.write('<'+'link rel="stylesheet" href="../CSS/index.css" />');
}
