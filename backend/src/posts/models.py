from djongo import models 

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(null=True)
    description = models.TextField(null=True)
    author = models.CharField(max_length=50, null=True)
    tags = models.TextField(null=True)
    created_at = models.DateField(null=True)
    updated_at = models.DateField(null=True)

    def __str__(self):
        return self.title