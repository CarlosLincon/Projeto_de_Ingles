const pergunta_p = document.querySelector("#pergunta_p");
const resposta_div = document.querySelectorAll(".resposta_div");
const proxima_pergunta = document.querySelector(".proxima_pergunta");
const pontos_div = document.querySelector(".proxima_pergunta");
const pontosP = document.querySelector(".pontos_div");
const modal = document.querySelector(".modal");
const modal_img = document.querySelector("#modal_img");
const btClose = document.querySelector("#bt_close");
const span = document.querySelector("#span");
const span2 = document.querySelector("#span2");
let respotaClick = 0;
let respondeu;
let pontos = 0;

pontosP.textContent = pontos;
span.textContent = 1;
const perguntas = [
  {
    pergunta: "Brainstorming - o que é?",
    respostas: [
      "a - Pensar em um ambiente controlado",
      "b - Desenhar esboços de ideas",
      "c - Ter um ambiente livre pra pensar em muitas ideas",
      "d - Resolver um projeto de forma direta",
    ],
    id: 3,
  },

  {
    pergunta: "Prediction é uma técnica de:",
    respostas: ["A: Comunicação", "B: leitura", "C: Fala", "D: Escrita"],
    id: 2,
  },
  {
    pergunta: "O que se é mais buscado em um Brainstorming?",
    respostas: [
      "A: Qualidade ",
      "B: Quantidade",
      "C: Complexidade",
      "D: Comunicação",
    ],
    id: 4,
  },
  {
    pergunta: "Ideias ineficientes em um brainstorming são:",
    respostas: [
      "A: Descartadas",
      "B: Sempre Utilizadas",
      "C: Reelaboradas",
      "D: Filtradas",
    ],
    id: 3,
  },
  {
    pergunta: "Brainstorming é feito:",
    respostas: [
      "A: Individualmente",
      "B: Grupos",
      "C: Com grupos grandes",
      "D: B e C estão certas",
    ],
    id: 4,
  },
  {
    pergunta:
      "Prediction pode ser utilizada se utilizando um conhecimento prévio , conhecido como:",
    respostas: [
      "A: back Knowledge ",
      "B: Before Knowledge",
      "C: Background Knowledge",
      "D: Perception",
    ],
    id: 3,
  },
  {
    pergunta: "O brainstorming leva em consideração:",
    respostas: [
      "A: Visões diferentes ",
      "B: Perspectivas Iguais",
      "C: Visões semelhantes",
      "D: Conhecimento complexo sobre o tema",
    ],
    id: 1,
  },
  {
    pergunta:
      "Qual o nome da técnica de leitura que se utiliza de um conhecimento prévio?",
    respostas: [
      "A: Selection ",
      "B: Confirmation",
      "C: Correction",
      "D: Prediction",
    ],
    id: 4,
  },
  {
    pergunta: "Qual o último passo em uma estrutura de brainstorming?",
    respostas: [
      "A: Geração de ideias ",
      "B: Encontrar a solução",
      "C: Encontrar fatos",
      "D: Filtrar dados",
    ],
    id: 2,
  },
  {
    pergunta: "Marque a alternativa pra qual o brainstorming não é utilizado:",
    respostas: [
      "A: Gestão de projetos ",
      "B: Liderança",
      "C: Formação de Equipes",
      "D: Publicidade",
    ],
    id: 2,
  },
];

span2.textContent = perguntas.length;
proxima_pergunta.addEventListener("click", () => {
  if (respondeu) {
    respotaClick++;
    if (respotaClick == perguntas.length) {
      respotaClick = 0;
      span.textContent = 1;
      pontos = 0;
      pontosP.textContent = pontos;
      divclass();
      criação();
    } else {
      console.log(respotaClick)
      span.textContent = respotaClick + 1;
      divclass();
      criação();
    }
  } else {
    alert("Antes de continuamos, por favor responda primeiro");
  }
  console.log(respotaClick);
});
for (x = 0; x < resposta_div.length; x++) {
  resposta_div[x].addEventListener("click", (e) => {
    let atr = e.target;
    let i = 1;
    let atrResposta = atr.dataset.indexNumber;
    if (atrResposta == perguntas[respotaClick].id) {
      for (let x = 0; x < resposta_div.length; x++) {
        if (i == perguntas[respotaClick].id) {
          resposta_div[x].classList.add("certo");
          if (respondeu == false) {
            gif(1);
            pontos = pontos + 10;
            pontosP.textContent = pontos;
          }
        } else {
          if (resposta_div[x].classList == "certo") {
          } else {
            resposta_div[x].classList.add("errado");
          }
        }
        console.log(i);
        i++;
      }
    } else {
      for (let x = 0; x < resposta_div.length; x++) {
        if (i == perguntas[respotaClick].id) {
          resposta_div[x].classList.add("certo");
        } else {
          if (resposta_div[x].classList == "certo") {
          } else {
            resposta_div[x].classList.add("errado");
            if (respondeu == false) {
              gif(2);
              pontos = pontos - 10;
            }
            if (pontos < 0) {
              pontos = 0;
            }
            pontosP.textContent = pontos;
          }
        }
        console.log(i);
        i++;
      }
    }
    respondeu = true;
  });
}

function divclass() {
  for (x = 0; x < resposta_div.length; x++) {
    resposta_div[x].classList.remove("certo");
    resposta_div[x].classList.remove("errado");
  }
}

function criação() {
  respondeu = false;
  pergunta_p.textContent = perguntas[respotaClick].pergunta;

  for (x = 0; x < resposta_div.length; x++) {
    resposta_div[x].textContent = perguntas[respotaClick].respostas[x];
  }
}

criação();

function gif(type) {
  let i = getRandomIntInclusive(1, 3);
  if (type == 1) {
    modal_img.setAttribute("src", `./gifs/a${i}.gif`);
  } else {
    modal_img.setAttribute("src", `./gifs/e${i}.gif`);
  }
  modal.classList.toggle("modal_active");
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
btClose.addEventListener("click", function () {
  modal.classList.toggle("modal_active");
});
