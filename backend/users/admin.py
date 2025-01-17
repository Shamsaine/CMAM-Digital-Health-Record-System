import string
import random
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.core.mail import EmailMessage
from .models import CustomUser

def generate_password(length=8):
    """Generate a random password with the specified length."""
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ['username', 'email', 'phone_number', 'organization', 'is_staff']
    actions = ['create_user_with_generated_password']
    search_fields = ['username', 'email', 'phone_number', 'organization']
    ordering = ['username']
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email', 'phone_number', 'organization')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2'),
        }),
    )

    def save_model(self, request, obj, form, change):
        """Custom save method to handle user creation and email notification."""
        if not obj.pk:  # Only on creation
            # Generate a random password
            password = generate_password()
            obj.set_password(password)  # Hash and save the password

            # Save the user object before sending the email
            super().save_model(request, obj, form, change)

            # Attempt to send an email notification
            if obj.email:  # Check if email is provided
                try:
                    subject = "Welcome to the System"
                    message = (
                        f"Dear {obj.username},\n\n"
                        f"Your account has been created.\n"
                        f"Username: {obj.username}\n"
                        f"Password: {password}\n\n"
                        f"Please log in and change your password promptly.\n\n"
                        f"Best regards,\nYour Admin Team"
                    )
                    email = EmailMessage(subject, message, to=[obj.email])
                    email.send()
                except Exception as e:
                    # Handle email errors gracefully
                    self.message_user(
                        request,
                        f"User created, but email could not be sent. Error: {str(e)}",
                        level="error"
                    )
        else:
            # For updates, simply call the parent save method
            super().save_model(request, obj, form, change)
