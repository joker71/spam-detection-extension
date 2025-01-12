// Detect email content
document.addEventListener('DOMContentLoaded', () => {
    const emails = document.querySelectorAll('.message');
    console.log(emails)// Adjust selector for Gmail
    emails.forEach(email => {
        const content = email.innerText || email.textContent;

        // Example keyword-based spam detection
        const spamKeywords = ["lottery", "win", "urgent", "prize"];
        if (spamKeywords.some(keyword => content.includes(keyword))) {
            email.style.border = "2px solid red"; // Highlight spam emails
            email.title = "This email might be spam.";
        }
    });
});
async function analyzeEmail(content) {
    const response = await fetch('https://spam-detection-api.com/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailContent: content })
    });
    const result = await response.json();
    return result.isSpam;
}
