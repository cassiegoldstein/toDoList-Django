# Generated by Django 4.1.3 on 2022-11-14 00:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDoList_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='completedTask',
            field=models.CharField(max_length=500, unique=True),
        ),
    ]
