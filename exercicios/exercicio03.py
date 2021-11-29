def print_square(n):
  line = (n * '*') + '\n'
  square = line * n
  return square

if __name__ == '__main__':
  print(print_square(4))