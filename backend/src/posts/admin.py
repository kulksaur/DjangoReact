from django.contrib import admin

from .models import Post

# Registering our model for the Post
admin.site.register(Post)
