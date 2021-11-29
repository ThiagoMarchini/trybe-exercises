def make_triangle(size):
  output = ''
  for i in range(1, size + 1):
    output += "*" * i + "\n"
    
  return output

if __name__ == '__main__':
  print(make_triangle(5))