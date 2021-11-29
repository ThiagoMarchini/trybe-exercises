def cost(liters, type):
  price = 0
  if type == 'A':
    if liters < 20:
      price = 1.9 * liters * 0.97
    else:
      price = 1.9 * liters * 0.95
  else:
    if liters < 20:
      price = 2.50 * liters * 0.96
    else:
      price = 2.50 * liters * 0.94
  
  return price

if __name__ == '__main__':
  print(cost(20, 'G'))