# GamaChallenge

<h1 align='center'>
  <img src='https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy-p-500.png'>
</h1>
<h1>GIF</h1>
![Alt text](https://)
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

# Sobre
<p>
  Teste encaminhado pela  Gama Academy para a vaga de Frontend Developer Junior. A proposta da aplicação é que o usuário possa realizar cadastro de provas contendo a seguinte estrutura:
</p>
<h3> Para cada prova:</h3>
<ul>
  <li>Título</li>
  <li>Descrição</li>
  <li>Alternativas:</li>
</ul>
<p>
  A intenção é que ao término do preenchimento o usuário consiga fazer um POST da prova cadastrada-a no banco de dados, e posteriormente consiga visualizar a prova listada, podendo responder as alternativas disponiveis, e recebendo um retorno com indicação da da correta.
</p>

# Tecnologias: 
<ul>
  <li>React JS</li>
  <li>Javascript</li>
</ul>

# Passo a Passo


  Para que seja possivel rodar a aplicação descrita, segue abaixo alguns passos simples, porém necessários:

  Clonar esse projeto através do comando: 

  ```bash 
  #Clonar o repositório com link https

  git clone "https..."
  
  #Mudar de diretório, entrando no diretório correto
  $ cd gamaChallenge

   #Comando para instalar gerenciador de pacotes
  npm install

  #Comando para rodar a aplicação
  npm start
  ```

  Em uma aba distinta do terminal, rodar o comando 

  ```bash 
  #Comando para rodar o json-server, responsável por simular a API consumida pelo Front

  npx json-server -p 3002 https://gist.githubusercontent.com/rferro/0b07663deae6a4a4d35170682a8b1fa3/raw/fc8168d1ccbb9f7e6c280de4d4fcaa0c19c3e6a0/db.json
  ```


  No navegador acessar: http://localhost:3000; 

  **Observação: As duas rotas locais devem rodar em portas distintas;**
</p>

# Simulações dos Métodos e funcionalidades: 

<p>Através do método GET estará disponível as funcionalidades: </p>
<ul>
  <li>Consultar provas cadastradas</li>
  <li>Verificar alternativa correta</li>
</ul>

<p>Através do método POST estará disponível as funcionalidades: </p>
<ul>
  <li>Cadastrar novas provas</li>
  <li>Cadastrar uma questão relacionada a prova descrita e 3 alternativas</li>
  <li>Relacionar alternativa correta para envio</li>
</ul>

---
Desenvolvido por Alexia Passos