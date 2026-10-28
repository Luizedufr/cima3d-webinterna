# Label

An accessible label linked to form controls for better clarity and usability.

## Usage

```tsx
import { Label } from "@lemonsqueezy/wedges";
```

```tsx
<Label htmlFor="username">Username</Label>
```

## API Reference

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/label" rel="nofollow noreferrer" target="_blank">Radix Label</a> primitive and includes all of its props.

### Label

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `htmlFor` | `string` |  | The id of the element the label is associated with. |
| `tooltip` | `ReactNode` |  | Optional description of the label, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `required` | `boolean` | `false` | If set to `true`, the label will be styled to indicate that the field associated with the label is required. |
| `disabled` | `boolean` | `false` | If set to `true`, the label will be styled to indicate that the field associated with the label is disabled. |

### Label.Helper

Renders supplementary information, typically displayed below the label. In addition to all the props defined as `HTMLAttributes<HTMLSpanElement>` props, it also accepts the following:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `error` | `boolean` | `false` | If set to `true`, the helper label will be styled to indicate that the field associated with the label has errors. Alternatively, you can set `aria-invalid` to `true`. |
| `disabled` | `boolean` | `false` | If set to `true`, the label will be styled to indicate that the field associated with the label is disabled. |

## Accessibility

The `Label` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/label#accessibility" target="_blank" rel="nofollow noreferrer">Radix Label</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Label/Label.tsx).
