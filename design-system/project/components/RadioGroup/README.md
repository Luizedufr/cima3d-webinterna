# RadioGroup

A group of radio buttons, ensuring a single choice among multiple options.

## Usage

```tsx
import { RadioGroup } from "@lemonsqueezy/wedges";
```

```tsx
<RadioGroup defaultValue="value-1" label="Label">
  <RadioGroup.Item label="Value 1" value="value-1" />
  <RadioGroup.Item label="Value 2" value="value-2" />
</RadioGroup>
```

## API Reference

`RadioGroup` component extends <a href="https://www.radix-ui.com/docs/primitives/components/radio-group" target="_blank" rel='nofollow noreferrer'>Radix Radio Group</a> primitive and supports all of its props.

### RadioGroup

Contains all parts of a radio group.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `defaultValue` | `string` |  | The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items. |
| `value` | `string` |  | The controlled value of the radio item to check. Should be used in conjunction with `onValueChange`. |
| `onValueChange` | `function` |  | Event handler called when the value changes. |
| `name` | `string` |  | The name of the group. Submitted with its owning form as part of a name/value pair. |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | The orientation of the component. |
| `dir` | `"ltr" \| "rtl"` | `"ltr"` | The reading direction of the radio group. |
| `loop` | `boolean` | `true` | The reading direction of the radio group. |
| `required` | `boolean` | `false` | When `true`, indicates that the user must check a radio item before the owning form can be submitted and styles the group label accordingly. |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the radio items and styles the group label accordingly. |
| `tooltip` | `ReactNode` |  | This prop adds an optional description. When used, a trigger element is positioned adjacent to the label. Hovering over this trigger displays a tooltip with the description. |
| `description` | `ReactNode` |  | Shows additional description next to the `label`. |
| `label` | `ReactNode` |  | Group label. |

| Data attribute | Values |
| --- | --- |
| `[data-disabled]` | `Present when disabled` |

### RadioGroup.Item

An item in the group that can be checked. An `input` element will also be rendered when used within a form to ensure events propagate correctly.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `value` | `string` |  | The value given as data when submitted with a `name`. |
| `disabled` | `boolean` | `false` | When `true`, prevents user from interacting with the radio item and the item label is styled accordingly. |
| `required` | `boolean` | `false` | When `true`, indicates that the user must check the radio item before the owning form can be submitted. The item label is styled accordingly. |
| `tooltip` | `ReactNode` |  | Optional description of the label, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `label` | `ReactNode` |  | Label of the item. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"checked" \| "unchecked"` |
| `[data-disabled]` | `Present when disabled` |

## Accessibility

The `RadioGroup` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/radio-group#accessibility" target="_blank" rel='nofollow noreferrer'>Radix Radio Group</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/RadioGroup/RadioGroup.tsx).
