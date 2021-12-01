import pytest
from exercicio04 import validate_email_list

def test_returns_only_valid_emails():
  assert validate_email_list( ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]) == ["nome@dominio.com", "outro@dominio.com"]
  
def test_if_no_list_is_passed_throws():
  with pytest.raises(TypeError):
    validate_email_list()
    
def test_if_doesnt_have_emails_returns_empty_list():
    assert validate_email_list([]) == []
    
def test_if_only_have_invalid_email_returns_empty_list():
  email = "2#$%@*.xablau"
  assert validate_email_list([email]) == []