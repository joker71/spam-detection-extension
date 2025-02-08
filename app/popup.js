document.getElementById("detectButton").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length === 0) return; // No active tab found

        chrome.scripting.executeScript(
            {
                target: {tabId: tabs[0].id},
                func: detectSpam, // Use `func` instead of `function`
            },
            (injectionResults) => {
                const resultDiv = document.getElementById("result");
                if (chrome.runtime.lastError) {
                    resultDiv.textContent = "Error: " + chrome.runtime.lastError.message;
                    return;
                }
                const isSpam = injectionResults[0].result;
                console.log(111111, isSpam, injectionResults)
                const result = isSpam ? "Likely Spam!" : "Probably Not Spam.";
                resultDiv.textContent = isSpam ? "Likely Spam!" : "Probably Not Spam.";
                // alert(result)
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
    try {
        const response = await fetch('http://localhost:5001/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: emailBody }), // Send the text as JSON
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Prediction:', data); // This will log the result of the prediction
            alert('Prediction: Email is ' + data.prediction)
            return  data.is_spam
        } else {
            console.error('Error:', data.error); // Handle error
        }
    } catch (error) {
        console.error('Error:', error); // Handle network errors
    }

}
