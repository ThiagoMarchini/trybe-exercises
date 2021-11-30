sum = 0
error = False

values = input("Digite todos os valores separados por espaços: ")
numbers_array = values.split(" ")
for number in numbers_array:
  if number.isdigit():
    sum += int(number)
  else:
    print(f"Erro ao somar valores, {number} é um valor inválido")
    error = True
    break
  
if error == False:
  print(sum)