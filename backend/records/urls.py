from django.urls import path
from .views import (
    PatientListCreateView,
    PatientRetrieveUpdateDestroyView,
    ProgressRecordListCreateView,
    ProgressRecordRetrieveUpdateDestroyView
)

urlpatterns = [
    path('patients/', PatientListCreateView.as_view(), name='patient_list_create'),
    path('patients/<int:pk>/', PatientRetrieveUpdateDestroyView.as_view(), name='patient_detail'),
    path('progress-records/', ProgressRecordListCreateView.as_view(), name='progress_record_list_create'),
    path('progress-records/<int:pk>/', ProgressRecordRetrieveUpdateDestroyView.as_view(), name='progress_record_detail'),
]
