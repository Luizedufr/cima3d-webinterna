# Tag

A versatile tag component for categorizing or labeling content.

## Usage

```tsx
import { Tag } from "@lemonsqueezy/wedges";
```

```tsx
<Tag>Tag</Tag>
```

## API Reference

`Tag` component supports all props of the `Badge` component. In addition to that, it also supports the following props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `closable` | `boolean` | `false` | Is the alert closable? If true, a close button will be displayed and when clicked on it will hide the alert element. |
| `avatar` | `ReactElement<typeof Avatar>` |  | An optional avatar to display within the tag. |
| `before` | `ReactElement<HTMLElement>` |  |  |
| `closeIcon` | `ReactElement<HTMLElement>` |  | Specify alternative close icon to display within the tag. |
| `onClose` | `MouseEventHandler<HTMLButtonElement> \| never` |  | Event handler called when the close button is clicked. It can be prevented by calling `event.preventDefault`. |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Tag/Tag.tsx).
