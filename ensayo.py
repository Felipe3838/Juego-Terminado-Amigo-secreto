#Crear una función que muestre "¡Hola, mundo!" en la consola.

def saludar ():
    print("hola como estas")

saludar()

#Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

def saludar (nombre):
    print(f"hola {nombre}")

saludar("felipe")

#Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

def operacion (numero):
    doble = numero * 2
    print(f"el doble de {numero} es {doble}")

operacion(50)

#Crear una función que reciba tres números como parámetros y devuelva su promedio.


def promedio (numero1,numero2,numero3):
    mioperacion = (numero1 + numero2 + numero3)/3
    print(f"el promedio de {numero1},{numero2} y {numero3} es {mioperacion}")

promedio(25,55,30)    

#Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

def mayorDeDosNumeros (minumero1,minumero2,):
    if minumero1 > minumero2:
        print(f"el mayor de los números es {minumero1}")
    elif minumero1 < minumero2:
        print(f"el mayor de los números es {minumero2}")
    else:
        print(f"los números son iguales ")    

mayorDeDosNumeros(85,70)

# Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

def multiplicarNumero(elGranNumero):
    multiplicación = elGranNumero * elGranNumero
    print(f"la multiplicación para {elGranNumero} es { multiplicación}")

multiplicarNumero(80)   

# Crea una función que calcule el índice de masa corporal (IMC)de una persona a partir
 #de su altura en metros y peso en kilogramos,que se recibirán como parámetros.

def calculoMasaCorporal(peso,altura):
    indiceMasa = peso/(altura**2)
    return indiceMasa

resultado = calculoMasaCorporal(70,1.73)
print(f"el resultado para tu IMC es {resultado}")