# Anderson Moura · Engenharia Civil

Site de página única do engenheiro civil Anderson Fabiano de Moura (Vale do Paraíba, SP). É HTML, CSS e JS puros, sem build.

## Rodar localmente

```bash
bun run dev
```

## Estrutura

```
index.html          página, meta tags de SEO/OG e JSON-LD
style.css           estilos
index.js            links do WhatsApp, formulário de orçamento e navbar
llms.txt            resumo do site para assistentes de IA
robots.txt          regras para buscadores
sitemap.xml         sitemap
favicon.svg         ícone do navegador
apple-touch-icon.png ícone do celular
assets/fonts/       Archivo (auto-hospedada)
assets/images/      fotos, imagem de compartilhamento (og) e ícone do WhatsApp
```

## Antes de publicar

Estes valores são provisórios até o início das operações:

- **Domínio:** `https://www.SEUDOMINIO.com.br` em `index.html`, `robots.txt`, `sitemap.xml` e `llms.txt`.
  ```bash
  sed -i 's#https://www.SEUDOMINIO.com.br#https://dominio-real#g' index.html robots.txt sitemap.xml llms.txt
  ```
- **WhatsApp:** `5512900000000` em `index.js`, nos links `wa.me` do `index.html` e no `llms.txt`; `(12) 90000-0000` no contato do `index.html`.
- **CREA-SP:** número destacado em amarelo (`class="ph"`) no `index.html`.
- **Prazo de resposta:** confirmar "Resposta em até 1 dia útil".
- **Depoimentos:** só adicionar depoimentos reais, com nome, bairro e serviço.
