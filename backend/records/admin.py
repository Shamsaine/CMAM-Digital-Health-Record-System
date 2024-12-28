from django.contrib import admin
from .models import Patient, ProgressRecord

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = (
        'patient_id', 'first_name', 'last_name', 'date_of_birth', 'gender',
        'guardian_name', 'guardian_phone', 'enrollment_date', 'program_status'
    )
    search_fields = ('patient_id', 'first_name', 'last_name', 'guardian_name', 'guardian_phone')
    list_filter = ('program_status', 'facility', 'enrollment_date')

@admin.register(ProgressRecord)
class ProgressRecordAdmin(admin.ModelAdmin):
    list_display = (
        'patient', 'date', 'weight', 'height', 'muac', 'whz_score', 
        'therapeutic_food_provided', 'health_status'
    )
    list_filter = ('date', 'therapeutic_food_provided')
    search_fields = ('patient__first_name', 'patient__last_name', 'patient__patient_id')
