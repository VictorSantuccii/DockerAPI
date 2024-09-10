## Baixa a imagem do Node com uma versão LTS 
## Versão Alpine = Versão simplificada do Node
FROM node:alpine  

## Define o local que o app vai ficar no disco do container 
## Pode ser qualquer diretório 
WORKDIR /usr/app

## Copia tudo que começa com package e termina com .json 
COPY package*.json ./

## Executa no npm install para adicionar as dependências 
RUN npm install

## Copia tudo que está no diretório onde o arquivo dockerfile está localizado
## Para dentro da pasta do container criada anteriormente ./usr/app
COPY . .

## Container ficará ouvindo os acessos na porta 5000
EXPOSE 5000

## Executa o comando npm start para iniciar o nosso projeto, rodando o script que está no package.json
CMD npm start