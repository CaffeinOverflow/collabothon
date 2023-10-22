from flask import Blueprint
from flask import jsonify, request
from .models import CollectionEvent, Bin, BinStats
from app import db
import base64
from PIL import Image
import io
from .vision import detect_plastics

api = Blueprint('api', __name__)


@api.post('/bin/<int:binId>/collection/')
def create_collection_event(binId):
    try:
        weight = request.json["weight"]
        if 'photo' not in request.json:
            return jsonify({"error": 'No file part'}), 400

        file = request.json['photo']
        img_bytes = base64.b64decode(file.encode('utf-8'))
        img = Image.open(io.BytesIO(img_bytes))
        
        contains_plastic = detect_plastics(img)

        if contains_plastic :
            category = 'Plastic'
        else:
            category = 'General'

        collection_event = CollectionEvent(binId, category, weight)
        db.collection("bins").document(str(binId)).push(collection_event.__dict__)
        
        return jsonify({"collectionId": collection_event.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@api.get('/bin/stat/')
def get_bin_stats():
    try:
        stats = (db.collection("bins").stream())
        return jsonify({"stats": [stat.to_dict() for stat in stats]}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


