# O nome de usuário deve conter somente letras, dígitos, traços e underscores ;
# O nome de usuário deve iniciar com letra;
# O nome do website deve conter somente letras e dígitos;

import re

def validate(email):
  username = email.split("@")[0]
  domain = email.split("@")[1].split(".")[0]
  extension = email.split("@")[1].split(".")[1]
  
  if (not re.match(r'^\S+@\S+.\S+$', email)):
    return("Invalid email format! Email format should be: email@domain.ext")
  
  if (not username[0].isalpha()):
    raise ValueError("Username should start with a letter")
  
  for letter in username:
    if ((not letter.isalnum()) and letter != "-" and letter != "_"):
      raise ValueError("Username should contain only letters, numbers, hiphens and underscores")
    
  for letter in domain:
    if (not letter.isalnum()):
      raise ValueError("Domain should be alphanumeric")
    
  if (len(extension) > 3):
    raise ValueError("Extension should have a maximum of 3 characters")