from rest_framework import serializers
from .models import Patient, ProgressRecord

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'id', 'patient_id', 'first_name', 'last_name', 'date_of_birth', 
            'gender', 'address', 'guardian_name', 'guardian_phone', 
            'guardian_relationship', 'emergency_contact_name', 
            'emergency_contact_phone', 'enrollment_date', 
            'program_status', 'facility', 'ethnicity', 
            'nationality', 'created_at'
        ]

class ProgressRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressRecord
        fields = [
            'id', 'patient', 'date', 'weight', 'height', 'muac', 
            'whz_score', 'health_status', 'therapeutic_food_provided', 
            'supplements', 'lab_results', 'follow_up_notes'
        ]
