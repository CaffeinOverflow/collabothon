import unittest
import json
import base64
from app import create_app

class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        self.client = self.app.test_client()

    def test_get_bin_stats(self):
        response = self.client.get('/bin/stats')
        self.assertEqual(response.status_code, 200)

    def test_create_collection_event(self):
        # Test a valid POST request to create a collection event

        with open('tests/our_bottle.jpg', "rb") as f:
            im_bytes = f.read()        
        im_b64 = base64.b64encode(im_bytes).decode("utf8")

        data = {
            "category": "General",
            "weight": 12.34,
            "photo" : im_b64 
        }
        headers = {'Content-Type': 'application/json', 'Accept': 'text/plain'}
        response = self.client.post('/bin/1/collection/', data=json.dumps(data), headers=headers)
        data = json.loads(response.data.decode('utf-8'))
        self.assertEqual(response.status_code, 201)
        self.assertIn("collectionId", data)

    def test_create_collection_event_invalid_category(self):
        bin_data = {
            "lat": 123.456,
            "lon": 789.012,
            "neighbourhood": "Sample Neighborhood",
            "category": "InvalidCategory"
        }
        response = self.client.post('/bin/1/collection', json=bin_data)

        self.assertEqual(response.status_code, 400)

    
        
    def tearDown(self):
        self.app_context.pop()