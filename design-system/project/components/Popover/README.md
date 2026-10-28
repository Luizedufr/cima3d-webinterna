# Popover

A floating panel displaying rich content, triggered by a button.

## Usage

```tsx
import { Popover } from "@lemonsqueezy/wedges";
```

```tsx
<Popover>
  <Popover.Trigger>Trigger</Popover.Trigger>
  <Popover.Content>Content</Popover.Content>
</Popover>
```

You can use `Popover.Portal` to render the content in a different location in the DOM. See API Reference for details.

```tsx
<Popover>
  <Popover.Portal>
    <Popover.Trigger>Trigger</Popover.Trigger>
    <Popover.Content>Content</Popover.Content>
  </Popover.Portal>
</Popover>
```

## API Reference

`Popover` component extends <a href="https://www.radix-ui.com/docs/primitives/components/popover" target="_blank" rel='nofollow noreferrer'>Radix Popover</a> component and supports all of its props.

### Popover

Contains all parts of a popover.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultOpen` | `boolean` | `false` | The open state of the popover when it is initially rendered. Use when you do not need to control its open state. |
| `open` | `boolean` | `false` | The controlled open state of the popover. Must be used in conjunction with 'onOpenChange'. |
| `onOpenChange` | `function` |  | Event handler called when the open state of the popover changes. |
| `modal` | `boolean` | `false` | The modality of the popover. When set to 'true', interaction with outside elements will be disabled and only popover content will be visible to screen readers. |

### Popover.Trigger

The button that toggles the popover. By default, the `Popover.Content` will position itself against the trigger.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"open" \| "closed"` |

### Popover.Content

The content of the popover

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `onOpenAutoFocus` | `function` |  | Event handler called when focus moves into the component after opening. It can be prevented by calling `event.preventDefault`. |
| `onCloseAutoFocus` | `function` |  | Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`. |
| `onEscapeKeyDown` | `function` |  | Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`. |
| `onPointerDownOutside` | `function` |  | Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`. |
| `onFocusOutside` | `function` |  | Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`. |
| `onInteractOutside` | `function` |  | Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`. |
| `forceMount` | `boolean` | `false` | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Popover.Portal`. |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The preferred side of the anchor to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled. |
| `sideOffset` | `number` | `8` | The offset of the content from the anchor in pixels. |
| `align` | `"start" \| "center" \| "end"` | `"center"` | The preferred alignment against the anchor. May change when collisions occur. |
| `alignOffset` | `number` | `0` | An offset in pixels from the 'start' or 'end' alignment options. |
| `avoidCollisions` | `boolean` | `true` | When 'true', overrides the 'side' and 'align' preferences to prevent collisions with boundary edges. |
| `collisionBoundary` | `Boundary` | `[]` | The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. |
| `collisionPadding` | `number \| Padding` | `8` | The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: '{ top: 20, left: 20 }'. |
| `arrowPadding` | `number` | `0` | The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners. |
| `sticky` | `"partial" \| "always"` | `partial` | The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless. |
| `hideWhenDetached` | `boolean` | `false` | Whether to hide the content when the trigger becomes fully occluded. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"open" \| "closed"` |
| `[data-side]` | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]` | `"start" \| "end" \| "center"` |

### Popover.Anchor

An optional element to position the `Popover.Content` against. If this part is not used, the content will position alongside the `Popover.Trigger`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

### Popover.Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `Popover.Content`. Must be rendered inside `Popover.Content`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `width` | `number` | `10` | The width of the arrow in pixels. |
| `height` | `number` | `5` | The height of the arrow in pixels. |

### Popover.Close

The button that closes the popover.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

### Popover.Portal

The portal that renders the popover content in a different location in the DOM.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `forceMount` | `boolean` | `false` | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by Popover.Content. |
| `container` | `HTMLElement` | `document.body` | Specify a container element to portal the content into. |

## Accessibility

The `Popover` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/popover#accessibility" target="_blank" rel="nofollow noreferrer">Radix Popover</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Popover/Popover.tsx).
