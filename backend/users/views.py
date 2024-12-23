from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UserProfileView(APIView):
    """
    API to get the authenticated user's profile and roles.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        roles = [group.name for group in user.groups.all()]
        return Response({
            'username': user.username,
            'email': user.email,
            'roles': roles,
        })
