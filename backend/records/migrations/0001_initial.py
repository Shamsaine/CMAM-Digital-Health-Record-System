# Generated by Django 5.1.4 on 2025-01-04 21:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patient_id', models.CharField(max_length=50, unique=True)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('date_of_birth', models.DateField()),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('address', models.TextField(blank=True, null=True)),
                ('guardian_name', models.CharField(max_length=255)),
                ('guardian_phone', models.CharField(max_length=15)),
                ('guardian_relationship', models.CharField(max_length=100)),
                ('emergency_contact_name', models.CharField(blank=True, max_length=255, null=True)),
                ('emergency_contact_phone', models.CharField(blank=True, max_length=15, null=True)),
                ('enrollment_date', models.DateField()),
                ('program_status', models.CharField(choices=[('active', 'Active'), ('discharged', 'Discharged'), ('graduated', 'Graduated')], default='active', max_length=10)),
                ('facility', models.CharField(blank=True, max_length=255, null=True)),
                ('ethnicity', models.CharField(blank=True, max_length=100, null=True)),
                ('nationality', models.CharField(blank=True, max_length=100, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProgressRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('weight', models.FloatField()),
                ('height', models.FloatField(blank=True, null=True)),
                ('muac', models.FloatField()),
                ('whz_score', models.FloatField(blank=True, null=True)),
                ('health_status', models.TextField()),
                ('therapeutic_food_provided', models.BooleanField(default=False)),
                ('supplements', models.TextField(blank=True, null=True)),
                ('lab_results', models.TextField(blank=True, null=True)),
                ('follow_up_notes', models.TextField(blank=True, null=True)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='progress_records', to='records.patient')),
            ],
        ),
    ]
