// Função para criar um flashcard
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    // Função para virar o cartão e mostrar a resposta
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}

// Adicionando alguns flashcards
criaCartao(
    'História Mundial',
    'Qual foi a causa principal da Primeira Guerra Mundial?',
    'O assassinato do arquiduque Francisco Ferdinando foi um dos eventos mais significativos.'
);

criaCartao(
    'História do Brasil',
    'Quando ocorreu a Proclamação da República no Brasil?',
    'Foi em 15 de novembro de 1889.'
);

criaCartao(
    'História Geral',
    'Quem foi o imperador romano durante o colapso do Império Romano do Ocidente?',
    'O último imperador foi Rômulo Augusto, deposto em 476 d.C.'
);

criaCartao(
    'Antiga Grécia',
    'O que foi a Batalha de Maratona?',
    'Foi uma batalha entre gregos e persas em 490 a.C., onde os gregos venceram.'
);
