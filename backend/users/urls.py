from django.urls import path, include

urlpatterns = [
    # Include Django Allauth URLs for account management
    path('accounts/', include('allauth.urls')),
    path('profile/', UserProfileView.as_view(), name='users'),  # Custom route for profile
]
