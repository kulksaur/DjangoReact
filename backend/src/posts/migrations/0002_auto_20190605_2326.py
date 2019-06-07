# Generated by Django 2.2.2 on 2019-06-05 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='created_at',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='updated_at',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.TextField(null=True),
        ),
    ]