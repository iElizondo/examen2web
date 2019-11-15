# serializers.py
from rest_framework import serializers

from .models import Usuario, Witte, Comentario

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Usuario
        fields = ('correo', 'contrasena', 'nombre', 'imagen')

class WitteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Witte
        fields = ('usuario', 'texto', 'fecha')

class ComentarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comentario
        fields = ('usuario', 'witte', 'texto', 'fecha')