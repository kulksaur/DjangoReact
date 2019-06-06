from rest_framework import viewsets
from posts.models import Post
from .serializers import PostSerializer

class PostsViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()