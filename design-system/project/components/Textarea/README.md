# Textarea

UI element for multi-line text input, enabling users to enter data or information.

## Usage

```tsx
import { Textarea } from "@lemonsqueezy/wedges";
```

```tsx
<Textarea />
```

## API Reference

In addition to all the props defined as `TextareaHTMLAttributes<HTMLTextAreaElement>`, `Textarea` component also includes the following props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the textarea is disabled. |
| `required` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the textarea is required. |
| `tooltip` | `ReactNode` |  | Optional description of the textarea, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `label` | `ReactNode` |  | Label of the textarea. |
| `destructive` | `boolean` | `false` | Specifies whether this textarea has a destructive styling. If set to `true`, the textarea will be styled differently to indicate a destructive action. |
| `helperText` | `ReactNode` |  | Additional text or information to guide the user. It's rendered below the textarea. |

The textarea in the example below is marked as `required`. It also includes a `tooltip` and is styled with a `destructive` theme.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Textarea/Textarea.tsx).
