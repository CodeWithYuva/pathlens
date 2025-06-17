from transformers import pipeline

# Initialize the zero-shot classification pipeline
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

text = "The company's quarterly earnings increased by 20%, exceeding market expectations."
candidate_labels = ["finance", "sports", "politics", "technology"]

result = classifier(text, candidate_labels)
print(result)