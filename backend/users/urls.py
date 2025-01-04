from django.urls import path, include
from .views import UserProfileView

app_name = 'users'  # Namespace for the app
urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='profile'),
]
