
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact
import json

@csrf_exempt
def save_contact(request):
    if request.method == "POST":
        data = json.loads(request.body)
        
        Contact.objects.create(
            name=data["name"],
            email=data["email"],
            message=data["message"]
        )
        return JsonResponse({"status": "success"})
    
    return JsonResponse({"error": "Invalid method"}, status=400)