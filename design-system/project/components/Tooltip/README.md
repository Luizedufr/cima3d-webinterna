# Tooltip

A small box that appears when hovering over a UI element, providing additional information.

## Usage

For a quick usage, use the `Tooltip` component directly.

```tsx
import { Tooltip } from "@lemonsqueezy/wedges";
```

```tsx
<Tooltip content="Tooltip Content" />
```

For more advanced usage, inner components are exported from the `Tooltip` component.

```tsx
<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger />
    <Tooltip.Portal>
      <Tooltip.Content>
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>
```

## API Reference

### Tooltip

Use this component for a quick usage.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultOpen` | `boolean` |  | The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state. |
| `open` | `boolean` |  | The controlled open state of the tooltip. Must be used in conjunction with `onOpenChange`. |
| `onOpenChange` | `function` |  | Event handler called when the open state of the tooltip changes. |
| `delayDuration` | `number` | `200` | Override the duration given to the `Provider` to customise the open delay for a specific tooltip. |
| `disableHoverableContent` | `boolean` | `false` | Prevents `Tooltip.Content` from remaining open when hovering. Disabling this has accessibility consequences. |
| `animation` | `boolean` | `true` | If set to `true`, the tooltip displays with animation effects during its opening and closing actions. |
| `arrow` | `boolean` | `true` | Whether to show an arrow pointing towards the element the tooltip is associated with. |
| `children` | `ReactNode` |  | Specify a custom trigger element to replace the default information icon. |
| `color` | `"primary" \| "secondary" \| "soft"` | `"primary"` |  |
| `content` | `ReactNode` |  | The content to display inside the tooltip. |
| `delayDuration` | `number` |  | The duration (in milliseconds) to delay before showing/hiding the tooltip. |
| `open` | `boolean` |  | If set to `true`, the tooltip will be open on load. |
| `onOpenChange` | `function` |  | Event handler called when the open state of the tooltip changes. |
| `size` | `"sm" \| "md"` | `"sm"` |  |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. This is passed to `Tooltip.Trigger`. |
| `onEscapeKeyDown` | `function` |  | Event handler called when the escape key is down. |
| `onPointerDownOutside` | `function` |  | Event handler called when a pointer event occurs outside the bounds of the component. |
| `forceMount` | `boolean` |  | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` |  |
| `sideOffset` | `number` | `2` | The distance in pixels from the trigger. |
| `align` | `"start" \| "center" \| "end"` | `"center"` |  |
| `alignOffset` | `number` | `-12` | An offset in pixels from the "start" or "end" alignment options. |
| `avoidCollisions` | `boolean` | `true` | When set to `true`, this option overrides `side` and `align` preferences to avoid collisions with boundary edges. |
| `collisionBoundary` | `"Element" \| "null" \| "Array<Element \| null>"` | `[]` | Specify the element that acts as the collision boundary. Viewport is the default setting, but you can use other elements for collision detection. |
| `collisionPadding` | `"number" \| "Partial<Record<Side, number>>"` | `0` | The pixel distance for collision detection from boundary edges. Accepts a single number for uniform padding, or an object like `{ top: 20, left: 20 }` for specific sides. |
| `arrowPadding` | `"number"` | `0` | The padding between the arrow and the content edges, preventing content with border-radius from overflowing the corners. |
| `sticky` | `"partial" \| "always"` | `"partial"` | The align axis sticky behavior. "partial" ensures content stays within the boundary if the trigger is even partially within, while "always" maintains content inside the boundary under all circumstances. |
| `hideWhenDetached` | `boolean` | `false` | Whether to conceal the content once the trigger is completely obscured. |

### Tooltip.Provider

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/tooltip#provider" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Provider</a> primitive with custom configuration.

### Tooltip.Root

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/tooltip#root" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Root</a> primitive with custom configuration.

### Tooltip.Trigger

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/tooltip#trigger" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Trigger</a> primitive with custom styling.

### Tooltip.Arrow

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/tooltip#arrow" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Arrow</a> primitive with custom styling.

### Tooltip.Content

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/tooltip#content" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Content</a> primitive with custom styling.

### Tooltip.Portal

Exports the <a href="https://www.radix-ui.com/primitives/docs/components/tooltip#portal" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Portal</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Tooltip/Tooltip.tsx).
