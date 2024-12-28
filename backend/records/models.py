from django.db import models

class Patient(models.Model):
    patient_id = models.CharField(max_length=50, unique=True)
    # Child Information
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    gender_choices = [('M', 'Male'), ('F', 'Female')]
    gender = models.CharField(max_length=1, choices=gender_choices)
    address = models.TextField(blank=True, null=True)
    
    # Guardian Information
    guardian_name = models.CharField(max_length=255)
    guardian_phone = models.CharField(max_length=15)
    guardian_relationship = models.CharField(max_length=100)

    # Emergency Contact
    emergency_contact_name = models.CharField(max_length=255, blank=True, null=True)
    emergency_contact_phone = models.CharField(max_length=15, blank=True, null=True)
    
    # CMAM Program Information
    enrollment_date = models.DateField()
    program_status_choices = [('active', 'Active'), ('discharged', 'Discharged'), ('graduated', 'Graduated')]
    program_status = models.CharField(max_length=10, choices=program_status_choices, default='active')
    facility = models.CharField(max_length=255, blank=True, null=True)
    ethnicity = models.CharField(max_length=100, blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient_id}: {self.first_name} {self.last_name} (Guardian: {self.guardian_name})"

class ProgressRecord(models.Model):
    patient = models.ForeignKey(Patient, related_name='progress_records', on_delete=models.CASCADE)
    date = models.DateField()
    weight = models.FloatField()  # in kilograms
    height = models.FloatField(blank=True, null=True)  # in cm
    muac = models.FloatField()  # Mid-Upper Arm Circumference in cm
    whz_score = models.FloatField(blank=True, null=True)  # Weight-for-Height Z-score
    health_status = models.TextField()

    # Treatment and Supplements
    therapeutic_food_provided = models.BooleanField(default=False)
    supplements = models.TextField(blank=True, null=True)

    # Lab and Follow-up Information
    lab_results = models.TextField(blank=True, null=True)
    follow_up_notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Progress for {self.patient.patient_id} on {self.date}"
