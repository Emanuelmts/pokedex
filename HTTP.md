
requisição HTTP

URL: https://pokeapi.co/api/v2/pokemon
    ${IP}/${path = caminho de idenficação do recurso}

IP: https://pokeapi.co

Path: /api/v2/pokemon

Tipo de solicitação: GET | POST | PUT | DELETE | PATCH

https://pokeapi.co/api/v2/pokemon/${id} (Transferir dados pelo path ex:escolher pokemon)

Query string: Filtro que passo para a API
    começa depois do ponto de interrogação no endereço
    https://pokeapi.co/api/v2/pokemon/?type=grass&name=i

    https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
        paginação da busca, por exemplo
        offset (deslocamento, passagem de página)
        limit (quantidade)

Headers (Request e Response): configuração da requisição
    accept:
        text/html,
        application/xhtml+xml,
        application/xml;q=0.9,
        image/webp,
        image/apng,
        */*;q=0.8,
        application/signed-exchange;v=b3;q=0.9

    accept-language:
        pt-BR, (q= vazio === 1 [prioridade 100%])
        pt;q=0.9,
        en-US;q=0.8,
        en;q=0.7
                                                    q= (Prioridade)

    Authorization
        Basic,
        Bearer

Request headers
    content-type: application/json

Body {
    "name": "Teste"
}  (aqui podemos enviar dados mais robustos [geralmente com POST | PUT])

Devolução do servidor =>
STATUS CODE (O que aconteceu com a requisição) 200 = OK

Response Headers

Responde Body

**https://httpstatusdogs.com/**