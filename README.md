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
- **18 passivas** com sinergias (queimadura, lentidão, invocações, knockback…)
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
- Música procedural por WebAudio (temas de menu, mapa e boss), efeitos sintetizados,
  números de dano coloridos por tipo, glow aditivo, salvamento local automático

## Arquitetura

Arquivo único (`index.html`) organizado em módulos: `Save`, `Aud` (áudio), `Input`,
dados (`CHARS`, `WEAPONS`, `PASSIVES`, `ETYPES`, `BOSSES`, `MAPS`, `MODS`, `SHOP`, `ACHS`),
`Game` (loop/spawner/combate/render), `LevelUp` e `UI`. Os dados ficam separados da lógica
para facilitar expansão.
