from django.urls import path
from .views import save_contact

urlpatterns = [
    path('', save_contact, name='save_contact'),
]
