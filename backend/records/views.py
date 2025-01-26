from rest_framework import generics
from .models import Patient, ProgressRecord
from .serializers import PatientSerializer, ProgressRecordSerializer

# Patient Views
class PatientListCreateView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

# Progress Record Views
class ProgressRecordListCreateView(generics.ListCreateAPIView):
    queryset = ProgressRecord.objects.all()
    serializer_class = ProgressRecordSerializer

class ProgressRecordRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProgressRecord.objects.all()
    serializer_class = ProgressRecordSerializer
