from rest_framework import serializers
from .models import Alumno

class AlumnoSerializer(serializers.ModelSerializer):
    promedio = serializers.SerializerMethodField()

    class Meta: 
        model = Alumno   # 👈 aquí va con "="
        fields = ['id', 'nombre', 'numero_documento', 'nota1', 'nota2', 'nota3', 'promedio']

    def get_promedio(self, obj):
        # Si el modelo Alumno tiene un método o propiedad que calcule el promedio:
        return obj.promedio()
        # O si no existe, podrías calcularlo aquí:
        # return (obj.nota1 + obj.nota2 + obj.nota3) / 3
