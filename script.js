const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você saiu da casa dos seus pais?",
        alternativas: [
            {
                texto: "Sim, fui morar sozinho.",
                afirmacao: "Você conquistou sua independência e aprendeu a se virar por conta própria."
            },
            {
                texto: "Não, continuei morando com eles.",
                afirmacao: "Você aproveitou mais tempo com a família e economizou bastante dinheiro."
            }
        ]
    },
    {
        enunciado: "Você conseguiu o seu primeiro emprego?",
        alternativas: [
            {
                texto: "Sim, comecei a trabalhar cedo.",
                afirmacao: "Você ganhou experiência e cresceu rapidamente na carreira."
            },
            {
                texto: "Não, preferi esperar mais um pouco.",
                afirmacao: "Você aproveitou esse tempo para estudar e se preparar melhor."
            }
        ]
    },
    {
        enunciado: "Você decidiu fazer faculdade?",
        alternativas: [
            {
                texto: "Sim, entrei para a faculdade.",
                afirmacao: "Você se formou e abriu várias portas profissionais."
            },
            {
                texto: "Não, preferi trabalhar direto.",
                afirmacao: "Você entrou cedo no mercado de trabalho e construiu sua carreira com prática."
            }
        ]
    },
    {
        enunciado: "Você começou um relacionamento sério?",
        alternativas: [
            {
                texto: "Sim, encontrei alguém especial.",
                afirmacao: "Vocês viveram momentos incríveis juntos e construíram uma vida feliz."
            },
            {
                texto: "Não, preferi ficar solteiro.",
                afirmacao: "Você aproveitou sua liberdade e focou nos seus objetivos pessoais."
            }
        ]
    },
    {
        enunciado: "Você comprou sua própria casa?",
        alternativas: [
            {
                texto: "Sim, conquistei meu lar.",
                afirmacao: "Você teve estabilidade e um lugar para chamar de seu."
            },
            {
                texto: "Não, continuei alugando.",
                afirmacao: "Você manteve flexibilidade para mudar sempre que quis."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal + "\n\nHistória criada por Carlos Henrique e Victor Hugo.";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
