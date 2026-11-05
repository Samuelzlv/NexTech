NexTech — Assistência Técnica de Celular
Site estático de uma assistência técnica de celular, desenvolvido para a disciplina de Programação Web I (Engenharia de Software — UEPA, Campus XXIII, Parauapebas-PA), sob orientação da Profª Me. Jacqueline Teixeira.
Site publicado: https://samuelzlv.github.io/NexTech/ Repositório: https://github.com/Samuelzlv/NexTech
Descrição e objetivo
O site apresenta os serviços da assistência, as marcas atendidas, o endereço e o contato. Também oferece uma calculadora que estima o preço do reparo a partir da marca, da linha, do modelo e do defeito escolhidos.
O objetivo é aplicar o ciclo completo de uma aplicação web estática: planejar, implementar, validar, testar, otimizar, documentar e publicar.
Tecnologias utilizadas
HTML5 (marcação semântica)
CSS3 (layout responsivo)
JavaScript (interações e cálculo de preço)
Git e GitHub
GitHub Pages (hospedagem estática)
Como executar localmente
Clone o repositório: git clone https://github.com/Samuelzlv/NexTech.git
Abra a pasta do projeto.
Abra o arquivo index.html em um navegador. Não é necessário servidor nem instalação de dependências. (Ou então acesse diretamente pelo link do Github pages.)

Também é possível acessar diretamente pelo GitHub Pages: https://samuelzlv.github.io/NexTech/
Estrutura dos arquivos
NexTech/
├── index.html          Estrutura da página
├── style.css           Estilos e responsividade
├── script.js           Seleção de marca/modelo/defeito e cálculo de preço
├── logo-nextech.jpeg   Logotipo
└── README.md           Documentação
Funcionalidades implementadas
Apresentação dos serviços e das marcas atendidas.
Seleção de marca, linha (quando a marca tem mais de uma), modelo e defeito, com campos que permitem digitar ou escolher.
Cálculo e exibição da estimativa de preço do reparo.
Botão de contato por telefone/WhatsApp.
Endereço da loja.

Melhorias de desempenho e acessibilidade realizadas
Atributo defer no carregamento do script, para não bloquear a renderização da página.
Elemento <main> delimitando o conteúdo principal.
Região aria-live para que o resultado do cálculo seja anunciado por leitores de tela.
Texto alternativo descritivo na logo.
Testes realizados
Teste
Procedimento
Resultado esperado
Resultado obtido
T01
Abrir a página inicial
O site é exibido corretamente
Sucesso
T02
Escolher marca, modelo e defeito e calcular
O preço estimado aparece
Sucesso
T03
Calcular sem preencher os campos
Mensagem orientando o preenchimento
Sucesso
T04
Abrir em tela estreita (celular)
O layout se adapta à largura
Sucesso
T05
Navegar usando o teclado (Tab)
Campos e botões recebem foco
Sucesso
T06
Abrir o endereço publicado em outro dispositivo
O site carrega com todos os recursos
Sucesso

Integrantes
Samuel Silas Pedroso Silva
Yan Fauzi
Arthur Campos Miranda

