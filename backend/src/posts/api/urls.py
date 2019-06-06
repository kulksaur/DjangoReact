from posts.api.views import PostsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostsViewSet, base_name='posts')
urlpatterns = router.urls

