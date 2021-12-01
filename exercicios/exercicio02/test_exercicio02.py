from exercicio02 import translate
import pytest

def test_returns_1_4663_79338_4663_when_input_1_HOME_SWEET_HOME():
  'Para o input 1-HOME-SWEET-HOME deve retornar 1-4663-79338-4663'
  assert translate("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
  
def test_returns_69_647372253_562_when_input_MY_MISERABLE_JOB():
  'Para o input MY-MISERABLE-JOB deve retornar 69-647372253-562'
  assert translate("MY-MISERABLE-JOB") == "69-647372253-562"
  
def test_throws_when_no_argument_is_passed():
  'Sem parâmetro deve retornar erro'
  with pytest.raises(TypeError):
    translate()
    
def test_returns_warning_if_there_is_an_invalid_character():
  'Retorna uma mensagem quando há um caractere inválido.'
  assert translate("AJHDFGS-ODAHSA-2-AVGJHAS-8") == "Caractere inválido encontrado!"