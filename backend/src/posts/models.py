from djongo import models 
from datetime import date 
import django.utils as utils
import djangoReact.settings as settings
from django import forms

DATE_INPUT_FORMATS = ['%m-%d-%Y','%Y-%m-%d','%d-%m-%Y']

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(null=False)
    description = models.TextField(null=False)
    author = models.CharField(max_length=50, null=False)
    tags = models.TextField(null=False)
    created_at = models.CharField(max_length=50, null=True)
    updated_at = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.title