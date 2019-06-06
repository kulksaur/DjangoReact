from django.urls import path

from .views import PostListView, DetailPostView

urlpatterns = [
    path('', PostListView.as_view()),
    path('/<pk>', DetailPostView.as_view()),
]