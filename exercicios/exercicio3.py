import random

with open("./exercicios/wordslist.txt") as file:
  words_list = file.read().splitlines()
  print(words_list)
  
chosen_word = random.choice(words_list)
scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))

tries = 3

while tries > 0:
  print(f"Tente adivinhar: {scrambled_word}")
  input_word = input("Digite a sua resposta: ")
  if input_word == chosen_word:
    print("Parabéns, você acertou!")
    break
  else:
    tries -= 1
    
print(f"A palavra sorteada era: {chosen_word}")