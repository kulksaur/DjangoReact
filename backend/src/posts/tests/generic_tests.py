from django.test import TestCase
from posts.models import Post;
from rest_framework import status
from rest_framework.test import APITestCase,APIRequestFactory

# Create your tests here.
class PostTestCase(TestCase):
    def setUp(self):
        print("Setting up everything")
        Post.objects.create(title="unit_test",description="unit", author="test", tags="test")
        Post.objects.create(title="unit_test2",description="unit2", author="test2", tags="test2")
    
    def test_post_database_connection(self):
        print("Testing the connection and models")
        posts = Post.objects.all()
        self.assertEqual(posts.count(), 2)
