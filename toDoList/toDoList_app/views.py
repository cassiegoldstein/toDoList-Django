from django.shortcuts import render
from django.http import HttpResponse
from datetime import date
from .models import Task
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json


todaysdate = date.today()

def index(request):
    date = todaysdate
    data = { 
        'date': date
        }
    return render(request, 'index.html', data)

def listOfTasks(request):
    tasks = Task.objects.all()
    return render(request, 'pastTasks.html', {'tasks': tasks})


@csrf_exempt
def add_task(request):
    if request.method == 'POST':
        print('received')

        body = json.loads(request.body)
        new_task = Task(completedTask = body['task'])
        new_task.save()

    return JsonResponse('success')