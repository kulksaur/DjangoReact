from rest_framework import viewsets
from posts.models import Post
from .serializers import PostSerializer

# Using ModelViewSet which is a more compact way
class PostsViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()