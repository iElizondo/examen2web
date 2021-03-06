# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Comentarios(models.Model):
    usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='usuario')
    witte = models.ForeignKey('Wittes', models.DO_NOTHING, db_column='witte')
    texto = models.CharField(max_length=256)
    fecha = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'comentarios'


class Usuarios(models.Model):
    correo = models.CharField(max_length=150)
    contrasena = models.CharField(max_length=150)
    nombre = models.CharField(max_length=150)
    imagen = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'usuarios'


class Wittes(models.Model):
    usuario = models.ForeignKey(Usuarios, models.DO_NOTHING, db_column='usuario')
    texto = models.CharField(max_length=256)
    fecha = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'wittes'
