from django.urls import path
from .views import CustomTokenObtainPairView, UserProfileView, PasswordResetRequestView, PasswordResetConfirmView

app_name = 'users'  # Namespace for the app

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password_reset_request'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
]
