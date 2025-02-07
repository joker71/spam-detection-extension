from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# FastAPI
app = FastAPI()

tokenizer = AutoTokenizer.from_pretrained("jamesnq/email_spam_model")
model = AutoModelForSequenceClassification.from_pretrained("jamesnq/email_spam_model")

class EmailRequest(BaseModel):
    email_text: str

# API endpoint để phân loại spam
@app.post("/predict")
def predict_spam(request: EmailRequest):
    # Tokenize email text
    inputs = tokenizer(request.email_text, return_tensors="pt", truncation=True, padding=True, max_length=512)

    # Dự đoán với mô hình
    with torch.no_grad():
        outputs = model(**inputs)

    # Lấy kết quả phân loại
    logits = outputs.logits
    predicted_class = torch.argmax(logits, dim=1).item()

    # Kết quả trả về (1: spam, 0: không spam)
    result = "spam" if predicted_class == 1 else "not spam"
    return {"prediction": result}

