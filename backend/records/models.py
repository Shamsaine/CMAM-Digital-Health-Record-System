from django.db import models

# Create your models here.

class Patient(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    gender_choices = [('M', 'Male'), ('F', 'Female')]
    gender = models.CharField(max_length=1, choices=gender_choices)
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class ProgressRecord(models.Model):
    patient = models.ForeignKey(Patient, related_name='progress_records', on_delete=models.CASCADE)
    date = models.DateField()
    weight = models.FloatField()  # in kilograms
    muac = models.FloatField()  # Mid-Upper Arm Circumference in cm
    health_status = models.TextField()

    def __str__(self):
        return f"Progress for {self.patient.first_name} on {self.date}"
