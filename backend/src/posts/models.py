from djongo import models 
from datetime import date 
import django.utils as utils

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(null=False)
    description = models.TextField(null=False)
    author = models.CharField(max_length=50, null=False)
    tags = models.TextField(null=True)
    created_at = models.DateField(default=utils.timezone.now, null=False)
    updated_at = models.DateField(null=True)

    def __str__(self):
        return self.title