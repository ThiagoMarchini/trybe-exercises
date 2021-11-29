def sum_ints(n):
  sum_ints = 0
  for i in range(1, n + 1):
    sum_ints += i
    
  return sum_ints

if __name__ == '__main__':
  print(sum_ints(5))