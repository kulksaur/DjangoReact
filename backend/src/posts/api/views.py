from rest_framework.generics import ListAPIView, RetrieveAPIView

from posts.models import Post
from .serializers import PostSerializer

class PostListView(ListAPIView):
     queryset = Post.objects.all()
     serializer_class = PostSerializer

class DetailPostView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer