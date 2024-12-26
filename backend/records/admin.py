from django.contrib import admin

# Register your models here.
from .models import Patient, ProgressRecord

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number', 'created_at')
    search_fields = ('first_name', 'last_name', 'phone_number')

@admin.register(ProgressRecord)
class ProgressRecordAdmin(admin.ModelAdmin):
    list_display = ('patient', 'date', 'weight', 'muac', 'health_status')
    list_filter = ('date',)
    search_fields = ('patient__first_name', 'patient__last_name')
