from django.contrib import admin
from django.urls import path, include

# Adding the URL Patterns for our routes
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('posts.api.urls'))
]
