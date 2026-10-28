# ButtonGroup

A collection of buttons grouped together for related actions enhancing UI organization.

## Usage

```tsx
import { ButtonGroup } from "@lemonsqueezy/wedges";
```

```tsx
<ButtonGroup>
  <ButtonGroup.Item>Button</ButtonGroup.Item>
  <ButtonGroup.Item>Button</ButtonGroup.Item>
</ButtonGroup>
```

## API Reference

### ButtonGroup

Alternatively, `ButtonGroup.Root` can be used in place of this component. Besides all props from `HTMLAttributes<HTMLDivElement>`, `ButtonGroup` also includes these additional props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md"` | `"md"` |  |
| `disabled` | `boolean` | `false` | Disable all actions on buttons within this group. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The orientation of the button group. |

### ButtonGroup.Item

Includes all props from the `Button` component, with the exception of `variant`, `shape`, and `size` props.

The type `ButtonGroupItemProps` is defined as follows:

```tsx
type ButtonGroupItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  "variant" | "shape" | "size"
>;
```

Available component props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. This child component must be a valid React component. |
| `after` | `ReactElement<HTMLElement>` |  |  |
| `before` | `ReactElement<HTMLElement>` |  |  |
| `disabled` | `boolean` | `false` |  |
| `isIconOnly` | `boolean` | `false` | If set to `true`, styles will be adjusted for an improved appearance when only an icon is present. |
| `destructive` | `boolean` | `false` | Specifies whether this button has a destructive action. If set to `true`, the button will be styled differently to indicate that it will perform a destructive action. |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/ButtonGroup/ButtonGroup.tsx).
