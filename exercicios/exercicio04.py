def return_longest(list):
  longest = list[0]
  for item in list:
    if len(item) > len(longest):
      longest = item
    
  return longest

if __name__ == '__main__':
  print(return_longest(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))