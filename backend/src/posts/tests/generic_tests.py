from django.test import TestCase
from posts.models import Post;
from rest_framework import status
from rest_framework.test import APITestCase,APIRequestFactory

# @Test for checking the connection with the database 
class PostTestCase(TestCase):
    def setUp(self):
        print("Setting up everything")
        # Creating 2 objects to add to database
        Post.objects.create(title="unit_test",description="unit", author="test", tags="test")
        Post.objects.create(title="unit_test2",description="unit2", author="test2", tags="test2")
    
    def test_post_database_connection(self):
        print("Testing the connection and models")
        posts = Post.objects.all()
        self.assertEqual(posts.count(), 2)
