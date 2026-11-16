// WhatsApp do Anderson (formato 55 + DDD + número). Número provisório: troque aqui e nos links wa.me do index.html.
const WA_NUMBER = "5512900000000";
const DEFAULT_MSG = "Olá, Anderson! Vim pelo site e gostaria de um orçamento.";
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const hasIO = "IntersectionObserver" in window;

document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waLink(a.dataset.wa || DEFAULT_MSG);
  a.target = "_blank";
  a.rel = "noopener";
});

// Navbar transparente sobre o hero; fundo branco depois dele
const header = document.querySelector("[data-header]");
const hero = document.getElementById("inicio");
if (header && hero && hasIO) {
  new IntersectionObserver(([entry]) => header.classList.toggle("solid", !entry.isIntersecting), {
    rootMargin: "-72px 0px 0px 0px",
  }).observe(hero);
} else if (header) {
  header.classList.add("solid");
}

// Solicitação de orçamento: situação + cidade geram a mensagem do WhatsApp
const SERVICES = {
  reg: { title: "Regularização na prefeitura", msg: "preciso regularizar um imóvel" },
  proj: { title: "Projeto estrutural", msg: "vou construir/ampliar e preciso de projeto estrutural" },
  laudo: { title: "Laudo técnico de trincas", msg: "tenho trincas/rachaduras e quero uma avaliação" },
  obra: { title: "Acompanhamento de obra", msg: "minha obra começou e quero acompanhamento técnico" },
  outro: { title: "Conversa de orientação", msg: "tenho outra situação e gostaria de uma orientação" },
};

const form = document.getElementById("diag");

if (form) {
  const city = document.getElementById("cidade");
  const send = document.getElementById("send");
  const hint = document.getElementById("msg");
  const result = document.getElementById("result");
  const defaultHint = hint.textContent;
  const choice = () => form.querySelector("input[name=s]:checked");

  form.addEventListener("submit", (e) => e.preventDefault());

  form.addEventListener("change", () => {
    const s = choice();
    if (s) {
      result.classList.add("on");
      document.getElementById("r-label").textContent = "Serviço indicado";
      document.getElementById("r-title").textContent = SERVICES[s.value].title;
    }
    if (s && city.value) {
      send.href = waLink(`Olá, Anderson! Vim pelo site: ${SERVICES[s.value].msg} em ${city.value}.`);
      send.target = "_blank";
      send.rel = "noopener";
      hint.className = "msg";
      hint.textContent = defaultHint;
    }
  });

  // O botão nunca fica desabilitado: se faltar algo, diz o quê e leva até o campo
  send.addEventListener("click", (e) => {
    const s = choice();
    if (s && city.value) return;
    e.preventDefault();
    hint.className = "msg err";
    if (!s) {
      hint.textContent = "Selecione uma situação (A a E).";
      document.getElementById("o1").focus();
    } else {
      hint.textContent = "Selecione a cidade do imóvel.";
      city.focus();
    }
  });

  // Barra fixa do celular some enquanto o formulário está na tela
  const sticky = document.querySelector(".sticky");
  if (sticky && hasIO) {
    new IntersectionObserver(([entry]) => sticky.classList.toggle("hide", entry.isIntersecting), {
      threshold: 0.15,
    }).observe(form);
  }
}
