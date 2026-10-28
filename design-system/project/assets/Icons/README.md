Wedges' own SVG icons, copied from `packages/wedges/src/components/icons/`. In the library they are React components that draw in `currentColor`. These files are drawn in `wg-gray-900` (#121217), since an `<img>` can't inherit a color, so recolor the copy you use.

- `lemonsqueezy.svg`: the Lemon Squeezy mark. Avatar shows it (in `surface-300`) as the fallback while an image loads.
- `info.svg`: the label tooltip trigger and the default alert icon.
- `close.svg`: the close button of alerts and tags.
- `check.svg`: the checked item in dropdown and select menus (a 1.5px stroke).
- `tippy.svg`: the tooltip arrow, drawn in `background`.

All other UI icons come from Iconicicons (`@iconicicons/react`). They aren't copied here.
