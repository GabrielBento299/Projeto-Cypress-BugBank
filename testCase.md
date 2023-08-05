Funcionalidade de Extrato:

Como um cliente do banco BugBank, 
Quero verificar o saldo disponível na minha conta, ver os detalhes de todas as transações, 
Para que eu possa acompanhar meus gastos e verificar todas as movimentações na minha conta.
    
      Cenário: Exibir saldo disponível no momento
      Dado que estou logado na minha conta bancária
      Quando acesso a funcionalidade de extrato
      Então devo ver o saldo disponível no momento
      
      Cenário: Exibir "-" quando a transação for sem comentário
      Dado que tenho uma transação sem comentário na minha conta bancária
      Quando acesso a funcionalidade de extrato
      Então devo ver "-" como comentário dessa transação
      
      Cenário: Exibir detalhes de transação
      Dado que tenho transações na minha conta bancária
      Quando acesso a funcionalidade de extrato
      Então devo ver a data, tipo de transação e valor de cada transação listada

<----------------------------------------------------------------------------------------->


Funcionalidade de Login:

Como um cliente do banco BugBank, 
Quero poder fazer login (autenticação),  
para garantir a segurança do meu acesso e receber feedback claro em caso de erros.

    Cenário: Login com sucesso e redirecionar para Home Page
    Dado que estou na página de login
    Quando preencho o campo de e-mail e senha corretamente
    Então devo ser redirecionado para a Home Page
    
    Cenário: Exibir mensagem de erro para usuários inválidos ou não cadastrados
    Dado que estou na página de login
    Quando preencho o campo de e-mail e senha com dados inválidos
    Então devo ver uma mensagem de erro informando que as credenciais são inválidas
    
    Cenário: Exibir mensagem de erro ao não preencher o campo de e-mail
    Dado que estou na página de login
    Quando deixo o campo de e-mail em branco
    E preencho o campo de senha corretamente
    Então devo ver uma mensagem de erro informando que o campo de e-mail é obrigatório
    
    Cenário: Exibir mensagem de erro ao não preencher o campo de senha
    Dado que estou na página de login
    Quando preencho o campo de e-mail corretamente
    E deixo o campo de senha em branco
    Então devo ver uma mensagem de erro informando que o campo de senha é obrigatório

<----------------------------------------------------------------------------------------->


Funcionalidade de Cadastro: 

Como um novo cliente do banco BugBank, 
Quero me cadastrar no sistema, receber uma conta com um número exclusivo e opções para criar a conta com um saldo inicial de R$ 1.000,00 ou R$ 0,00,
Para que eu possa criar uma conta personalizada com facilidade e segurança.

    Cenário: Cadastrar conta com sucesso e exibir número da conta criada
    Dado que estou na página de cadastro
    Quando preencho todos os campos obrigatórios corretamente, incluindo o e-mail, senha e confirmação de senha
    Então devo ver uma mensagem de sucesso informando que a conta foi criada
    E devo ver o número da conta recém-criada exibido
    
    Cenário: Criar conta com saldo de R$ 1.000,00 ao ativar a opção "Criar conta com saldo"
    Dado que estou na página de cadastro
    Quando preencho todos os campos obrigatórios corretamente, incluindo o e-mail, senha e confirmação de senha
    E ativo a opção "Criar conta com saldo"
    Então devo ver uma mensagem de sucesso informando que a conta foi criada
    E devo ver o número da conta recém-criada exibido
    E devo ver o saldo da conta igual a R$ 1.000,00
    
    Cenário: Criar conta com saldo de R$ 0,00 ao deixar a opção "Criar conta com saldo" inativa
    Dado que estou na página de cadastro
    Quando preencho todos os campos obrigatórios corretamente, incluindo o e-mail, senha e confirmação de senha
    E deixo a opção "Criar conta com saldo" inativa
    Então devo ver uma mensagem de sucesso informando que a conta foi criada
    E devo ver o número da conta recém-criada exibido
    E devo ver o saldo da conta igual a R$ 0,00
    
    Cenário: Exibir mensagem de erro ao não preencher o campo de e-mail, senha e confirmação de senha
    Dado que estou na página de cadastro
    Quando deixo os campos de e-mail, senha e confirmação de senha em branco
    Então devo ver mensagens de erro informando que os campos são obrigatórios
    
    Cenário: Exibir mensagem de erro ao não preencher o campo de e-mail
    Dado que estou na página de cadastro
    Quando deixo o campo de e-mail em branco
    E preencho corretamente os campos de senha e confirmação de senha
    Então devo ver uma mensagem de erro informando que o campo de e-mail é obrigatório
    
    Cenário: Exibir mensagem de erro ao não preencher o campo de senha
    Dado que estou na página de cadastro
    Quando preencho corretamente o campo de e-mail
    E deixo o campo de senha em branco
    Então devo ver uma mensagem de erro informando que o campo de senha é obrigatório

<----------------------------------------------------------------------------------------->


Funcionalidade de Transfêrencia

Como um cliente do banco BugBank, 
Quero poder transferir dinheiro da minha conta para outra conta bancária, 
Para poder enviar dinheiro a amigos ou familiares, fazer pagamentos ou efetuar outras transações financeiras.

    Cenário: Transferência com sucesso quando o saldo é igual ou maior que o valor para transferir
    Dado que estou logado na minha conta bancária
    E tenho um saldo maior ou igual ao valor que desejo transferir
    Quando acesso a funcionalidade de transferência
    E preencho corretamente os campos de conta de destino e valor a ser transferido
    Então devo ver uma mensagem de sucesso informando que a transferência foi realizada
    E meu saldo deve ser atualizado com o valor transferido debitado
    
    Cenário: Exibir mensagem de erro ao fazer uma transferência para conta inválida ou inexistente
    Dado que estou logado na minha conta bancária
    Quando acesso a funcionalidade de transferência
    E preencho o campo de conta de destino com um número de conta inválido ou inexistente
    E preencho corretamente o campo de valor a ser transferido
    Então devo ver uma mensagem de erro informando que a conta de destino é inválida
    
    Cenário: Exibir mensagem de erro ao fazer uma transferência com valor igual a 0 ou menor
    Dado que estou logado na minha conta bancária
    Quando acesso a funcionalidade de transferência
    E preencho corretamente os campos de conta de destino e valor a ser transferido
     E preencho corretamente os campos de conta de destino e valor a ser transfer
