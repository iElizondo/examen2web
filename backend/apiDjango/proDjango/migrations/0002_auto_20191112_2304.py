# Generated by Django 2.2.7 on 2019-11-13 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proDjango', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='witte',
            name='usuario',
        ),
        migrations.DeleteModel(
            name='Comentario',
        ),
        migrations.DeleteModel(
            name='Witte',
        ),
    ]
