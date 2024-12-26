from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Patient, ProgressRecord
from .serializers import PatientSerializer, ProgressRecordSerializer
from rest_framework.permissions import IsAuthenticated

class PatientListCreateView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]

class PatientRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]

class ProgressRecordListCreateView(generics.ListCreateAPIView):
    queryset = ProgressRecord.objects.all()
    serializer_class = ProgressRecordSerializer
    permission_classes = [IsAuthenticated]

class ProgressRecordRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProgressRecord.objects.all()
    serializer_class = ProgressRecordSerializer
    permission_classes = [IsAuthenticated]
