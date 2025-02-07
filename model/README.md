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