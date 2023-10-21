from flask import jsonify, request
from . import api
from models import CollectionEvent, Bin, BinStats
from app import db

@api.post('/bin/<int:id>/collection/')
def create_collection_event(binId):
    try:
        data = request.get_json()
        bin = db.child("bins").child(binId).get().val()

        if not bin:
            return jsonify({"error": "Bin not found"}), 404

        category = data.get("category")
        weight = data.get("weight")
        
        if category not in ["General", "Plastic"]:
            return jsonify({"error": "Invalid category"}), 400

        collection_event = CollectionEvent(binId, category, weight)
        db.child("collectionEvents").push(collection_event.__dict__)
        
        return jsonify({"collectionId": collection_event.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@api.get('/bin/stat/')
def get_bin_stats():
    try:
        stats = db.child("binStats").get().val()
        return jsonify({"stats": stats}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

