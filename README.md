# 🌒 Eclipse Survivors

Roguelite de sobrevivência em arena (bullet heaven / auto-battler) em um único arquivo HTML5 —
sem dependências, sem build. Abra o `index.html` em qualquer navegador de desktop e jogue.

**Feito exclusivamente para PC: teclado e mouse.** Sem touch, sem joystick virtual, sem gamepad.

## Como jogar

| Ação | Comando |
|---|---|
| Mover | `WASD` ou setas |
| Atacar | Automático |
| Pausar | `ESC` |
| Escolher melhoria | Mouse ou `1–4` |
| Reroll / Banir / Pular | `R` / `B` / `S` |
| Confirmar baú | `Enter` ou `Espaço` |

Sobreviva por **30 minutos** coletando cristais de XP, montando builds com até 6 armas e
6 passivas, evoluindo armas no nível máximo com a passiva certa, e derrote o
**Devorador de Estrelas** no fim. Vencer libera o **Modo Infinito**.

## Conteúdo

- **5 personagens** (2 desbloqueáveis), cada um com arma inicial e passiva única
- **10 armas**, todas com **evolução** própria (nível 8 + passiva específica + baú)
- **3 uniões lendárias**: duas armas evoluídas se fundem numa terceira (Lâmina do Eclipse,
  Cosmos Ardente, Juízo do Inverno), liberando um slot
- **18 passivas** + **Reação Elemental**: alvos com 2+ status (fogo/gelo/sangramento) sofrem +35% de dano
- **9 tipos de inimigos** + elites com 7 modificadores + **5 bosses** com padrões próprios
  (Guardião da Cripta, Bruxa do Eclipse, Colosso das Cinzas, Arauto do Vazio, Devorador de Estrelas)
- **6 mapas** desbloqueáveis, cada um com evento próprio (raízes vivas, mãos do chão,
  tempestade de vidro, torres de raios, páginas amaldiçoadas, gravidade instável)
- **Santuários** (Vida, Fúria, Fortuna, Tempo, Maldição) e **Comerciante errante**
- Eventos aleatórios: chuva de XP, emboscada, portal de elites, eclipse temporário,
  área segura, onda de tesouros, **onda desesperadora** aos 28:00
- Baús comum/raro/lendário/**amaldiçoado**, bomba, imã, relógio congelante
- **Loja permanente** com 13 melhorias, **18 conquistas**, **coleção com bestiário**,
- **9 modificadores de partida** (Turbo, Caos, Bosses em dobro…) que multiplicam as moedas
- **6 desafios** com regras especiais e recompensa única (Voto de Pobreza, Coração de Vidro,
  Marcha dos Titãs…) e **ranking local** de recordes pessoais (tempo, abates, nível, sequência)
- **Trilha sonora orquestral** (5 faixas: menu, exploração, sombria, boss e vitória)
  com crossfade entre cenas; música procedural por WebAudio como fallback; efeitos
  sintetizados, números de dano coloridos por tipo, glow aditivo, salvamento automático

## Direção de arte

Inspirada nas capas clássicas de alta fantasia (tons de joia + iluminura):

- Tema **safira e ouro velho** em toda a interface, tipografia serifada com versaletes
- **Olho de dragão** gigante no menu — íris em gradiente de safira, pupila vertical
  que dilata, escamas concêntricas, piscada periódica — sob um eclipse de corona dourada,
  cordilheira em silhueta e brasas subindo
- **Moldura ornamental** de manuscrito nos quatro cantos da tela (SVG embutido)
- **Runas da Língua Antiga** gravadas no chão dos mapas, pulsando suavemente
- Entrada de boss cerimonial: letterbox cinematográfico com nome em ouro e lore
- Cristais de XP como **gemas lapidadas** com faceta e brilho; inimigos com contorno
  de tinta de gravura; bosses com chifres e olhos de réptil incandescentes
- Partículas atmosféricas por mapa (vagalumes, cinzas, poeira dourada, poeira estelar)
  e luz de tocha acompanhando o herói

## Por que JavaScript/Canvas?

É a linguagem certa para este gênero — o próprio *Vampire Survivors* foi construído em
JavaScript (Phaser) e distribuído como executável de desktop; só foi portado para Unity
anos depois, por causa de consoles. Aqui o jogo roda em qualquer navegador com clique
duplo, e vira executável Windows com dois comandos (abaixo). A performance é tratada
como em engine nativa: **grade espacial de colisões** (consultas O(1) em vez de varrer
todos os inimigos por projétil), texturas de chão pré-renderizadas, sprites de brilho
pré-rasterizados, tetos de partículas e **modo desempenho** nas configurações.

## Executável para Windows (.exe)

Requisitos: [Node.js LTS](https://nodejs.org). Na pasta do projeto:

```bash
npm install
npm run dist     # gera dist/EclipseSurvivors.exe (portátil, sem instalação)
```

Para apenas testar a janela de desktop sem gerar o .exe: `npm start`.

## Arquitetura

O jogo inteiro vive em `index.html` (zero dependências), organizado em módulos: `Save`,
`Aud` (áudio), `Input`, dados (`CHARS`, `WEAPONS`, `PASSIVES`, `ETYPES`, `BOSSES`, `MAPS`,
`MODS`, `SHOP`, `ACHS`), `Game` (loop/spawner/combate/render), `LevelUp` e `UI`. Os dados
ficam separados da lógica para facilitar expansão. `electron/main.js` + `package.json`
fazem o empacotamento desktop.

## Assets raster

Os sprites pintados (heróis, bosses, inimigos e pisos) vivem em `assets/` e são
embutidos em base64 no `index.html` por `node tools/embed-assets.mjs` — o jogo
continua sendo um arquivo único. Se um sprite não carregar, o desenho procedural
equivalente entra como fallback automático. Os pisos do pacote recebem uma tinta
*multiply* escura por mapa para fundir com a atmosfera do jogo.

## Música

As faixas MP3 vivem em `assets/music/` e são embutidas pelo mesmo
`tools/embed-assets.mjs` (bloco `MUSIC`). Mapeamento: menu → `menu`; Floresta e
Deserto → `calma`; Cripta, Ruínas, Biblioteca e Abismo → `sombria`; bosses → `boss`
(com crossfade de ~1s na entrada e na saída); vitória → fanfarra única sem loop.
Sem os MP3, o jogo cai de volta na trilha procedural sintetizada.
