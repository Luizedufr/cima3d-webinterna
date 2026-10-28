# Alert

An alert box that displays a notification message to the user.

## Usage

```tsx
import { Alert } from "@lemonsqueezy/wedges";
```

```tsx
> Alert content
```

## API Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"inline" \| "expanded"` | `"inline"` |  |
| `title` | `ReactNode` |  |  |
| `children` | `ReactNode` |  | Used as a secondary text. |
| `after` | `ReactNode` |  |  |
| `before` | `ReactNode` |  |  |
| `color` | `"gray" \| "primary" \| "info" \| "success" \| "error" \| "warning"` |  |  |
| `closable` | `boolean` | `false` | Is the alert closable? If true, a close button will be displayed and when clicked on it will hide the alert element. |
| `onClose` | `MouseEventHandler<HTMLButtonElement> \| never` |  | Event handler called when the close button is clicked. It can be prevented by calling `event.preventDefault`. |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Alert/Alert.tsx).
