# Switch

A control that allows the user to toggle between checked and not checked.

## Usage

```tsx
import { Switch } from "@lemonsqueezy/wedges";
```

```tsx
<Switch label="Label" />
```

## API Reference

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/switch" rel="nofollow noreferrer" target="_blank">Radix Switch</a> primitive and includes all of its props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | When `true`, additional styles will be applied to indicate that the switch is disabled. |
| `required` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the switch is required. |
| `name` | `string` |  | The name of the switch. Submitted with its owning form as part of a name/value pair. |
| `value` | `string` | `"on"` | The value given as data when submitted with a `name`. |
| `tooltip` | `ReactNode` |  | Optional description of the label, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `label` | `ReactNode` |  | Label of the checkbox. |
| `alignLabel` | `"start" \| "end"` | `"end"` |  |
| `onCheckedChange` | `function` |  | Event handler called when the state of the switch changes. |
| `checked` | `boolean` |  | The controlled state of the switch. Must be used in conjunction with `onCheckedChange`. |
| `defaultChecked` | `boolean` |  | The state of the switch when it is initially rendered. Use when you do not need to control its state. |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"checked" \| "unchecked"` |
| `[data-disabled]` | `Present when disabled` |

## Accessibility

The `Switch` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/switch#accessibility" target="_blank" rel="nofollow noreferrer">Radix Switch</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Switch/Switch.tsx).
