from rest_framework import serializers
from .models import Patient, ProgressRecord

class ProgressRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressRecord
        fields = ['id', 'date', 'weight', 'muac', 'health_status']

class PatientSerializer(serializers.ModelSerializer):
    progress_records = ProgressRecordSerializer(many=True, read_only=True)

    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name', 'date_of_birth', 'gender', 'address', 'phone_number', 'created_at', 'progress_records']
