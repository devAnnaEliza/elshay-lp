# El Shay — Engenharia e Construção Civil

Projeto de portfólio desenvolvido a partir de uma empresa real do setor de engenharia e construção civil, explorando a criação de uma presença digital institucional alinhada à identidade e ao posicionamento da El Shay.

## Preview

<!-- Substituir pela captura final da landing page quando disponível. -->
<!-- Adicionar a URL da demonstração após o deploy final. -->

## Contexto

A El Shay atua com soluções integradas em engenharia e construção civil, conectando projetos, planejamento, materiais, suprimentos e execução em um mesmo processo. Este projeto utiliza informações verificadas sobre esse posicionamento e ativos de marca existentes para explorar como essa presença digital institucional poderia organizar a proposta e orientar o contato.

## Objetivo

- Comunicar o posicionamento da marca com clareza.
- Organizar as áreas de atuação e os serviços verificados.
- Construir uma presença digital institucional consistente como estudo de portfólio.
- Orientar visitantes ao contato para orçamento ou discussão de projeto em uma eventual implementação oficial.
- Manter uma experiência coerente em desktop e dispositivos móveis.

## Solução

A experiência foi estruturada em seis áreas: Navbar, Hero, Serviços, Sobre, Contato e Footer. A hierarquia editorial apresenta primeiro a atuação integrada da empresa, detalha os serviços e, ao final, concentra o convite ao contato.

Uma superfície visual contínua conecta as seções; a separação é conduzida por composição, espaçamento, tipografia, cartões e fotografia, sem transformar cada bloco em uma interface isolada.

## Direção visual

A interface adota uma direção arquitetônica e editorial: base escura, acentos dourados e fotografia de linguagem estrutural. Playfair Display conduz títulos e textos de destaque; Manrope atende corpo e interface; DM Mono é reservada para rótulos técnicos e detalhes.

As interações e animações são discretas e implementadas com CSS nativo. A direção visual definida em Figma orientou composição e linguagem visual, enquanto a aplicação foi reconstruída com código próprio e manutenível.

## Desenvolvimento

- React, Vite e TypeScript.
- CSS nativo com tokens reutilizáveis de cor, tipografia e espaçamento.
- Componentes por seção e conteúdo de negócio centralizado.
- Layouts responsivos com Grid e Flexbox.
- Interações, transições e animações implementadas sem bibliotecas adicionais.

## Responsividade e acessibilidade

- Grades e composições adaptadas para mobile, tablet e desktop.
- Navegação móvel com controle por teclado e fechamento por `Escape`.
- Alvos de toque dimensionados para uso em telas menores.
- Hierarquia semântica de títulos, links internos descritivos e texto alternativo em imagens.
- Estados de foco visíveis, suporte a movimento reduzido e compensação de âncora para a navegação fixa.

## Estrutura

```text
public/
  og-elshay.png
src/
  assets/brand/
  components/
    layout/
    sections/
    ui/
  content/
  styles/
  App.tsx
  main.tsx
index.html
```

## Executando localmente

```bash
corepack pnpm install
corepack pnpm dev
```

Para gerar a versão de produção:

```bash
corepack pnpm build
```

## Status

A implementação e o refinamento visual estão concluídos para esta versão independente de portfólio/demonstração. Nenhuma informação de negócio foi fabricada para preencher dados ainda não fornecidos.

Para uma eventual implementação oficial, ainda seriam necessários:

- definição de um destino oficial de WhatsApp;
- substituição das fotografias temporárias por imagens da El Shay com autorização de uso;
- definição da URL final de deploy.

## Próximos passos

- Integrar um destino oficial de WhatsApp, quando disponível.
- Substituir a fotografia temporária por imagem com autorização de uso.
- Realizar o deploy final.
- Executar a verificação final em produção.

## Autoria

Projeto de portfólio independente desenvolvido por Anna Eliza.
