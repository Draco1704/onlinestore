#definir una funcion que sea el menu
def imprime_menu():
    print ("-----------------------")
    print ("Presiona 1 para la suma")
    print ("Presiona 2 para la suma")
    print ("Presiona 3 para la suma")
    print ("-----------------------")

#mandar llamar logica
imprime_menu()
opc = input("Selecciona una operacion:")
num1 = float(input("Dame el primer numero"))
num2 = float(input("Dame el segundo numero"))

if opc == "1":
    total = num1 + num2
    print ("La suma de los numeros es: " + total)
elif opc == "2":
    total = num1 * num2
    print ("La multiplicacion de los numeros es: " + total)
elif opc == "3":
    total = num1 / num2
    print ("La division de los numeros es: " + str(total))
