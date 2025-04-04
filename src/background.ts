import Utils from "./lib/Utils";

chrome.runtime.onInstalled.addListener(() => {
    Utils.createRemarks();
});
