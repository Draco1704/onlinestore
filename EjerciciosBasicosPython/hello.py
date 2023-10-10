#print ("hola mundo")
#variables
nombre = "adrian"
apellido = "Rodriguez"
edad = 36
boleano = False

#if/else
if edad < 30:
    print ("aun eres joven, vete de viaje")
elif edad == 30:
    print ("ya estas grande, vete de viaje pero con medicamentos")
else:
    print ("ya entraste a la vejez, ya no salgas de tu casa")

#funciones
def di_hola():
    print ("Hola")

def despidete(nombre):
    print ("Nos vemos otro dia: "+ nombre)

#mandar llamar la funcion
di_hola()
despidete("Hope")

#algebra
print (1+3)
print (1-3)
print (1*3)

#listas
colores = ["rojo", "blanco", "azul", "verde"]
colores.append("rosa")
print(colores[0])

#ciclos
for color in colores:
    print(color)

#diccionarios
yo = {
    "nombre":"Adrian",
    "apellido":"Rodriguez",
    "edad":36,
}

print(yo["edad"])
yo["apellido"] = "Alejandre"
print(yo["nombre"])

print(yo)