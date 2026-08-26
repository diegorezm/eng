document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const header = document.querySelector("[data-header]");
const hero = document.querySelector("#inicio");

if (header && hero && "IntersectionObserver" in window) {
  const headerObserver = new IntersectionObserver(
    ([entry]) => header.classList.toggle("is-scrolled", entry.intersectionRatio < 0.9),
    { threshold: [0.9] }
  );
  headerObserver.observe(hero);
}

const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const submitButton = contactForm.querySelector("[data-submit-button]");
  const status = contactForm.querySelector("[data-form-status]");
  const requiredFields = [...contactForm.querySelectorAll("[required]")];

  const messages = {
    nome: "Informe seu nome.",
    telefone: "Informe um telefone para retorno.",
    cidade: "Informe a cidade da obra.",
    servico: "Selecione o serviço desejado.",
    mensagem: "Conte brevemente o que você precisa."
  };

  function setFieldError(field, message = "") {
    const error = contactForm.querySelector(`[data-error-for="${field.id}"]`);
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message;
  }

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.value.trim()) setFieldError(field);
    });
    field.addEventListener("change", () => {
      if (field.value.trim()) setFieldError(field);
    });
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    let firstInvalidField = null;

    requiredFields.forEach((field) => {
      const isEmpty = !field.value.trim();
      setFieldError(field, isEmpty ? messages[field.id] : "");
      if (isEmpty && !firstInvalidField) firstInvalidField = field;
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      status.hidden = false;
      status.textContent = "Revise os campos indicados antes de continuar.";
      return;
    }

    submitButton.setAttribute("aria-busy", "true");
    submitButton.textContent = "Preparando";
    status.hidden = true;

    const data = new FormData(contactForm);
    const briefing = [
      "SOLICITAÇÃO DE ORÇAMENTO",
      "",
      `Nome: ${data.get("nome")}`,
      `Telefone: ${data.get("telefone")}`,
      `Cidade da obra: ${data.get("cidade")}`,
      `Serviço: ${data.get("servico")}`,
      "",
      "Sobre a obra:",
      data.get("mensagem")
    ].join("\n");

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(briefing);
      } else {
        const copyTarget = document.createElement("textarea");
        copyTarget.value = briefing;
        copyTarget.setAttribute("readonly", "");
        copyTarget.style.position = "fixed";
        copyTarget.style.opacity = "0";
        document.body.appendChild(copyTarget);
        copyTarget.select();
        document.execCommand("copy");
        copyTarget.remove();
      }

      status.textContent = "Briefing copiado. Cole a mensagem no WhatsApp ou no e-mail do profissional.";
      status.hidden = false;
    } catch {
      status.textContent = "Não foi possível copiar automaticamente. Selecione o texto preenchido e tente novamente.";
      status.hidden = false;
    } finally {
      submitButton.removeAttribute("aria-busy");
      submitButton.textContent = "Copiar briefing";
    }
  });
}
