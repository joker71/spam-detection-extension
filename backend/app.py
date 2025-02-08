from flask import Flask, request, jsonify
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch
from flask_cors import CORS  # Import CORS

app = Flask(__name__)

# Enable CORS for the entire app
CORS(app)

# Load model and tokenizer
MODEL_NAME = "jamesnq/email_spam_model"
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

def predict_spam(text):
    # Tokenize the input text
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512, padding=True)
    
    # Make prediction
    with torch.no_grad():
        outputs = model(**inputs)
        predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
        
    # Get the predicted class and confidence
    predicted_class = torch.argmax(predictions).item()
    confidence = predictions[0][predicted_class].item()
    
    return {
        "is_spam": bool(predicted_class),
        "confidence": confidence,
        "prediction": "spam" if predicted_class == 1 else "not spam"
    }

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        
        if not data or "text" not in data:
            return jsonify({"error": "No text provided"}), 400
            
        text = data["text"]
        result = predict_spam(text)
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
