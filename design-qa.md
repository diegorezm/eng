# Design QA: portfólio editorial de engenharia

## Evidências

- Fonte visual: `design-qa/source-hero-reference.png`
- Fonte normalizada: `design-qa/source-hero-reference-normalized.png`
- Implementação desktop final: `design-qa/implementation-desktop-v4-fullscreen.png`
- Implementação mobile final: `design-qa/implementation-mobile-v4-fullscreen.png`
- Comparação completa final: `design-qa/comparison-desktop-v4-fullscreen.png`
- Comparação focada no hero: `design-qa/comparison-hero-focused-v4-fullscreen.png`
- Comparação da linguagem visual na página completa: `design-qa/comparison-fullpage-style-v5.png`
- Contact sheet das seções: `design-qa/fullpage-contact-sheet-v5.png`
- Capturas desktop: `design-qa/fullpage-about-v5.png`, `design-qa/fullpage-services-v5.png`, `design-qa/fullpage-work-v5.png`, `design-qa/fullpage-process-v5.png` e `design-qa/fullpage-contact-v5.png`
- Capturas mobile finais: `design-qa/mobile-hero-v6.png` e `design-qa/mobile-services-v6.png`
- Capturas finais do CTA flutuante: `design-qa/desktop-whatsapp-v7.png` e `design-qa/mobile-whatsapp-v7.png`
- Rota validada: página inicial, topo, menu fechado, aparência clara com hero propositalmente escuro
- Viewport desktop: 1200 x 935 CSS px, captura 1200 x 935 px, densidade efetiva 1x
- Fonte original: 1199 x 907 px, centralizada em uma tela de comparação de 1200 x 935 px
- Viewport mobile: 430 x 932 CSS px, captura 430 x 932 px, densidade efetiva 1x
- Viewport das capturas editoriais desktop: 1280 x 800 CSS px, capturas 1280 x 800 px, densidade efetiva 1x

## Comparação visual

### Vista completa

A comparação completa confirma a mesma estrutura dominante da referência: título branco no terço esquerdo, conteúdo sobreposto, pontos técnicos sobre a arquitetura e diferenciais alinhados no rodapé da imagem. Por solicitação posterior do usuário, a fotografia passou de quadro com margem externa para hero full bleed de 100% do viewport. O cabeçalho agora fica sobreposto à cena. A comparação `comparison-fullpage-style-v5.png` demonstra que o restante da página herda a mesma tipografia leve, os fundos grafite, o laranja pontual, as linhas finas e as composições assimétricas.

### Região focada

A comparação focada foi necessária para revisar tipografia, crop da imagem, contraste das anotações, CTA e a faixa inferior. O arquivo `design-qa/comparison-hero-focused-v4-fullscreen.png` normaliza as duas cenas para 1040 x 746 px. A implementação mantém o peso óptico, as posições e o ritmo da fonte visual, adaptando o conteúdo para engenharia civil em português e respeitando o pedido de ocupar toda a tela.

## Superfícies obrigatórias

- Tipografia: Manrope reproduz bem o desenho geométrico e leve da referência. O título usa peso óptico leve, entrelinha curta e três linhas no desktop. O bloco anotado de comprovação usa 14,4 px no título e 13,12 px no detalhe, com contraste de 84%. Títulos editoriais e textos de corpo não truncam.
- Espaçamento e layout: hero com 100dvh, imagem edge-to-edge e cabeçalho fixo. As demais seções usam grids editoriais, bastante respiro, listas técnicas horizontais e imagens assimétricas. No mobile, tudo passa para uma coluna sem overflow; os diferenciais do hero passam para 2 x 2.
- Cores e tokens: fundo `#151716`, texto marfim, superfícies mineral e verde-neblina, imagem em azul-grafite e luz âmbar reproduzem o balanço frio-quente da referência. O laranja fica restrito a índices, kickers e CTAs.
- Qualidade da imagem: assets próprios em WebP, 1672 x 941 no desktop e 941 x 1672 no mobile. Ambos carregaram sem erro e utilizam composições específicas para cada orientação.
- Copy e conteúdo: texto localizado para pt-BR e alinhado aos serviços reais. O depoimento e as estrelas da referência foram substituídos por tempo de atuação e atendimento técnico, evitando fabricar prova social.

## Histórico de comparação

1. Primeira implementação desktop
   - Resultado: composição principal sem diferenças P0, P1 ou P2 em relação à referência.
   - Evidência: `design-qa/comparison-desktop-v3.png` e `design-qa/comparison-hero-focused-v3.png`.
2. Primeira validação mobile
   - Finding P2: as linhas do botão de menu herdavam uma cor escura sobre o cabeçalho grafite e ficavam visualmente ocultas.
   - Correção: cor e borda específicas para o menu enquanto o cabeçalho está no estado escuro.
   - Evidência anterior: `design-qa/implementation-mobile-v2.png`.
   - Evidência após a correção: `design-qa/implementation-mobile-v3.png`.
3. Validação final
   - Sem overflow horizontal, imagens completas, CTA navegando até `#contato`, menu móvel abrindo e fechando e console sem erros.
4. Ajuste full screen solicitado pelo usuário
   - Alteração: remoção das margens externas do quadro, hero com 100dvh e navegação sobreposta.
   - Evidência desktop: `design-qa/implementation-desktop-v4-fullscreen.png`.
   - Evidência mobile: `design-qa/implementation-mobile-v4-fullscreen.png`.
   - Resultado: primeira dobra integralmente ocupada pelo hero, sem diferenças P0, P1 ou P2.
5. Correção da anotação de legibilidade
   - Finding P2: o texto de comprovação no hero usava 10,88 px e 9,76 px, com baixo contraste no detalhe.
   - Correção: tamanhos elevados para 14,4 px e 13,12 px, peso maior e contraste de 84%.
   - Evidência anterior: `design-qa/implementation-mobile-v4-fullscreen.png`.
   - Evidência após a correção: `design-qa/mobile-hero-v6.png`.
6. Extensão da linguagem visual para a página completa
   - Alteração: seções editoriais claras e escuras, numeração, serviços grafite, legendas fotográficas sobrepostas, processo visual e contato mineral.
   - Evidência combinada: `design-qa/comparison-fullpage-style-v5.png`.
   - Resultado: sem diferenças acionáveis P0, P1 ou P2; console limpo e layout responsivo.
7. CTA flutuante de WhatsApp
   - Alteração: adição de acesso persistente no canto inferior direito, com texto legível, área de toque adequada e link para `#contato` enquanto o número real não foi configurado.
   - Evidência desktop: `design-qa/desktop-whatsapp-v7.png`.
   - Evidência mobile: `design-qa/mobile-whatsapp-v7.png`.
   - Resultado: não cobre o CTA principal, mantém contraste e navega corretamente ao formulário.

## Findings

Não restam diferenças acionáveis P0, P1 ou P2.

### Follow-up polish

- P3: substituir o bloco de tempo de atuação por um depoimento real somente quando houver uma fala e autorização de cliente.
- P3: revisar as três anotações técnicas quando existirem serviços prioritários definidos comercialmente.

## Checklist concluído

- [x] Composição imersiva equivalente à referência
- [x] Imagem própria para desktop
- [x] Imagem própria para mobile
- [x] Conteúdo verdadeiro em pt-BR
- [x] CTA e menu funcionais
- [x] Linguagem visual consistente em todas as seções
- [x] Legibilidade do bloco anotado corrigida
- [x] Responsividade e console validados
- [x] CTA flutuante de WhatsApp validado em desktop e mobile

final result: passed
