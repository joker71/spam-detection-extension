document.getElementById("detectButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return; // No active tab found

    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: detectSpam, // Use `func` instead of `function`
      },
      (injectionResults) => {
        const resultDiv = document.getElementById("result");
        if (chrome.runtime.lastError) {
          resultDiv.textContent = "Error: " + chrome.runtime.lastError.message;
          return;
        }
        const isSpam = injectionResults[0].result;
        const result = isSpam ? "Likely Spam!" : "Probably Not Spam.";
        resultDiv.textContent = isSpam ? "Likely Spam!" : "Probably Not Spam.";
        alert(result)
      }
    );
  });
});

async function detectSpam() {
  let emailBody = "";

  // Try Gmail's email body selector
  const gmailBody = document.querySelector(".a3s"); // Gmail email content class
  if (gmailBody) {
    emailBody = gmailBody.innerText;
  } else {
    // Try Outlook's email body selector
    const outlookBody = document.querySelector('[role="presentation"]');
    if (outlookBody) {
      emailBody = outlookBody.innerText;
    }
  }


  if (!emailBody) {
    return "Could not extract email body."; // Or handle the error as needed
  }

  
  console.log(emailBody)

  var myHeaders = new Headers();
  myHeaders.append("apikey", "l81IbatyWUPloZU4AvQGl7dH61v6HzLu");
  console.log(1212)

  var requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: emailBody,
  };
  const response = fetch("https://api.apilayer.com/spamchecker?threshold={threshold}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  const result = await response.json();
  return result.is_spam;

}
