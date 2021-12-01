from exercicio01 import fizz_buzz
import pytest

def test_returns_one_two_fizz_when_param_is_four():
  'Para o input 4 deve retornar [1, 2, "Fizz"]'
  assert fizz_buzz(4) == [1, 2, "Fizz"]
  
def test_returns_one_two_fizz_when_param_is_six():
  'Para o input 4 deve retornar [1, 2, "Fizz", 4, "Buzz"]'
  assert fizz_buzz(6) == [1, 2, "Fizz", 4, "Buzz"]
  
def test_returns_empty_list_when_param_is_zero():
  'Para o parametro zero deve retornar []'
  assert fizz_buzz(0) == []
  
def test_throws_when_no_argument_is_passed():
  'Sem parâmetro deve retornar erro'
  with pytest.raises(TypeError):
    fizz_buzz()