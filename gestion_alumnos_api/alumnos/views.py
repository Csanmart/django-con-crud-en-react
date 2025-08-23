from django.shortcuts import render
from .models import Alumno
from .selerializers import AlumnoSerializer
from rest_framework import viewsets
# Create your views here.


class AlumnoViewSet(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer
