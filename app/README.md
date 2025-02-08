# Email Spam Detection Extension
## Installation
1. Open Chrome and navigate to chrome://extensions/.
2. Enable Developer Mode.
3. Click Load unpacked and select your project folder.
4. Open Gmail to test the extension.

## Structure

```
/icons           # Folder containing extension icons
background.js    # Handles background processes (e.g., API calls, event listeners)
content.js       # Injected into web pages to analyze email content
manifest.json    # Chrome extension metadata and permissions
package.json     # Dependencies and scripts (if using Node.js for development)
popup.html       # The popup UI that users interact with
popup.js         # Logic for handling popup interactions
README.md        # Documentation for the extension
styles.css       # Styling for the popup UI

```

# Usage
1. Open your email in Gmail, Outlook in Google Chrome
2. Open any mail.
3. Click on the extension icon and click 'Detect Spam' button
4. The extension will analyze the email and alert results.
