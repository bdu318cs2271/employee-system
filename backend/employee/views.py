from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Employee
from .serializers import EmployeeSerializer


@api_view(['GET'])
def getEmployees(request):

    employees = Employee.objects.all()

    serializer = EmployeeSerializer(employees, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def addEmployee(request):

    print(request.data)

    serializer = EmployeeSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response(serializer.data)

    print(serializer.errors)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


@api_view(['DELETE'])
def deleteEmployee(request, id):

    try:

        emp = Employee.objects.get(id=id)
        emp.delete()

        return Response({"message": "Deleted Successfully"})

    except Employee.DoesNotExist:

        return Response({"error": "Not found"}, status=404)


@api_view(['PUT'])
def updateEmployee(request, id):

    try:

        employee = Employee.objects.get(id=id)

    except Employee.DoesNotExist:

        return Response(
            {"error": "Employee not found"},
            status=404
        )

    serializer = EmployeeSerializer(
        employee,
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response(serializer.data)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )