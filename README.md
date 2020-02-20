# starlette [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/starlette.png)](https://nodei.co/npm/starlette/)

Library to grab all conceivable UI colors from any Adobe application and expose them as dynamic CSS variables which update automatically to any user-defined theme or theme changes.

| App            | Illustrator | After Effects | Photoshop | Premiere Pro | InDesign | Audition |
| :------------- | ----------: | ------------: | --------: | -----------: | -------: | -------: |
| **Support**    |        100% |          100% |     98%\* |        98%\* |    98%\* |    98%\* |
| **Theme Type** |      4-tier |      Gradient |    4-tier |     Gradient |   4-tier | Gradient |

> \* Base calculations done in Illustrator and After Effects. If you notice inaccuracies in other apps, let me know and I'll update them.

## • [Getting Started](#getting-started)

## • [Stylesheets](#stylesheets)

> The panel in the center is [UI Spy](https://github.com/Inventsable/ui-spy). Notice the variables changing value on the left during app theme changes, and the panel's elements being automatically recolored in the center. There's no manual handling at all -- each element has a single CSS variable and never needs to care about user theme ever again.
> ![](https://thumbs.gfycat.com/OffensiveHoarseClownanemonefish-size_restricted.gif)

> After Effects is far more consistent than other apps with it's color scheme. Notice the hover state of buttons is the same as the color of it's default text -- the button text should invert:
> ![](https://thumbs.gfycat.com/NervousRevolvingCorydorascatfish-size_restricted.gif)

---

## Getting Started

> Templates from [generator-cep-vue-cli](https://github.com/Inventsable/generator-cep-vue-cli) already include starlette

Install the package from NPM:

```bash
npm install starlette
```

Now import `starlette` and call the `init()` function anywhere in your panel:

```html
<!-- In a .vue file -->
<script>
  import starlette from 'starlette'

  // Or via require:
  const starlette = require('starlette').default;

  export default {
    name: 'yourComponent',

    mounted() {
      starlette.init();
      // Now all CSS variables are exposed and reactive.

      // Can also do import and init all at once:
      require('starlette').default.init();
    },
  }
```

This gives you the freedom to write concise CSS with no need for any logic about the theme, simply assign the appropriate color:

```css
.checkbox {
  /* This takes care of every theme, matching the host app exactly */
  fill: var(--color-checkbox);
}

/* Easily apply the hover state with a single line of CSS via the hover variable */
.checkbox:hover {
  fill: var(--color-checkbox-hover);
}

.checkbox-disabled {
  fill: var(--color-checkbox-disabled);
}
```

This is the literal CSS from the screen capture above, located in UI Spy's components/preview/checkbox.vue file.

---

## Stylesheets

---

## Illustrator

| Variable Name                     | Darkest                                                            | Dark                                                               | Light                                                              | Lightest                                                           |
| --------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| --color-bg                        | ![#323232](https://placehold.it/15/323232/ffffff?text=+) `#323232` | ![#535353](https://placehold.it/15/535353/ffffff?text=+) `#535353` | ![#b8b8b8](https://placehold.it/15/b8b8b8/ffffff?text=+) `#b8b8b8` | ![#f0f0f0](https://placehold.it/15/f0f0f0/ffffff?text=+) `#f0f0f0` |
| --color-default                   | ![#cccccc](https://placehold.it/15/cccccc/ffffff?text=+) `#cccccc` | ![#f4f4f4](https://placehold.it/15/f4f4f4/ffffff?text=+) `#f4f4f4` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` |
| --color-text-label                | ![#979797](https://placehold.it/15/979797/ffffff?text=+) `#979797` | ![#c7c7c7](https://placehold.it/15/c7c7c7/ffffff?text=+) `#c7c7c7` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#6d6d6d](https://placehold.it/15/6d6d6d/ffffff?text=+) `#6d6d6d` |
| --color-icon                      | ![#b7b7b7](https://placehold.it/15/b7b7b7/ffffff?text=+) `#b7b7b7` | ![#c2c2c2](https://placehold.it/15/c2c2c2/ffffff?text=+) `#c2c2c2` | ![#414141](https://placehold.it/15/414141/ffffff?text=+) `#414141` | ![#535353](https://placehold.it/15/535353/ffffff?text=+) `#535353` |
| --color-selection                 | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#46a0f5](https://placehold.it/15/46a0f5/ffffff?text=+) `#46a0f5` | ![#3468b2](https://placehold.it/15/3468b2/ffffff?text=+) `#3468b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-divider                   | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#4d4d4d](https://placehold.it/15/4d4d4d/ffffff?text=+) `#4d4d4d` | ![#a8a8a8](https://placehold.it/15/a8a8a8/ffffff?text=+) `#a8a8a8` | ![#dcdcdc](https://placehold.it/15/dcdcdc/ffffff?text=+) `#dcdcdc` |
| --color-btn-hover                 | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#5f5f5f](https://placehold.it/15/5f5f5f/ffffff?text=+) `#5f5f5f` | ![#c4c4c4](https://placehold.it/15/c4c4c4/ffffff?text=+) `#c4c4c4` | ![#fcfcfc](https://placehold.it/15/fcfcfc/ffffff?text=+) `#fcfcfc` |
| --color-btn-border                | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#757575](https://placehold.it/15/757575/ffffff?text=+) `#757575` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-primary               | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#3468b2](https://placehold.it/15/3468b2/ffffff?text=+) `#3468b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-btn-disabled              | ![#3a3a3a](https://placehold.it/15/3a3a3a/ffffff?text=+) `#3a3a3a` | ![#5a5a5a](https://placehold.it/15/5a5a5a/ffffff?text=+) `#5a5a5a` | ![#b0b0b0](https://placehold.it/15/b0b0b0/ffffff?text=+) `#b0b0b0` | ![#e6e6e6](https://placehold.it/15/e6e6e6/ffffff?text=+) `#e6e6e6` |
| --color-btn-active                | ![#1f1f1f](https://placehold.it/15/1f1f1f/ffffff?text=+) `#1f1f1f` | ![#303030](https://placehold.it/15/303030/ffffff?text=+) `#303030` | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-disabled-text         | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#757575](https://placehold.it/15/757575/ffffff?text=+) `#757575` | ![#8f8f8f](https://placehold.it/15/8f8f8f/ffffff?text=+) `#8f8f8f` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-primary-text          | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-btn-pill-hover            | ![#cccccc](https://placehold.it/15/cccccc/ffffff?text=+) `#cccccc` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` |
| --color-btn-pill-active           | ![#7f7f7f](https://placehold.it/15/7f7f7f/ffffff?text=+) `#7f7f7f` | ![#c8c8c8](https://placehold.it/15/c8c8c8/ffffff?text=+) `#c8c8c8` | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#6d6d6d](https://placehold.it/15/6d6d6d/ffffff?text=+) `#6d6d6d` |
| --color-btn-pill-border           | ![#cccccc](https://placehold.it/15/cccccc/ffffff?text=+) `#cccccc` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` |
| --color-btn-icon-active           | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#4f4f4f](https://placehold.it/15/4f4f4f/ffffff?text=+) `#4f4f4f` | ![#b0b0b0](https://placehold.it/15/b0b0b0/ffffff?text=+) `#b0b0b0` | ![#e6e6e6](https://placehold.it/15/e6e6e6/ffffff?text=+) `#e6e6e6` |
| --color-btn-icon-active-border    | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#6c6c6c](https://placehold.it/15/6c6c6c/ffffff?text=+) `#6c6c6c` | ![#adadad](https://placehold.it/15/adadad/ffffff?text=+) `#adadad` | ![#dddddd](https://placehold.it/15/dddddd/ffffff?text=+) `#dddddd` |
| --color-btn-icon-hover            | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#606060](https://placehold.it/15/606060/ffffff?text=+) `#606060` | ![#c4c4c4](https://placehold.it/15/c4c4c4/ffffff?text=+) `#c4c4c4` | ![#fcfcfc](https://placehold.it/15/fcfcfc/ffffff?text=+) `#fcfcfc` |
| --color-btn-icon-hover-border     | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#6c6c6c](https://placehold.it/15/6c6c6c/ffffff?text=+) `#6c6c6c` | ![#adadad](https://placehold.it/15/adadad/ffffff?text=+) `#adadad` | ![#dddddd](https://placehold.it/15/dddddd/ffffff?text=+) `#dddddd` |
| --color-btn-toolbar-active        | ![#1f1f1f](https://placehold.it/15/1f1f1f/ffffff?text=+) `#1f1f1f` | ![#303030](https://placehold.it/15/303030/ffffff?text=+) `#303030` | ![#969696](https://placehold.it/15/969696/ffffff?text=+) `#969696` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-toolbar-active-border | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#575757](https://placehold.it/15/575757/ffffff?text=+) `#575757` | ![#838383](https://placehold.it/15/838383/ffffff?text=+) `#838383` | ![#a7a7a7](https://placehold.it/15/a7a7a7/ffffff?text=+) `#a7a7a7` |
| --color-btn-toolbar-hover         | ![#292929](https://placehold.it/15/292929/ffffff?text=+) `#292929` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#dcdcdc](https://placehold.it/15/dcdcdc/ffffff?text=+) `#dcdcdc` | ![#fafafa](https://placehold.it/15/fafafa/ffffff?text=+) `#fafafa` |
| --color-btn-toolbar-hover-border  | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#5a5a5a](https://placehold.it/15/5a5a5a/ffffff?text=+) `#5a5a5a` | ![#b4b4b4](https://placehold.it/15/b4b4b4/ffffff?text=+) `#b4b4b4` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-input                     | ![#262626](https://placehold.it/15/262626/ffffff?text=+) `#262626` | ![#464646](https://placehold.it/15/464646/ffffff?text=+) `#464646` | ![#e3e3e3](https://placehold.it/15/e3e3e3/ffffff?text=+) `#e3e3e3` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-input-border              | ![#3a3a3a](https://placehold.it/15/3a3a3a/ffffff?text=+) `#3a3a3a` | ![#606060](https://placehold.it/15/606060/ffffff?text=+) `#606060` | ![#a8a8a8](https://placehold.it/15/a8a8a8/ffffff?text=+) `#a8a8a8` | ![#dcdcdc](https://placehold.it/15/dcdcdc/ffffff?text=+) `#dcdcdc` |
| --color-input-text                | ![#cccccc](https://placehold.it/15/cccccc/ffffff?text=+) `#cccccc` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` |
| --color-input-focus               | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#e3e3e3](https://placehold.it/15/e3e3e3/ffffff?text=+) `#e3e3e3` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-input-focus-border        | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#3468b2](https://placehold.it/15/3468b2/ffffff?text=+) `#3468b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-input-focus-text          | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#4c4c4c](https://placehold.it/15/4c4c4c/ffffff?text=+) `#4c4c4c` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` |
| --color-dropdown                  | ![#262626](https://placehold.it/15/262626/ffffff?text=+) `#262626` | ![#4c4c4c](https://placehold.it/15/4c4c4c/ffffff?text=+) `#4c4c4c` | ![#c4c4c4](https://placehold.it/15/c4c4c4/ffffff?text=+) `#c4c4c4` | ![#fcfcfc](https://placehold.it/15/fcfcfc/ffffff?text=+) `#fcfcfc` |
| --color-dropdown-active           | ![#1e1e1e](https://placehold.it/15/1e1e1e/ffffff?text=+) `#1e1e1e` | ![#303030](https://placehold.it/15/303030/ffffff?text=+) `#303030` | ![#969696](https://placehold.it/15/969696/ffffff?text=+) `#969696` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-dropdown-hover            | ![#3a3a3a](https://placehold.it/15/3a3a3a/ffffff?text=+) `#3a3a3a` | ![#5a5a5a](https://placehold.it/15/5a5a5a/ffffff?text=+) `#5a5a5a` | ![#cecece](https://placehold.it/15/cecece/ffffff?text=+) `#cecece` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-dropdown-border           | ![#3a3a3a](https://placehold.it/15/3a3a3a/ffffff?text=+) `#3a3a3a` | ![#606060](https://placehold.it/15/606060/ffffff?text=+) `#606060` | ![#a8a8a8](https://placehold.it/15/a8a8a8/ffffff?text=+) `#a8a8a8` | ![#dcdcdc](https://placehold.it/15/dcdcdc/ffffff?text=+) `#dcdcdc` |
| --color-dropdown-item-hover       | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#606060](https://placehold.it/15/606060/ffffff?text=+) `#606060` | ![#a8a8a8](https://placehold.it/15/a8a8a8/ffffff?text=+) `#a8a8a8` | ![#dcdcdc](https://placehold.it/15/dcdcdc/ffffff?text=+) `#dcdcdc` |
| --color-dropdown-item-selected    | ![#519dd6](https://placehold.it/15/519dd6/ffffff?text=+) `#519dd6` | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#3868b2](https://placehold.it/15/3868b2/ffffff?text=+) `#3868b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-checkbox                  | ![#979797](https://placehold.it/15/979797/ffffff?text=+) `#979797` | ![#c8c8c8](https://placehold.it/15/c8c8c8/ffffff?text=+) `#c8c8c8` | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#6d6d6d](https://placehold.it/15/6d6d6d/ffffff?text=+) `#6d6d6d` |
| --color-checkbox-hover            | ![#cccccc](https://placehold.it/15/cccccc/ffffff?text=+) `#cccccc` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` |
| --color-checkbox-disabled         | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#757575](https://placehold.it/15/757575/ffffff?text=+) `#757575` | ![#8f8f8f](https://placehold.it/15/8f8f8f/ffffff?text=+) `#8f8f8f` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-scrollbar                 | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#4c4c4c](https://placehold.it/15/4c4c4c/ffffff?text=+) `#4c4c4c` | ![#c4c4c4](https://placehold.it/15/c4c4c4/ffffff?text=+) `#c4c4c4` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-scrollbar-arrow           | ![#727272](https://placehold.it/15/727272/ffffff?text=+) `#727272` | ![#969696](https://placehold.it/15/969696/ffffff?text=+) `#969696` | ![#6f6f6f](https://placehold.it/15/6f6f6f/ffffff?text=+) `#6f6f6f` | ![#969696](https://placehold.it/15/969696/ffffff?text=+) `#969696` |
| --color-scrollbar-thumb           | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#606060](https://placehold.it/15/606060/ffffff?text=+) `#606060` | ![#a8a8a8](https://placehold.it/15/a8a8a8/ffffff?text=+) `#a8a8a8` | ![#dcdcdc](https://placehold.it/15/dcdcdc/ffffff?text=+) `#dcdcdc` |
| --color-scrollbar-thumb-hover     | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#757575](https://placehold.it/15/757575/ffffff?text=+) `#757575` | ![#8f8f8f](https://placehold.it/15/8f8f8f/ffffff?text=+) `#8f8f8f` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-tooltip-border            | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` | ![#787878](https://placehold.it/15/787878/ffffff?text=+) `#787878` | ![#777777](https://placehold.it/15/777777/ffffff?text=+) `#777777` | ![#777777](https://placehold.it/15/777777/ffffff?text=+) `#777777` |
| --color-header                    | ![#262626](https://placehold.it/15/262626/ffffff?text=+) `#262626` | ![#434343](https://placehold.it/15/434343/ffffff?text=+) `#434343` | ![#a2a2a2](https://placehold.it/15/a2a2a2/ffffff?text=+) `#a2a2a2` | ![#dbdbdb](https://placehold.it/15/dbdbdb/ffffff?text=+) `#dbdbdb` |
| --color-header-border             | ![#212121](https://placehold.it/15/212121/ffffff?text=+) `#212121` | ![#383838](https://placehold.it/15/383838/ffffff?text=+) `#383838` | ![#949494](https://placehold.it/15/949494/ffffff?text=+) `#949494` | ![#cccccc](https://placehold.it/15/cccccc/ffffff?text=+) `#cccccc` |

---

## After Effects (as gradient scale)

| Variable Name                     | Darkest                                                            | Medium                                                             | Lightest                                                           |
| --------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| --color-bg                        | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#3c3c3c](https://placehold.it/15/3c3c3c/ffffff?text=+) `#3c3c3c` | ![#565656](https://placehold.it/15/565656/ffffff?text=+) `#565656` |
| --color-default                   | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-text-label                | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-icon                      | ![#b2b2b2](https://placehold.it/15/b2b2b2/ffffff?text=+) `#b2b2b2` | ![#cbcbcb](https://placehold.it/15/cbcbcb/ffffff?text=+) `#cbcbcb` | ![#e5e5e5](https://placehold.it/15/e5e5e5/ffffff?text=+) `#e5e5e5` |
| --color-selection                 | ![#4892cb](https://placehold.it/15/4892cb/ffffff?text=+) `#4892cb` | ![#4892cb](https://placehold.it/15/4892cb/ffffff?text=+) `#4892cb` | ![#4892cb](https://placehold.it/15/4892cb/ffffff?text=+) `#4892cb` |
| --color-divider                   | ![#2d2d2d](https://placehold.it/15/2d2d2d/ffffff?text=+) `#2d2d2d` | ![#464646](https://placehold.it/15/464646/ffffff?text=+) `#464646` | ![#606060](https://placehold.it/15/606060/ffffff?text=+) `#606060` |
| --color-btn-default               | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#3c3c3c](https://placehold.it/15/3c3c3c/ffffff?text=+) `#3c3c3c` | ![#565656](https://placehold.it/15/565656/ffffff?text=+) `#565656` |
| --color-btn-hover                 | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-border                | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-primary               | ![#4885c6](https://placehold.it/15/4885c6/ffffff?text=+) `#4885c6` | ![#4885c6](https://placehold.it/15/4885c6/ffffff?text=+) `#4885c6` | ![#4885c6](https://placehold.it/15/4885c6/ffffff?text=+) `#4885c6` |
| --color-btn-disabled              | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#434343](https://placehold.it/15/434343/ffffff?text=+) `#434343` | ![#5d5d5d](https://placehold.it/15/5d5d5d/ffffff?text=+) `#5d5d5d` |
| --color-btn-active                | ![#646464](https://placehold.it/15/646464/ffffff?text=+) `#646464` | ![#7d7d7d](https://placehold.it/15/7d7d7d/ffffff?text=+) `#7d7d7d` | ![#979797](https://placehold.it/15/979797/ffffff?text=+) `#979797` |
| --color-btn-disabled-text         | ![#464646](https://placehold.it/15/464646/ffffff?text=+) `#464646` | ![#5f5f5f](https://placehold.it/15/5f5f5f/ffffff?text=+) `#5f5f5f` | ![#797979](https://placehold.it/15/797979/ffffff?text=+) `#797979` |
| --color-btn-primary-text          | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-btn-pill-hover            | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-pill-border           | ![#e2e2e2](https://placehold.it/15/e2e2e2/ffffff?text=+) `#e2e2e2` | ![#fbfbfb](https://placehold.it/15/fbfbfb/ffffff?text=+) `#fbfbfb` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-btn-pill-active           | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-btn-icon-active           | ![#161616](https://placehold.it/15/161616/ffffff?text=+) `#161616` | ![#2f2f2f](https://placehold.it/15/2f2f2f/ffffff?text=+) `#2f2f2f` | ![#494949](https://placehold.it/15/494949/ffffff?text=+) `#494949` |
| --color-btn-icon-active-border    | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` | ![#616161](https://placehold.it/15/616161/ffffff?text=+) `#616161` |
| --color-btn-icon-hover            | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#434343](https://placehold.it/15/434343/ffffff?text=+) `#434343` | ![#5d5d5d](https://placehold.it/15/5d5d5d/ffffff?text=+) `#5d5d5d` |
| --color-btn-icon-hover-border     | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` | ![#616161](https://placehold.it/15/616161/ffffff?text=+) `#616161` |
| --color-btn-toolbar-active        | ![#161616](https://placehold.it/15/161616/ffffff?text=+) `#161616` | ![#2f2f2f](https://placehold.it/15/2f2f2f/ffffff?text=+) `#2f2f2f` | ![#494949](https://placehold.it/15/494949/ffffff?text=+) `#494949` |
| --color-btn-toolbar-active-border | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` | ![#616161](https://placehold.it/15/616161/ffffff?text=+) `#616161` |
| --color-btn-toolbar-hover         | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#434343](https://placehold.it/15/434343/ffffff?text=+) `#434343` | ![#5d5d5d](https://placehold.it/15/5d5d5d/ffffff?text=+) `#5d5d5d` |
| --color-btn-toolbar-hover-border  | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` | ![#616161](https://placehold.it/15/616161/ffffff?text=+) `#616161` |
| --color-input                     | ![#161616](https://placehold.it/15/161616/ffffff?text=+) `#161616` | ![#2f2f2f](https://placehold.it/15/2f2f2f/ffffff?text=+) `#2f2f2f` | ![#494949](https://placehold.it/15/494949/ffffff?text=+) `#494949` |
| --color-input-border              | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` | ![#616161](https://placehold.it/15/616161/ffffff?text=+) `#616161` |
| --color-input-text                | ![#b2b2b2](https://placehold.it/15/b2b2b2/ffffff?text=+) `#b2b2b2` | ![#cbcbcb](https://placehold.it/15/cbcbcb/ffffff?text=+) `#cbcbcb` | ![#e5e5e5](https://placehold.it/15/e5e5e5/ffffff?text=+) `#e5e5e5` |
| --color-input-focus               | ![#e8e8e8](https://placehold.it/15/e8e8e8/ffffff?text=+) `#e8e8e8` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-input-focus-border        | ![#4892cb](https://placehold.it/15/4892cb/ffffff?text=+) `#4892cb` | ![#4892cb](https://placehold.it/15/4892cb/ffffff?text=+) `#4892cb` | ![#4892cb](https://placehold.it/15/4892cb/ffffff?text=+) `#4892cb` |
| --color-input-focus-text          | ![#161616](https://placehold.it/15/161616/ffffff?text=+) `#161616` | ![#2f2f2f](https://placehold.it/15/2f2f2f/ffffff?text=+) `#2f2f2f` | ![#494949](https://placehold.it/15/494949/ffffff?text=+) `#494949` |
| --color-dropdown                  | ![#1d1d1d](https://placehold.it/15/1d1d1d/ffffff?text=+) `#1d1d1d` | ![#363636](https://placehold.it/15/363636/ffffff?text=+) `#363636` | ![#505050](https://placehold.it/15/505050/ffffff?text=+) `#505050` |
| --color-dropdown-active           | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#3c3c3c](https://placehold.it/15/3c3c3c/ffffff?text=+) `#3c3c3c` | ![#565656](https://placehold.it/15/565656/ffffff?text=+) `#565656` |
| --color-dropdown-hover            | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#434343](https://placehold.it/15/434343/ffffff?text=+) `#434343` | ![#5d5d5d](https://placehold.it/15/5d5d5d/ffffff?text=+) `#5d5d5d` |
| --color-dropdown-border           | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` | ![#616161](https://placehold.it/15/616161/ffffff?text=+) `#616161` |
| --color-dropdown-item             | ![#1d1d1d](https://placehold.it/15/1d1d1d/ffffff?text=+) `#1d1d1d` | ![#363636](https://placehold.it/15/363636/ffffff?text=+) `#363636` | ![#505050](https://placehold.it/15/505050/ffffff?text=+) `#505050` |
| --color-dropdown-item-hover       | ![#464646](https://placehold.it/15/464646/ffffff?text=+) `#464646` | ![#5f5f5f](https://placehold.it/15/5f5f5f/ffffff?text=+) `#5f5f5f` | ![#797979](https://placehold.it/15/797979/ffffff?text=+) `#797979` |
| --color-dropdown-item-selected    | ![#4c86c6](https://placehold.it/15/4c86c6/ffffff?text=+) `#4c86c6` | ![#4c86c6](https://placehold.it/15/4c86c6/ffffff?text=+) `#4c86c6` | ![#4c86c6](https://placehold.it/15/4c86c6/ffffff?text=+) `#4c86c6` |
| --color-checkbox                  | ![#8a8a8a](https://placehold.it/15/8a8a8a/ffffff?text=+) `#8a8a8a` | ![#a3a3a3](https://placehold.it/15/a3a3a3/ffffff?text=+) `#a3a3a3` | ![#bdbdbd](https://placehold.it/15/bdbdbd/ffffff?text=+) `#bdbdbd` |
| --color-checkbox-hover            | ![#bababa](https://placehold.it/15/bababa/ffffff?text=+) `#bababa` | ![#d3d3d3](https://placehold.it/15/d3d3d3/ffffff?text=+) `#d3d3d3` | ![#ededed](https://placehold.it/15/ededed/ffffff?text=+) `#ededed` |
| --color-checkbox-disabled         | ![#464646](https://placehold.it/15/464646/ffffff?text=+) `#464646` | ![#5f5f5f](https://placehold.it/15/5f5f5f/ffffff?text=+) `#5f5f5f` | ![#797979](https://placehold.it/15/797979/ffffff?text=+) `#797979` |
| --color-scrollbar                 | ![#1d1d1d](https://placehold.it/15/1d1d1d/ffffff?text=+) `#1d1d1d` | ![#363636](https://placehold.it/15/363636/ffffff?text=+) `#363636` | ![#505050](https://placehold.it/15/505050/ffffff?text=+) `#505050` |
| --color-scrollbar-thumb           | ![#313131](https://placehold.it/15/313131/ffffff?text=+) `#313131` | ![#4a4a4a](https://placehold.it/15/4a4a4a/ffffff?text=+) `#4a4a4a` | ![#646464](https://placehold.it/15/646464/ffffff?text=+) `#646464` |
| --color-scrollbar-arrow           | ![#919191](https://placehold.it/15/919191/ffffff?text=+) `#919191` | ![#aaaaaa](https://placehold.it/15/aaaaaa/ffffff?text=+) `#aaaaaa` | ![#c4c4c4](https://placehold.it/15/c4c4c4/ffffff?text=+) `#c4c4c4` |
| --color-scrollbar-thumb-hover     | ![#464646](https://placehold.it/15/464646/ffffff?text=+) `#464646` | ![#5f5f5f](https://placehold.it/15/5f5f5f/ffffff?text=+) `#5f5f5f` | ![#797979](https://placehold.it/15/797979/ffffff?text=+) `#797979` |
| --color-tooltip-border            | ![#777777](https://placehold.it/15/777777/ffffff?text=+) `#777777` | ![#909090](https://placehold.it/15/909090/ffffff?text=+) `#909090` | ![#aaaaaa](https://placehold.it/15/aaaaaa/ffffff?text=+) `#aaaaaa` |
| --color-header                    | ![#333333](https://placehold.it/15/333333/ffffff?text=+) `#333333` | ![#4c4c4c](https://placehold.it/15/4c4c4c/ffffff?text=+) `#4c4c4c` | ![#666666](https://placehold.it/15/666666/ffffff?text=+) `#666666` |
| --color-header-border             | ![#161616](https://placehold.it/15/161616/ffffff?text=+) `#161616` | ![#2f2f2f](https://placehold.it/15/2f2f2f/ffffff?text=+) `#2f2f2f` | ![#494949](https://placehold.it/15/494949/ffffff?text=+) `#494949` |

---

## Todo

- `init()` should assign low-specificity base rules like `font-family: 'Open Sans', sans-serif;`, assign the `<body>` tag's `background-color` to `--color-bg`, and automatically assign the scrollbar's style.
- ~~Support all other apps (6 minimum to cover Typescript / Ovid Editor)~~
- ~~Extend API and documentation~~

## Notes about Host inconsistencies

- Gradient buttons work much differently -- might be worth having a `button-text` variable
- Photoshop's `dropdown` is anomalously white, causing the text to be unreadable -- maybe include a `dropdown-text` variable to combat this
- There should be a `input-disabled` variable
