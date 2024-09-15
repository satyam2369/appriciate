from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FAQ
from .serializers import FAQSerializer

@api_view(['GET'])
def get_faqs(request):
    faqs = FAQ.objects.all()
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_faq(request, pk):
    faq = FAQ.objects.get(id=pk)
    serializer = FAQSerializer(faq, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_faq(request):
    serializer = FAQSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def update_faq(request, pk):
    faq = FAQ.objects.get(id=pk)
    serializer = FAQSerializer(instance=faq, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_faq(request, pk):
    faq = FAQ.objects.get(id=pk)
    faq.delete()
    return Response('FAQ deleted successfully')
