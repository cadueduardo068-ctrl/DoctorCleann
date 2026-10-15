# Doctor Clean — landing page

## Animações

Implementadas em `src/motion.css` e `src/useEntranceMotion.ts`, sem novas dependências. Entradas únicas com fade e deslocamento de 12 px: 380 ms no desktop e 300 ms no celular. Cards que entram juntos usam intervalos de 45 ms, limitados a 135 ms. Menu móvel e FAQ têm transições curtas. O WhatsApp recebe um único realce de sombra, sem repetição. Layout, conteúdo e rolagem preservados.

Conteúdo visível por padrão, inclusive se o observer ou a animação falhar. Foco de teclado cancela a entrada. `prefers-reduced-motion` desativa animações e transições e é acompanhado quando muda durante a sessão.

Verificação desta atualização: build aprovado; entradas e intervalos confirmados no navegador; menu móvel e FAQ funcionais; sem overflow em 360/390 px e sem erros no console. Movimento reduzido revisado na implementação, sem emulação no navegador disponível.

Prévia comercial local em React, Vite e TypeScript. Não publicada; sem commits ou push. Node.js 22 ou superior recomendado.

## Executar e gerar produção

Abra um terminal nesta pasta:

```sh
npm ci
npm run dev
```

Acesse o endereço local mostrado pelo Vite. Para gerar e conferir a versão de produção:

```sh
npm run build
npm run preview
```

O resultado publicável fica em `dist/`. Não abrir `index.html` diretamente por file://; usar o servidor local.

## Personalizar

- Nome, telefone, cidades, serviços, mensagens, caminhos das fotos e FAQ: `src/config.ts`. O número do WhatsApp deve conter país e DDD, apenas dígitos. As URLs são geradas com `encodeURIComponent`.
- Textos editoriais e estrutura: `src/main.tsx`. Cores, tipografia e responsividade: `src/style.css`.
- Fotos: substituir arquivos em `public/images/`, atualizando também variantes menores, `srcSet`, texto alternativo e dimensões em `src/main.tsx`. As fotos atuais são ilustrativas, não registros de serviços da empresa.
- SEO e compartilhamento: `index.html`. Há título, descrição, Open Graph, idioma e favicon. Após definir o domínio real, adicionar `og:url`, `og:image` com URL absoluta de imagem autorizada e canonical real. Não foi inventado domínio nesta prévia.
- Fontes DM Sans e Manrope via Google Fonts, com fallback Arial. Sem pixels, analytics, formulários ou cookies de marketing. Ícones Lucide (licença ISC, instalada com a dependência).

## Imagens e licença

Baixadas em 15/10/2026 do CDN público do Unsplash; arquivos locais WebP, comprimidos e dimensionados pelo serviço de imagem do Unsplash. Origem e termos:

| Arquivo | Origem |
| --- | --- |
| `living-room.webp` e `living-room-small.webp` | https://images.unsplash.com/photo-1555041469-a586c61ea9bc (1400 e 700 px, qualidade 82/80) |
| `chair.webp` e `chair-small.webp` | https://images.unsplash.com/photo-1567538096630-e0c55bd6374c (1000 e 600 px, qualidade 80) |

Licença conferida: https://unsplash.com/license — permite baixar, modificar e usar comercialmente sem atribuição obrigatória; proíbe revenda da imagem sem modificação significativa e criação de serviço concorrente de imagens. Os nomes dos fotógrafos não foram confirmados e não foram inventados. Fotografias inspecionadas visualmente: sofá verde e poltrona clara; sem logotipos visíveis. Escolhida uma composição de móveis sem pessoas, em vez de representar terceiros como equipe da empresa. Não há imagens falsas de execução ou antes/depois.

## Aprovação do proprietário

Fonte pública consultada em 15/10/2026: https://www.solutudo.com.br/empresas/sp/lencois/limpeza-de-estofados/doctor-clean-higienizacao-de-estofados-26854238

Confirmar antes de publicar: nome comercial, titularidade e disponibilidade do WhatsApp (14) 99111-9419, cidade-base São Manuel/SP, cinco serviços e sete cidades atendidas. O cadastro está categorizado em Lençóis Paulista, mas indica endereço em São Manuel; a página usa a cidade-base do briefing. O cadastro público não substitui aprovação do dono. Não foram incorporadas suas promessas técnicas, garantias, prazos, preços ou alegações de saúde.

Solicitar também assinatura visual autorizada, fotografias próprias com autorização de uso e aprovação integral dos textos. A assinatura atual é apenas tipográfica, sem alegação de marca registrada. Depoimentos, redes sociais, CNPJ e história da empresa foram omitidos.

## Preparar publicação após aprovação

1. Aprovar os dados e materiais acima, definir hospedagem estática e domínio real.
2. Em `index.html`, trocar `noindex, nofollow` por `index, follow`. Em `public/robots.txt`, trocar `Disallow: /` por `Allow: /`. Noindex não é controle de acesso; se a prévia for hospedada antes da aprovação, usar acesso restrito na hospedagem.
3. Completar metadados de domínio e imagem social; gerar novamente o build.
4. Publicar somente o conteúdo de `dist/` em hospedagem estática com HTTPS. `base: './'` permite servir em subpasta.
5. Conferir o domínio, fotos, navegação e abertura do WhatsApp em um celular real. Confirmar o recebimento da mensagem com o proprietário.

## Validação

Build TypeScript/Vite aprovado. HTTP local 200. Inspeção visual em navegador em 360, 390, 768 e 1440 px, sem overflow horizontal detectado. Fotos locais carregadas, menu móvel abre e fecha ao navegar, âncoras válidas e FAQ abre corretamente. URLs dos 13 contatos verificadas com número e mensagens codificadas, incluindo os cinco serviços. Não foi enviada mensagem à empresa. Console observado sem erros ou avisos. Respeito a reduced motion, foco visível, link para pular conteúdo e FAQ semântico nativo. Isso não substitui auditoria formal de acessibilidade nem teste em todos os aparelhos.
