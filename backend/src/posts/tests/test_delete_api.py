from rest_framework import status
from rest_framework.test import APITestCase,APIRequestFactory
from posts.models import Post;

class PutApiTest(APITestCase):
    def setUp(self):
        print("Trying to check if the delete api works")
        print("Creating a object")
        self.post_object = Post.objects.create(title="title",description="description", author="author", tags="tags")
        print("Object is created")

    def test_api(self):
        url="/api/"+str(self.post_object.id)+"/"
        data = {"title":"unit_test","description":"unit", "author":"test", "tags":"test"}
        response = self.client.delete(url, data,format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        

