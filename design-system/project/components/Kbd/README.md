# Kbd

A visual representation of keyboard inputs, commands, or shortcuts in the UI.

## Usage

```tsx
import { Kbd } from "@lemonsqueezy/wedges";
```

```tsx
<Kbd keys={["option", "command"]}>K</Kbd>
```

## API Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `Enum` | `"xs"` |  |
| `keys` | `KbdKey \| KbdKey[]` |  |  |

## Accessibility

Keys are labeled with the `title` attribute describing the key. For example, the `option` key is labeled with `title="option"`.

`KbdKey`type is defined like this:
```tsx
type KbdKey =
  | "command"
  | "shift"
  | "ctrl"
  | "option"
  | "enter"
  | "delete"
  | "escape"
  | "tab"
  | "capslock"
  | "up"
  | "right"
  | "down"
  | "left"
  | "pageup"
  | "pagedown"
  | "home"
  | "end"
  | "help"
  | "space";
```

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Badge/Badge.tsx).
