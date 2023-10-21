import unittest
import json
import re
from base64 import b64encode
from app import create_app

class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        self.client = self.app.test_client()

    def tearDown(self):
        self.app_context.pop()

    def test_create_collection_event(self):
        bin_data = {
            "lat": 123.456,
            "lon": 789.012,
            "neighbourhood": "Sample Neighborhood",
            "category": "General"
        }
        response = self.client.post('/bin/<binId>/collection', json=bin_data)

        data = json.loads(response.data)
        self.assertEqual(response.status_code, 201)
        self.assertIn("collectionId", data)

    def test_create_collection_event_invalid_category(self):
        bin_data = {
            "lat": 123.456,
            "lon": 789.012,
            "neighbourhood": "Sample Neighborhood",
            "category": "InvalidCategory"
        }
        response = self.client.post('/bin/<binId>/collection', json=bin_data)

        self.assertEqual(response.status_code, 400)

    def test_get_bin_stats(self):
        response = self.client.get('/bin/stats')
        self.assertEqual(response.status_code, 200)