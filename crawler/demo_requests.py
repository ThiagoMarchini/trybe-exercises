import requests

# Requisição do tipo GET
print("Requisição do tipo GET")
response = requests.get("https://www.betrybe.com/")
print("Status code:\n")
print(response.status_code)  # código de status
print("Conteúdo HTML:\n")
print(response.headers["Content-Type"])  # conteúdo no formato html

# Conteúdo recebido da requisição
print("Conteúdo recebido:\n")
print(response.text)

# Bytes recebidos como resposta
print("Bytes da resposta:\n")
print(response.content)

# Requisição do tipo post
print("Requisição do tipo POST")
response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)

# Requisição enviando cabeçalho (header)
print("Requisição enviando cabeçalho (header)")
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

# Requisição a recurso binário
print("Requisição a recurso binário")
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# Recurso JSON
print("Recurso JSON")
response = requests.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response.json())

# Podemos também pedir que a resposta lance uma exceção caso o status não seja OK
print("Pedir que a resposta lance uma exceção caso o status não seja OK")
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()