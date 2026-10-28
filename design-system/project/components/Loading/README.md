# Loading

An animated visual loading state indicator.

## Usage

```tsx
import { Loading } from "@lemonsqueezy/wedges";
```

```tsx
<Loading />
```

## API Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"line" \| "spinner" \| "dots"` | `"line"` |  |
| `size` | `Enum` | `md` |  |
| `color` | `"primary" \| "secondary"` | `primary` |  |

Change the color using the `color` prop, or set a custom text color with a `className`.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Loading/Loading.tsx).
