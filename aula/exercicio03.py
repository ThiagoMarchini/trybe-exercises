with open("./aula/grades.txt", "r") as file:
  grades = file.read()
  lines = grades.split("\n")
  with open("./aula/reproved.txt", "w") as reproved:
    for line in lines:
      alumni = line.split(" ")
      if int(alumni[1]) < 6:
        reproved.write(alumni[0] + "\n")