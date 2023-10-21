from uuid import uuid4
from datetime import datetime

class Bin:
    def __init__(self, id, lat, lon, neighbourhood, category):
        self.id = str(uuid4())
        self.lat = lat
        self.lon = lon
        self.neighbourhood = neighbourhood
        self.category = category

class CollectionEvent:
    def __init__(self, binId, category, weight):
        self.id = str(uuid4())
        self.binId = binId
        self.category = category
        self.createdAt = datetime.now().isoformat()
        self.weight = weight

class BinStats:
    def __init__(self, lat, lon, neighbourhood, category, errorRate, collectedAmount):
        self.id = str(uuid4())
        self.lat = lat
        self.lon = lon
        self.neighbourhood = neighbourhood
        self.category = category
        self.errorRate = errorRate
        self.collectedAmount = collectedAmount