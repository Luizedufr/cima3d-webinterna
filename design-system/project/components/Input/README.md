# Input

A form element for user text input, resembling a standard textarea field.

## Usage

```tsx
import { Input } from "@lemonsqueezy/wedges";
```

```tsx
<Input />
```

## API Reference

In addition to all the props defined as `React.InputHTMLAttributes<HTMLInputElement>`, `Input` component also includes the following props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the input is disabled. |
| `required` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the input is required. |
| `tooltip` | `ReactNode` |  | Optional description of the input, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `label` | `ReactNode` |  | Label of the input. |
| `destructive` | `boolean` | `false` | Specifies whether this input has a destructive styling. If set to `true`, the input will be styled differently to indicate a destructive action. |
| `helperText` | `ReactNode` |  | Additional text or information to guide the user. It's rendered below the input. |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Input/Input.tsx).
