# Select

A dropdown component that presents a list of selectable options when triggered by a button.

## Usage

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@lemonsqueezy/wedges";
```

```tsx
<Select>
  <SelectTrigger />
    <SelectContent>
      <SelectGroup>
        <SelectItem value="item-1">Item 1</SelectItem>
        <SelectItem value="item-2">Item 2</SelectItem>
        <SelectItem value="item-3">Item 3</SelectItem>
      </SelectGroup>
    </SelectContent>
</Select>
```

You can use `SelectPortal` to render the content in a different location in the DOM. See API Reference for details.

```tsx
<Select>
  <SelectTrigger />
  <SelectPortal>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="item-1">Item 1</SelectItem>
          <SelectItem value="item-2">Item 2</SelectItem>
          <SelectItem value="item-3">Item 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectPortal>
</Select>
```

> For more advanced usage, the additional components are available to customize the content and appearance of the `Select` component. See [API Reference](#api-reference) for details.

## API Reference

### Select

Contains all the parts of a select. A styled wrapper around Radix [Select.Root](https://www.radix-ui.com/primitives/docs/components/select#root) primitive with additional features.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `string` |  | The value of the select when initially rendered. Use when you do not need to control the state of the select. |
| `value` | `string` |  | The controlled value of the select. Should be used in conjunction with `onValueChange`. |
| `onValueChange` | `function` |  | Event handler called when the value changes. |
| `defaultOpen` | `boolean` |  | The open state of the select when it is initially rendered. Use when you do not need to control its open state. |
| `open` | `boolean` |  | The controlled open state of the select. Must be used in conjunction with `onOpenChange`. |
| `onOpenChange` | `function` |  | Event handler called when the `open` state of the select changes. |
| `dir` | `"ltr" \| "rtl"` |  | The reading direction of the select when applicable. If omitted, inherits globally from Radix `DirectionProvider` or assumes LTR (left-to-right) reading mode. |
| `name` | `string` |  | The name of the select. Submitted with its owning form as part of a name/value pair. |
| `disabled` | `boolean` |  | When `true`, prevents the user from interacting with select. |
| `reqiured` | `boolean` |  | When true, indicates that the user must select a value before the owning form can be submitted. |

Also accepts the common `label`, `description`, `tooltip`, `helperText` props.

### SelectTrigger

The button that toggles the select. The `SelectContent` component is rendered when the trigger is clicked.

Also accepts the common `asChild` prop.

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"open" \| "closed"` |
| `[data-disabled]` | `Present when disabled` |
| `[data-placeholder]` | `Present when has placeholder` |

### SelectValue

The part that reflects the selected value. By default the selected item's text will be rendered. if you require more control, you can instead control the select and pass your own `children`. It should not be styled to ensure correct positioning. An optional `placeholder` prop is also available for when the select has no value.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placeholder` | `ReactNode` |  | The content that will be rendered inside the `SelectValue` when no value or `defaultValue` is set. |

Also accepts the common `asChild` prop.

### SelectIcon

A small icon often displayed next to the value as a visual affordance for the fact it can be open. By default renders a chevron icon pointed down or up depending on the `open` state, but you can use your own icon via `asChild` or use `children`.

Also accepts the common `asChild` prop.

### SelectPortal

When used, portals the content part into the `body`. By default it appends content to the `body`, but you can specify a custom `container`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `container` | `HTMLElement` | `document.body` | Specify a container element to portal the content into. |

### SelectContent

The component that pops out when the select is open. A styled wrapper around Radix [Select.Content](https://www.radix-ui.com/primitives/docs/components/select#content) primitive with additional features.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onCloseAutoFocus` | `function` |  | Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`. |
| `onEscapeKeyDown` | `function` |  | Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`. |
| `onPointerDownOutside` | `function` |  | Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`. |
| `position` | `"item-aligned" \| "popper"` | `popper` | The positioning mode to use, `item-aligned` behaves similarly to a native MacOS menu by positioning content relative to the active item. `popper` is the default and positions content in the same way as our other primitives, for example `Popover` or `DropdownMenu`. |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The preferred side of the anchor to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled. Only available when position is set to `popper`. |
| `sideOffset` | `number` | `8` | The distance in pixels from the anchor. Only available when `position` is set to `popper`. |
| `align` | `"start" \| "center" \| "end"` | `"start"` | The preferred alignment against the anchor. May change when collisions occur. Only available when `position` is set to `popper`. |
| `alignOffset` | `number` | `0` | An offset in pixels from the `start` or `end` alignment options. Only available when `position` is set to `popper`. |
| `avoidCollisions` | `boolean` | `true` | When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges. Only available when `position` is set to `popper`. |
| `collisionBoundary` | `Boundary` | `[]` | The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. Only available when `position` is set to `popper`. |
| `collisionPadding` | `number \| Padding` | `10` | The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }. Only available when `position` is set to `popper`. |
| `sticky` | `"partial" \| "always"` | `"partial"` | The sticky behavior on the align axis. `partial` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `always` will keep the content in the boundary regardless. Only available when `position` is set to `popper`. |
| `hideWhenDetached` | `boolean` | `false` | Whether to hide the content when the trigger becomes fully occluded. Only available when `position` is set to `popper`. |
| `showScrollButtons` | `boolean` | `false` | Whether to hide the `Select.ScrollUpButton` and `Select.ScrollDownButton` components. |

Also accepts the common `asChild` prop.

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"open" \| "closed"` |
| `[data-side]` | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]` | `"start" \| "end" \| "center"` |

> CSS variables are available for this component. See <a href="https://www.radix-ui.com/primitives/docs/components/select#content" target="_blank" rel='nofollow noreferrer'>Radix Select</a> for more details.

### SelectItem

The component that contains the select items.

By default `SelectItemText` and `SelectItemIndicator` are rendered inside the `SelectItem` component. You can use your own components if you need to customize it via `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` |  | The value given as data when submitted with a name. |
| `textValue` | `string` |  | Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the `SelectItemText` part. Use this when the content is complex, or you have non-textual content inside. |

Also accepts the common `asChild`, `disabled` props.

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"checked" \| "unchecked"` |
| `[data-highlighted]` | `Present when highlighted` |
| `[data-disabled]` | `Present when disabled` |

### SelectItemText

The textual part of the item. It should only contain the text you want to see in the trigger when that item is selected. It should not be styled to ensure correct positioning.

Also accepts the common `asChild` prop.

### SelectItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both. By default it renders a checkmark icon.

Also accepts the common `asChild` prop.

### SelectGroup

Also accepts the common `asChild` prop.

### SelectLabel

Used to render the label of a group. It won't be focusable using arrow keys.

Also accepts the common `asChild` prop.

### SelectSeparator

Used to visually separate items in the select.

Also accepts the common `asChild` prop.

## Accessibility

The `Select` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/select#accessibility" target="_blank" rel='nofollow noreferrer'>Radix Select</a> primitive.

Each icon is styled with custom colors to represent different statuses.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Select/Select.tsx).
