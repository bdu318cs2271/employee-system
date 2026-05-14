from django.urls import path
from .views import (
    getEmployees,
    addEmployee,
    deleteEmployee,
    updateEmployee
)

urlpatterns = [
    path('employees/', getEmployees),
    path('add/', addEmployee),
    path('delete/<int:id>/', deleteEmployee),
    path('update/<int:id>/', updateEmployee),
]