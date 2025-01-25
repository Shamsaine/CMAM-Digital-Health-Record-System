from django.shortcuts import render
from django.contrib.auth.models import Group
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from users.models import CustomUser
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .serializers import CustomUserSerializer
from .serializers import CustomTokenObtainPairSerializer


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


class PasswordResetRequestView(APIView):
    """
    API to request a password reset email.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({'error': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_link = f"http://127.0.0.1:3000/reset/{uid}/{token}/"  # Adjust frontend URL as needed

        # Send email
        send_mail(
            'Password Reset Request',
            f'Use the link below to reset your password:\n\n{reset_link}',
            settings.DEFAULT_FROM_EMAIL,  # Use the default from email from settings
            [user.email],
            fail_silently=False,
        )

        return Response({'message': 'Password reset link sent to your email.'}, status=status.HTTP_200_OK)


class PasswordResetConfirmView(APIView):
    """
    API to reset the password using the token and UID.
    """
    permission_classes = [AllowAny]

    def post(self, request, uidb64, token):
        password = request.data.get('password')
        if not password:
            return Response({'error': 'Password is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_id = urlsafe_base64_decode(uidb64).decode()
            user = CustomUser.objects.get(pk=user_id)
        except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
            return Response({'error': 'Invalid user.'}, status=status.HTTP_400_BAD_REQUEST)

        if not default_token_generator.check_token(user, token):
            return Response({'error': 'Invalid or expired token.'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(password)
        user.save()

        return Response({'message': 'Password has been reset successfully.'}, status=status.HTTP_200_OK)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class UserCreateView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # Send email
            send_mail(
                'Welcome to CMAM Records Manager',
                'Thank you for registering.',
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PatientsListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        patients = CustomUser.objects.all()
        serializer = CustomUserSerializer(patients, many=True)
        return Response(serializer.data)
