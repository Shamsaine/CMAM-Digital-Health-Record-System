from django.urls import path
from .views import CustomTokenObtainPairView, UserProfileView, PasswordResetRequestView, PasswordResetConfirmView, UserCreateView, PatientsListView

app_name = 'users'  # Namespace for the app

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password_reset_request'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('create/', UserCreateView.as_view(), name='user_create'),
    path('patients/', PatientsListView.as_view(), name='patients_list'),
]
