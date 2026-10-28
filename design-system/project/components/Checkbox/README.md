# Checkbox

A user interface control enabling toggling between checked and unchecked states.

## Usage

```tsx
import { Checkbox } from "@lemonsqueezy/wedges";
```

For more advanced usage you can use `Checkbox.Root` component to customize the appearance of the checkbox.

```tsx
<Checkbox label="Label" />
```

## API Reference

`Checkbox` component extends <a href="https://www.radix-ui.com/docs/primitives/components/checkbox" target="_blank" rel='nofollow noreferrer'>Radix Checkbox</a> primitive and supports all of its props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `defaultChecked` | `boolean` |  | The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state. |
| `checked` | `boolean` |  | The controlled checked state of the checkbox. Must be used in conjunction with 'onCheckedChange'. |
| `onCheckedChange` | `function` |  | Event handler called when the checked state of the checkbox changes. |
| `disabled` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the checkbox is disabled. |
| `required` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the checkbox is required. |
| `name` | `string` |  |  |
| `value` | `string` | `"on"` |  |
| `tooltip` | `ReactNode` |  | Optional description of the label, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `label` | `ReactNode` |  | Label of the checkbox. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | `Present when disabled` |

## Accessibility

The `Checkbox` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/checkbox#accessibility" target="_blank" rel='nofollow noreferrer'>Radix Checkbox</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Checkbox/Checkbox.tsx).
