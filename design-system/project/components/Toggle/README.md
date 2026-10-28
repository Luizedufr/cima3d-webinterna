# Toggle

A two-state button that can be either on or off.

## Usage

```tsx
import { Toggle } from "@lemonsqueezy/wedges";
```

```tsx
<Toggle>Toggle</Toggle>
```

## API Reference

Along with inheriting all props from the <a href="https://www.radix-ui.com/primitives/docs/components/toggle" target="_blank" rel="noreferrer nofollow">Radix Toggle</a> primitive, this component also supports all `Button` component props, except for the `variant` prop, which is limited to `outline` and `transparent` options.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultPressed` | `boolean` |  | The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state. |
| `pressed` | `boolean` |  | The controlled pressed state of the toggle. Must be used in conjunction with `onPressedChange`. |
| `onPressedChange` | `function` |  | Event handler called when the pressed state of the toggle changes. |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. This child component must be a valid React component. |
| `after` | `ReactElement<HTMLElement>` |  |  |
| `before` | `ReactElement<HTMLElement>` |  |  |
| `disabled` | `boolean` | `false` |  |
| `isIconOnly` | `boolean` | `false` | If set to `true`, styles will be adjusted for an improved appearance when only an icon is present. |
| `destructive` | `boolean` | `false` | Specifies whether this button has a destructive action. If set to `true`, the button will be styled differently to indicate that it will perform a destructive action. |
| `shape` | `"rounded" \| "pill"` | `"rounded"` |  |
| `size` | `"xs-icon" \| "sm" \| "md"` | `"md"` |  |
| `variant` | `"outline" \| "transparent"` | `"transparent"` |  |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"on" \| "off"` |
| `[data-disabled]` | `Present when disabled` |

## Accessibility

The `Toggle` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/toggle#accessibility" target="_blank" rel="nofollow noreferrer">Radix Toggle</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Toggle/Toggle.tsx).
