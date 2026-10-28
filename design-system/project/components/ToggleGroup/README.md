# ToggleGroup

A set of two-state buttons that can be toggled on or off.

## Usage

```tsx
import { ToggleGroup } from "@lemonsqueezy/wedges";
```

```tsx
<ToggleGroup defaultValue="value-1">
  <ToggleGroup.Item value='value-1'>Value 1</ButtonGroup.Item>
  <ToggleGroup.Item value='value-2'>Value 2</ButtonGroup.Item>
</ButtonGroup>
```

## API Reference

### ToggleGroup

Contains a set of `ToggleGroup.Item` components. Extends the <a href="https://www.radix-ui.com/primitives/docs/components/toggle-group" rel="nofollow noreferrer" target="_blank">Radix Toggle Group</a> primitive and includes all of its props. Alternatively, `ToggleGroup.Root` can be used in place of this component.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md"` | `"md"` |  |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `defaultValue` | `string \| string[]` |  | The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items. |
| `type` | `"single" \| "multiple"` | `single` | Determines whether a single or multiple items can be pressed at a time. |
| `rovingFocus` | `boolean` | `true` | When false, navigating through the items using arrow keys will be disabled. |
| `value` | `string` | `[]` | The controlled value of the pressed item or items if type is `multiple`. When type is `multiple` it must be used in conjunction with `onValueChange`. |
| `onValueChange` | `function` |  | Event handler called when the value changes. |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | The orientation of the component. |
| `dir` | `"ltr" \| "rtl"` | `"ltr"` | The reading direction of the radio group. |
| `loop` | `boolean` | `true` | The reading direction of the radio group. |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the radio items and styles the group label accordingly. |

### ToggleGroup.Item

Includes all props from the `Toggle` component.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/ToggleGroup/ToggleGroup.tsx).
