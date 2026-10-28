# Badge

A compact element displaying labels, numbers, or indicators, often used for status, notifications, or categorization.

## Usage

```tsx
import { Badge } from "@lemonsqueezy/wedges";
```

```tsx
<Badge>Label</Badge>
```

## API Reference

In addition to all the props defined as `HTMLAttributes<HTMLSpanElement>`, `Badge` component also includes the following props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `stroke` | `boolean` | `false` |  |
| `after` | `ReactElement<HTMLElement>` |  |  |
| `before` | `ReactElement<HTMLElement>` |  |  |
| `color` | `BadgeColors` | `"gray"` |  |
| `shape` | `"rounded" \| "pill"` | `"rounded"` |  |
| `size` | `"sm" \| "md"` | `"md"` |  |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Badge/Badge.tsx).
