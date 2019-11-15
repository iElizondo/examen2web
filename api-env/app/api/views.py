from django.shortcuts import render

from rest_framework import viewsets

from .serializers import UsuarioSerializer, WitteSerializer, ComentarioSerializer
from .models import Usuario, Witte, Comentario


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all().order_by('nombre')
    serializer_class = UsuarioSerializer

class WitteViewSet(viewsets.ModelViewSet):
    queryset = Witte.objects.all().order_by('fecha')
    serializer_class = WitteSerializer

class ComentarioViewSet(viewsets.ModelViewSet):
    queryset = Comentario.objects.all().order_by('fecha')
    serializer_class = ComentarioSerializer
