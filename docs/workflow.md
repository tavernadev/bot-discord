# Workflow

-   Qualquer um Pega uma atividade do Backlog e move para Working e se auto atribui a ela como responsável.
-   Na finalização da Atividade o responsável move para QA para que outro membro teste
-   QA
    -   O Responsável por desenvolver a Atividade não pode realizar QA da mesma
    -   Qualquer Pessoa pode testar a atividade, Incluir Etiqueta de Testing, para que outra pessoa não teste em redundancia
    -   Caso a Atividade não contenha erros, remover a etiqueta Testing e adicionar a etiqueta QA Approved e mover a atividade para Staging
    -   Caso a Atividade Esteja com Erro
        -   Se o Erro for da propria atividade, retorna para a coluna anterior com Prioridade Maxima
        -   Se o Erro for não relacionado especificamente com a ativade em si, a atividade fica IMPEDIDA em QA e uma nova atividade eh criada com prioridade maxima para corrigir o error

## Git

-   gitflow
    -   Sempre Manter as Branches MAIN e DEVELOPMENT Atualizadas: git pull
    -   Todo Código a ser mergeado deve conter uma atividade relacionado
    -   Novas Atividades: Criar Uma branch a partir da DEVELOPMENT ATUALIZADA com TIPO-NUMERO da atividade ex: **git checkout -b feat-1**
    -   No término da atividade abrir pull request para a branch development com o \[tipo-nro da atividade] - Nome da Atividade ex: \[feat-1] - definir workflow
    -   Todo commit deve ser descritivo (escopo: descricao) com o que esta sendo feito ex: chore: ajustado CI para rodar node_modules em CACHE

## Cliclo de Trabalho: Weekly

-   Planning/Review: Seg 11am - Reunião Presencial(Discord) para Definir o que vai ser entregue no final do sprint e avaliar o que foi feito e sugerir melhorias/criticas
-   Daily (texto): Informar de forma Assincrona o Status Diário das Atividades

### Dicionario

-   Papeis
    -   PO (Product Owner): Organizar Backlog, Homologar Staging e definir atividades (SAULO)
    -   Dev: Desenvolver as atividades (TODOS)
    -   DevOps: Configuração Infra Estrutura e Arquitetura (SAULO)
-   Colunas
    -   Backlog: Todas as atividades A FAZER ordenadas por PRIORIDADE
    -   Working: Todas as atividades em EXECUÇÃO atribuídas aos seus respectivos responsáveis
    -   QA: Todas as Atividades a serem TESTADAS. Atividades em TESTE possuem etiqueta "Testing"
    -   Staging: Todas as Atividades que passaram nos testes de QA e foram deployadas xD no servidor de staging
    -   Done: Todas as Atividades que passaram por todo o fluxo sem erros e já subiram em produção

### Fontes

-   Scrum: <https://www.scrumguides.org/docs/scrumguide/v1/Scrum-Guide-Portuguese-BR.pdf>
