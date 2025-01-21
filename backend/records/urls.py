from django.urls import path
from .views import (
    PatientListCreateView,
    PatientRetrieveUpdateDestroyView,
    ProgressRecordListCreateView,
    ProgressRecordRetrieveUpdateDestroyView,
)

urlpatterns = [
    # Patient Endpoints
    path('patients/', PatientListCreateView.as_view(), name='patient_list_create'),
    path('patients/<uuid:pk>/', PatientRetrieveUpdateDestroyView.as_view(), name='patient_detail'),
    
    # Progress Record Endpoints
    path('progress-records/', ProgressRecordListCreateView.as_view(), name='progress_record_list_create'),
    path('progress-records/<int:pk>/', ProgressRecordRetrieveUpdateDestroyView.as_view(), name='progress_record_detail'),
]
