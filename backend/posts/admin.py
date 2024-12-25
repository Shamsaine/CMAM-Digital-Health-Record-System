from django.contrib import admin

# Register your models here.
from .models import Post

from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created_at', 'updated_at']
    search_fields = ['title', 'content']
    list_filter = ['created_at', 'updated_at']