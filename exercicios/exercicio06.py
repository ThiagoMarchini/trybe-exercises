def triangle_type(l1, l2, l3):
  check = (
    l1 + l2 > l3 and
    l2 + l3 > l1 and
    l1 + l3 > l2
  )
  if not check:
    return "Não é um triângulo"
  elif l1 == l2 == l3:
    return "Triângulo equilátero"
  elif l1 == l2 or l2 == l3 or l1 == l3:
    return "Triângulo isósceles"
  else:
    return "Triângulo escaleno"
  
if __name__ == '__main__':
  print(triangle_type(3, 4, 5))