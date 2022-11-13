from django.db import models

class Task(models.Model):
    completedTask = models.CharField(max_length=500)
    
