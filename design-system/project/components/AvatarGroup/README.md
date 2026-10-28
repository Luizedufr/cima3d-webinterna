# AvatarGroup

A collection of Avatar elements.

## Usage

```tsx
import { AvatarGroup } from "@lemonsqueezy/wedges";
```

```tsx
<AvatarGroup
  items={[
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop",
      alt: "Avatar 1",
    },
    {
      src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop",
      alt: "Avatar 2",
    },
    {
      src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop",
      alt: "Avatar 2",
    },
  ]}
/>
```

For more advanced usage, `AvatarGroup.Root` component can be used to compose your own group of `AvatarGroup.Item`.

```tsx
<AvatarGroup.Root>
  <AvatarGroup.Item
    alt="Avatar 1"
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
  />
  <AvatarGroup.Item
    alt="Avatar 2"
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
  />
  <AvatarGroup.Item
    alt="Avatar 3"
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
  />
  <AvatarGroup.Label>3,000 followers</AvatarGroup.Label>
</AvatarGroup.Root>
```

## API Reference

### AvatarGroup

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `AvatarGroupAvatarProps[]` |  |  |
| `size` | `"xs" \| "sm" \| "md" \| \| "lg" \| "xl" \| "2xl"` | `"md"` |  |
| `moreLabel` | `ReactNode` |  |  |
| `previousOnTop` | `boolean` | `false` |  |

### AvatarGroup.Root

Includes all the props of the `HTMLAttributes<HTMLDivElement>`.

### AvatarGroup.Item

Includes all the props of the `Avatar` component.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `initials` | `string` |  |  |
| `size` | `"xxs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl` | `"md"` |  |
| `status` | `"primary" \| "gray" \| "green" \| "yellow" \| "red"` | `"gray"` |  |
| `notification` | `"primary" \| "gray" \| "green" \| "yellow" \| "red"` | `"gray"` |  |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

### AvatarGroup.Label

Represents label in the avatar group. In addition to all the props defined as `HTMLAttributes<HTMLDivElement>`, `AvatarGroup.Label` component also includes the following props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` |  |  |
| `size` | `"xxs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` |  |

The props type is defined as follows:

```tsx
type AvatarMoreLabelProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: React.ReactNode;
  size?: AvatarProps["size"];
};
```

For automatic inheritance of background color for borders in `AvatarGroup`, use the `wg-bg-{color}` utility class on parent element instead of `bg-{color}`. For example:

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/AvatarGroup/AvatarGroup.tsx).
