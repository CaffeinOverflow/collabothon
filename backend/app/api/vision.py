from google.cloud import vision

def detect_plastics(content):
    """Detects labels in the file."""
    client = vision.ImageAnnotatorClient()
    image = vision.Image(content=content)

    response = client.label_detection(image=image)
    labels = response.label_annotations
    
    is_plastic = False

    for label in labels:
        if 'plastic' in label.description and label.score > 80:
            is_plastic = True

    return is_plastic
