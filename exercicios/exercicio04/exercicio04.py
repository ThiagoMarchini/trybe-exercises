import re

def validate(email):
  username = email.split("@")[0]
  domain = email.split("@")[1].split(".")[0]
  extension = email.split("@")[1].split(".")[1]
  
  if (not re.match(r'^\S+@\S+.\S+$', email)):
    return False
  
  if (not username[0].isalpha()):
    return False
  
  for letter in username:
    if ((not letter.isalnum()) and letter != "-" and letter != "_"):
      return False
    
  if (len(extension) > 3):
    return False
  
  for letter in domain:
    if (not letter.isalnum()):
      return False
    
  return True

def validate_email_list(list):
  response = []
  for email in list:
    if (validate(email)):
      response.append(email)
      
  return response