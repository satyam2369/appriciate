from django.urls import path
from . import views

urlpatterns = [
    path('faqs/', views.get_faqs, name='faqs'),
    path('faqs/<int:pk>/', views.get_faq, name='faq'),
    path('faqs/create/', views.create_faq, name='create-faq'),
    path('faqs/<int:pk>/update/', views.update_faq, name='update-faq'),
    path('faqs/<int:pk>/delete/', views.delete_faq, name='delete-faq'),
]
