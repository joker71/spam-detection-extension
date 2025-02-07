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
