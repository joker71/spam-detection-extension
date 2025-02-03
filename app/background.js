chrome.runtime.onInstalled.addListener(() => {
    console.log("Spam Email Detector installed!");
});
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//       // Check if the request URL matches email domains
//       if (details.url.includes("mail.google.com") || 
//           details.url.includes("outlook.com") 
        
//       ) {
//         console.log("details.url", details.url)
//       }
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"] 
//   );