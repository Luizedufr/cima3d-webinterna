wedges-cima3d is the CIMA3D student association's UI kit: the open-source Wedges React library (Radix primitives styled with Tailwind CSS through the `wedgesTW()` plugin, light and dark themes) recoloured to CIMA3D's violet and magenta. Use it for the association's web pages, sign-up forms and dashboards. Keep the interface neutral and quiet, with CIMA3D violet for the one main action and the violet-to-magenta gradient kept for the logo.

## Brand

- The mark is the CIMA3D 3D-printer icon in Assets › Logos. Use `cima3d-mark.svg` (gradient) on `background` in both themes, `cima3d-mark-white.svg` on `primary`, `secondary` (dark ground) or photos, and `cima3d-mark-violet.svg` where only one flat colour can be printed. Don't redraw, recolour, stretch or add effects to it.
- The brand colours are `cima-violet` (#8822ff) and `cima-magenta` (#f11eff), the two ends of the logo's left-to-right gradient. The gradient (`linear-gradient(90deg, #8822ff, #f11eff)`) belongs to the logo and to large brand surfaces such as banners or poster headers; never put it on buttons, badges or text.
## Content fundamentals

- Write labels, buttons and menu items in sentence case, short and literal: "Open Menu", "Save this message", "Mark as unread", "Share via email", "Select status". A button names its action, not the outcome.
- Use plain helper copy under fields ("Helper text"). The docs describe components in one declarative sentence: "A clickable element styled as a button, suitable for various actions and interfaces."
- Mark required fields with the component's `required` prop, which adds the `destructive` asterisk. Don't type "(required)" yourself.
- Put optional context in the `description` prop, shown after the label in `surface-500` ("Label (description)"), and longer hints in `tooltip`.
- No emoji in UI copy. Address the user as "you" when needed. Keep error text specific ("Enter a valid email address").

## Visual foundations

### Color

- Build on the themable tokens, never on raw palette steps, so both themes work: `background` / `foreground` for the page, `surface` and its scale for quiet fills and borders, `primary` for the one main action, `secondary` for a high-contrast neutral action, `destructive` for anything that deletes or fails.
- `primary` is CIMA3D violet (`wg-purple-500`, #8822ff) in both themes. Use it for one primary button per view, and for checked controls, slider ranges and focus outlines. Hover is `primary-600` (#7200dc). In dark, violet on the ground is 3.3:1, fine for fills, rings and icons; set violet text there in `primary-300`.
- The `wg-purple` scale is CIMA3D violet and the `wg-pink` scale is CIMA3D magenta, both built around the logo colours (step 500 is the exact logo colour). Use magenta as the accent in brand pieces and for pink badges and tags; never behind small white text (3.3:1).
- Text inside components is `surface-900`. Secondary text (descriptions, helper text, alert bodies, placeholders) is `surface-500`, and disabled text is `surface-300`. Never put readable text in `surface-300`: it is 2.3:1 on white.
- Borders: `surface-200` on inputs and outline buttons in light, `surface-100` in dark. A hover border is `surface-300`.
- In dark, `surface-*` steps are translucent white (10% to 90%), so they work over any dark ground. Don't swap them for opaque grays.
- Floating layers (dropdown, select menu) sit on `surface-overlay` with `surface-overlay-foreground` text and `surface-overlay-focus` for the checked item. In dark, menus, popovers and tooltips use Tailwind's neutral-800 (#262626).
- Status colors come from the palette, as alerts use them: info `wg-blue` (border) on `wg-blue-50` with `wg-blue-700` text; success `wg-green` / `wg-green-50` / `wg-green-700`; warning `wg-yellow` / `wg-yellow-50` / `wg-yellow-800`; error `wg-red` / `wg-red-50` / `wg-red-700`. Each alert also carries an icon and a title, so color is never the only signal.
- Badges and tags come in gray, primary, green, purple, orange, red, pink, blue and yellow: the 50 tint as ground, 200 as outline, 700/800 as text in light, the 500 step (or 400) as text in dark.
- Palette tokens use the `wg-` prefix, as in the Tailwind classes (`bg-wg-gray-500`, `text-wg-blue-700`). `wg-<color>` alone is the 500 step.
- Contrast to know about: white on `primary` is 5.6:1 in both themes. White on `destructive` is 3.6:1 and `wg-green-700` on `wg-green-50` is 4.3:1, kept exactly as Wedges has them; use them for medium-weight UI text, not for long copy.

### Type

- Set everything in Inter (`sans`) and code in JetBrains Mono (`mono`). The Wedges docs site sets display headings in Circular, which is a licensed font and is not included here.
- `text-sm` (14/20) is the default UI size. Buttons are `button`: 14px, medium (500), 24px line height. Body copy is `text-base` (16/24).
- `text-5xl` and up ship with negative tracking. Keep it when you set large headings.
- Weights in components: 400 for text, 500 (`font-medium`) for buttons, labels and alert titles.

### Spacing, radii, borders

- Controls use border-aware padding (`padding-2px` … `padding-16px`, classes like `px-12px`): each step subtracts `--wg-border-width`, so an outline button and a filled button of the same size measure the same. Set `[--wg-border-width:1px]` on any custom bordered control.
- The default radius is `rounded-lg` (8px) for buttons, inputs, badges, alerts and menus. Use `rounded-full` for `shape="pill"`, avatars, switches, radios and status dots. Tooltips use `rounded-md` (6px).
- Expanded alerts use a 2px left border and `rounded-r-lg`. This is the only left-accent pattern, and it's reserved for that alert variant.

### Elevation and motion

- Resting bordered controls (outline buttons, inputs, select triggers, button and toggle groups) get `shadow-wg-xs`, and in dark their border moves to `surface-100`. Floating layers get `shadow-wg-overlay` (it includes a 1px hairline). In dark, dropdown and select menus drop it (`dark:shadow-none`) for a `surface` border. Slider thumbs use `shadow-wg-sm`.
- Overlays enter with the plugin's 0.3s `fadeIn{Up,Down,Left,Right}` (a 5px move plus a scale from .97) on `cubic-bezier(.2,1,.4,1)`, and leave with a 0.15s `fadeOut`. Color transitions on controls run 100ms.

### Focus and states

- The focus ring is a 2px `outline-primary` with a 2px offset, shown on `:focus-visible` only.
- Disabled controls drop to 50% opacity (primary, destructive) or move to `surface-300` text and `surface-50` borders. They also lose pointer events.

### Theming

- Light is the default. Add `class="dark"` (or `data-theme="dark"`) on `html` or on any section to switch. Themes can nest, and a `light` class inside a dark page switches that section back.
- The real library takes custom themes through `wedgesTW({ themes: { name: { extend: "dark", colors: { primary: {...} } } } })`. Each theme overrides the same themable keys these tokens list.

## Iconography

- Components use [Iconicicons](https://iconicicons.com) (`@iconicicons/react`): 24px, 1.5px outline icons that take `currentColor`. Pass them through the `before`/`after` props. Badges and tags shrink them to 16px (`size-4`).
- Wedges' own icons are in Assets › Icons: info, close, check, the tooltip arrow ("tippy") and the Lemon Squeezy mark, which the compiled Avatar still shows as its loading fallback. The CIMA3D mark is in Assets › Logos.
- No emoji or unicode glyphs as icons. Keyboard keys go through `Kbd` (`keys={["command"]}` renders ⌘).

## Using the components

- Import from `@lemonsqueezy/wedges` and add the plugin to `tailwind.config` (`plugins: [wedgesTW()]`, plus `node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}` in `content`). Requires React 18+ and Tailwind 3+.
- Here, `window.Wedges` exposes every component (`Wedges.Button`, `Wedges.Alert`…), and `components/bundle.css` is the compiled Tailwind output. Its theme colors read this system's tokens (`var(--primary)`, `var(--surface-200)`…).
- Form controls share the label props `label`, `description`, `tooltip`, `helperText`, `required`, `disabled` and `destructive`. Prefer them over hand-built labels.
- `wg-bg-*` classes paint a background and also set `--background`, so rings on avatars and status dots inside that element match it. Use `wg-bg-surface` instead of `bg-surface` behind an `AvatarGroup`.

## Not synced

- Fonts: Circular (the docs site's display face, at `apps/docs/public/fonts/circular-*.woff2`) is a commercial Lineto font. It was left out, and display text falls back to Inter. JetBrains Mono is named as a Google Fonts family, with no file.
- Tokens: the plugin's `animation`/`keyframes` (motion is described above, but this format has no motion tokens) and the `xs: 480px` screen are not included. Apart from the CIMA3D recolour of `primary`, `wg-purple` and `wg-pink`, these tokens are the library defaults.
- CIMA3D recolour in code: to match these tokens in a real project, pass the `wg-purple` and `wg-pink` values here to `wedgesTW({ themes: { light: { colors: { primary: … } }, dark: { colors: { primary: … } } } })` and Tailwind's `theme.extend.colors`.
- Components: all 27 cards are built from the real library at 3bbfc85 (esbuild IIFE over React 18.3.1, with Iconicicons bundled into each preview). The Tailwind plugin (`wedgesTW`) and the `twMerge` helper are build-time tools, so they have no card. Their types are in `components/index.d.ts`.
- Previews: the docs' Unsplash avatar photos were replaced with initials, since external images don't load in previews.
- Palette edits: `bundle.css` reads the themable tokens and the palette steps the components use. Classes the components don't use aren't in the stylesheet.
