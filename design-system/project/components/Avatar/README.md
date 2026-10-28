# Avatar

An image element with a fallback for representing the user.

## Usage

```tsx
import { Avatar } from "@lemonsqueezy/wedges";
```

```tsx
<Avatar
  alt="Image alt text"
  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
/>
```

For more advanced usage, you can use the `Avatar.Root` component to compose your own avatar.

```tsx
<Avatar.Root>
  <Avatar.Image
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
    alt="Image alt text"
  />
  <Avatar.Fallback>W</Avatar.Fallback>
  <Avatar.Notification />
  <Avatar.Status />
</Avatar.Root>
```

## API Reference

### Avatar

Represents an avatar image. Extends the <a href="https://www.radix-ui.com/primitives/docs/components/avatar#image" rel="nofollow noreferrer" target="_blank">Radix Avatar Image</a> primitive and includes all of its props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `initials` | `string` |  |  |
| `size` | `"xxs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` |  |
| `status` | `"primary" \| "gray" \| "green" \| "yellow" \| "red"` | `"gray"` |  |
| `notification` | `"primary" \| "gray" \| "green" \| "yellow" \| "red"` | `"gray"` |  |
| `delayMs` | `number` |  |  |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

### Avatar.Root

When using inner components, you must render the `Avatar.Root` component as a wrapper to enclose inner `Avatar` components.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

### Avatar.Image

The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange` handler if you need more control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `onLoadingStatusChange` | `function` |  | A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading. |

### Avatar.Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections.

For more control, use the `onLoadingStatusChange` handler on `Avatar.Image`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `delayMs` | `number` |  | Useful for delaying rendering so it only appears for those with slower connections. |

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Avatar/Avatar.tsx).
