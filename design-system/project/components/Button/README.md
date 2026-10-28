# Button

A clickable element styled as a button, suitable for various actions and interfaces.

## Usage

```tsx
import { Button } from "@lemonsqueezy/wedges";
```

```tsx
<Button>Button</Button>
```

## API Reference

In addition to all the props defined as `ButtonHTMLAttributes<HTMLButtonElement>`, `Button` component also includes the following props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. This child component must be a valid React component. |
| `after` | `ReactElement<HTMLElement>` |  |  |
| `before` | `ReactElement<HTMLElement>` |  |  |
| `disabled` | `boolean` | `false` |  |
| `isIconOnly` | `boolean` | `false` | If set to `true`, styles will be adjusted for an improved appearance when only an icon is present. |
| `destructive` | `boolean` | `false` | Specifies whether this button has a destructive action. If set to `true`, the button will be styled differently to indicate that it will perform a destructive action. |
| `shape` | `"rounded" \| "pill"` | `"rounded"` |  |
| `size` | `"xs-icon" \| "sm" \| "md"` | `"md"` |  |
| `variant` | `"primary" \| "secondary" \| "tertiary" \| "outline" \| "transparent" \| "link"` | `"primary"` |  |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Button/Button.tsx).
