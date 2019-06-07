from rest_framework import status
from rest_framework.test import APITestCase,APIRequestFactory

class PostApiTest(APITestCase):
    def setUp(self):
        print("Trying to check if the post api works")

    def test_api(self):
        url="/api/"
        data = {"title":"unit_test","description":"unit", "author":"test", "tags":"test"}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        

