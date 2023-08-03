Funcionalidade de Cadastro:

Como um novo usuário interessado em utilizar o serviço financeiro,
Eu quero me cadastrar no sistema fornecendo minhas informações pessoais,
Para que eu possa criar uma conta com sucesso, escolher se desejo criar a conta com saldo ou não, e obter o número da conta recém-criada.

    Cenário: Cadastro de conta bem-sucedido e exibição do número da conta criada
    Dado que o usuário preencheu todos os campos obrigatórios com informações válidas
    Quando o usuário clicar no botão "Registrar"
    Então a conta deve ser criada com sucesso
    E o sistema deve exibir o número da conta criada.

    Cenário: Criação de conta com saldo de R$ 1.000,00 ao ativar a opção "Criar conta com saldo"
    Dado que o usuário preencheu todos os campos obrigatórios com informações válidas
    E o usuário selecionou a opção "Criar conta com saldo"
    Quando o usuário clicar no botão "Registrar"
    Então a conta deve ser criada com sucesso com um saldo de R$ 1.000,00.

    Cenário: Criação de conta com saldo de R$ 0,00 ao deixar a opção "Criar conta com saldo" inativa
    Dado que o usuário preencheu todos os campos obrigatórios com informações válidas
    E o usuário não selecionou a opção "Criar conta com saldo"
    Quando o usuário clicar no botão "Registrar"
    Então a conta deve ser criada com sucesso com um saldo de R$ 0,00.

    Cenário: Mensagem de erro ao não preencher os campos de e-mail, senha e confirmação de senha
    Dado que o usuário não preencheu o campo de e-mail
    E o usuário não preencheu o campo de senha
    E o usuário não preencheu o campo de confirmação de senha
    Quando o usuário clicar no botão "Registrar"
    Então uma mensagem de erro deve ser exibida com a mensagem "Por favor, preencha todos os campos obrigatórios."

    Cenário: Mensagem de erro ao não preencher o campo de e-mail
    Dado que o usuário não preencheu o campo de e-mail
    Quando o usuário clicar no botão "Registrar"
    Então uma mensagem de erro deve ser exibida com a mensagem "Por favor, informe seu endereço de e-mail."

    Cenário: Mensagem de erro ao não preencher o campo de senha
    Dado que o usuário não preencheu o campo de senha
    Quando o usuário clicar no botão "Registrar"
    Então uma mensagem de erro deve ser exibida com a mensagem "Por favor, informe sua senha."

<----------------------------------------------------------------------------------------->
