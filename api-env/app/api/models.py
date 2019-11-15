from django.db import models

# Create your models here.

class Usuario(models.Model):
    correo = models.CharField(max_length=150)
    contrasena = models.CharField(max_length=256)
    nombre = models.CharField(max_length=50)
    imagen = models.CharField(max_length=150)
    def __str__(self):
        return self.nombre

class Witte(models.Model):
    usuario = models.ForeignKey(Usuario, null=True, blank=True, on_delete=models.CASCADE)
    texto = models.CharField(max_length=150)
    fecha = models.DateField()
    def __str__(self):
        return self.texto

class Comentario(models.Model):
    usuario = models.ForeignKey(Usuario, null=True, blank=True, on_delete=models.CASCADE)
    witte = models.ForeignKey(Witte, null=True, blank=True, on_delete=models.CASCADE)
    texto = models.CharField(max_length=150)
    fecha = models.DateField()
    def __str__(self):
        return self.texto