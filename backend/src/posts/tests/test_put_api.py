from rest_framework import status
from rest_framework.test import APITestCase,APIRequestFactory
from posts.models import Post;

# @Test for checking if the put operation works 
class PutApiTest(APITestCase):
    def setUp(self):
        print("Trying to check if the put api works")
        print("Creating a object")
        self.post_object = Post.objects.create(title="title",description="description", author="author", tags="tags")
        print("Object is created")
        print("Trying to update the object")

    def test_api(self):
        url="/api/"+str(self.post_object.id)+"/"
        data = {"title":"unit_test","description":"unit", "author":"test", "tags":"test"}
        response = self.client.put(url, data,format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        

