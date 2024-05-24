def tipo_de_triangulo(lado1, lado2, lado3):
    if lado1 == lado2 == lado3:
        return "Equilátero"
    elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
        return "Isósceles"
    else:
        return "Escaleno"

# Testando o algoritmo
print(tipo_de_triangulo(3, 3, 3))  # Deve retornar "Equilátero"
print(tipo_de_triangulo(3, 3, 2))  # Deve retornar "Isósceles"
print(tipo_de_triangulo(3, 4, 5))  # Deve retornar "Escaleno"
