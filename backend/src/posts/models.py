from djongo import models 
from datetime import date 
import django.utils as utils


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(null=False)
    description = models.TextField(null=False)
    author = models.CharField(max_length=50, null=False)
    tags = models.TextField(null=False)
    created_at = models.DateField(default=utils.timezone.now().date(), null=False)
    updated_at = models.DateField(null=True, auto_now= True)
    
    def __str__(self):
        return self.title