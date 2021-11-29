def average(list):
  list_sum = 0
  for value in list:
    list_sum += value
  return list_sum / len(list)

if __name__ == '__main__':
  print(average((2,4,6)))