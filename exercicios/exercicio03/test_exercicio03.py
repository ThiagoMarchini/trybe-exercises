import pytest
from exercicio03 import validate

def test_username_can_contain_letters_and_digits():
    assert validate("a1993@nomewebsite.ext") is None
    
def test_username_can_contain_letters_digits_dashes_and_underscores():
  assert validate("a_a1a-a@nomewebsite.ext") is None
  
def test_username_must_start_with_letter():
  with pytest.raises(ValueError):
        validate("1@nomewebsite.ext")
        
def test_extension_must_have_3_characters_max():
  with pytest.raises(ValueError):
        validate("email@nomewebsite.extension")