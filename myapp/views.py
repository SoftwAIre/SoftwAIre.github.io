from rest_framework import viewsets
from .models import Message
from .serializers import MessageSerializer
from django.http import HttpResponse

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

def home(request):
    return HttpResponse("Welcome to the Home Page!")