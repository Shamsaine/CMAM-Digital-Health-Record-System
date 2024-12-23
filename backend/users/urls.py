from django.urls import path, include

urlpatterns = [
    # Include Django Allauth URLs for account management
    path('accounts/', include('allauth.urls')),
    path('profile/', UserProfileView.as_view(), name='user_profile'),  # Custom route for profile
]
