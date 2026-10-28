# Tabs

A component that organizes content into multiple sections, with a tabbed interface for navigation between these sections.

## Usage

```tsx
import { Tabs } from "@lemonsqueezy/wedges";
```

```tsx
<Tabs defaultValue="tab-1">
  <Tabs.List>
    <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab-1">Tab 1 content</Tabs.Content>
  <Tabs.Content value="tab-2">Tab 2 content</Tabs.Content>
</Tabs>
```

## API Reference

Extends the <a href="https://www.radix-ui.com/primitives/docs/components/tabs" rel="nofollow noreferrer" target="_blank">Radix Tabs</a> primitive and includes all of its props.

## Accessibility

The `Tabs` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/tabs#accessibility" target="_blank" rel="nofollow noreferrer">Radix Tabs</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Tabs/Tabs.tsx).
