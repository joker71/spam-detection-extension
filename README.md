
# Project Structure
# Email Spam Detection Model

This repository contains the machine learning model for email spam detection, designed to be used with the spam detection browser extension.

## Project Structure

```
model/
├── datasets/               # Dataset directory for training and testing data
├── logs/                  # Training logs and metrics
├── notebook/              # Jupyter notebooks for model development
├── results/               # Model checkpoints and evaluation results
└── requirements.txt       # Python dependencies
```

## Dependencies

The model requires the following Python packages:
- pandas: Data manipulation and analysis
- scikit-learn: Machine learning utilities and metrics
- transformers: Hugging Face transformers for NLP tasks
- tensorflow: Deep learning framework

Install dependencies using:
```bash
pip install -r requirements.txt
```

## Model Architecture

The spam detection model utilizes transformer-based architecture for text classification. It's designed to:
- Process email content and metadata
- Extract relevant features for spam detection
- Provide binary classification (spam/not spam) with confidence scores

## Development Workflow

1. Data Preparation
    - Raw email data is processed and cleaned
    - Text is tokenized and formatted for model input
    - Dataset is split into training, validation, and test sets

2. Model Training
    - Located in `notebook/` directory
    - Includes data preprocessing and model training pipelines
    - Hyperparameter tuning and model optimization

3. Evaluation
    - Model performance metrics are stored in `results/`
    - Training logs and learning curves in `logs/`

## Usage

The model can be used in two ways:

1. For Training:
   ```python
   # Import required modules and train the model
   # See notebooks in notebook/ directory for examples
   ```

2. For Inference:
   ```python
   # Load the trained model and make predictions
   # See the backend API implementation for integration details
   ```

## Model Performance

The model is evaluated on standard spam detection metrics:
- Accuracy
- Precision
- Recall
- F1 Score

Detailed performance metrics and evaluation results can be found in the `results/` directory.

## Model Link:
https://huggingface.co/jamesnq/email_spam_model



# Email Spam Detection API

This is a Flask-based API that serves our model for email spam detection.

## Setup

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

2. Run the API:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Health Check
- **URL**: `/health`
- **Method**: `GET`
- **Response**: `{"status": "healthy"}`

### Predict Spam
- **URL**: `/predict`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
    "text": "Your email content here"
}
```
- **Response**:
```json
{
    "is_spam": true/false,
    "confidence": 0.95,
    "prediction": "spam/ham"
}
```

## Example Usage

```python
import requests

url = "http://localhost:5000/predict"
data = {
    "text": "Your email content here"
}

response = requests.post(url, json=data)
print(response.json())
```

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
