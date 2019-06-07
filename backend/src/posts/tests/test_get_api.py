from rest_framework import status
from rest_framework.test import APITestCase,APIRequestFactory

# @Test for checking if the get operation works 
class GetApiTest(APITestCase):
    def setUp(self):
        print("Trying to check if the get api works")
    

    def test_api(self):
        url="/api/"
        data = {"title":"unit_test","description":"unit", "author":"test", "tags":"test"}
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        

