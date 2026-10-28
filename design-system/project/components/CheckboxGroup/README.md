# CheckboxGroup

A visual group of Checkbox controls, allowing for the selection of multiple options within a set.

## Usage

```tsx
import { CheckboxGroup } from "@lemonsqueezy/wedges";
```

```tsx
<CheckboxGroup label="Group Label">
  <CheckboxGroup.Item label="Option 1" />
  <CheckboxGroup.Item label="Option 2" />
</CheckboxGroup>
```

## API Reference

### CheckboxGroup

Alternatively, `CheckboxGroup.Root` can be used in place of this component. Besides all props from `HTMLAttributes<HTMLDivElement>`, `CheckboxGroup` also includes these additional props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` |  |
| `required` | `boolean` | `false` | If set to `true`, the label will be styled to indicate that the field is required. |
| `tooltip` | `ReactNode` |  | Optional description of the group label, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the group label. |
| `label` | `ReactNode` |  | Main group label. |

### CheckboxGroup.Item

Shares all the properties of the `Checkbox` component. Details can be found [here](/components/checkbox#api-reference).

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/CheckboxGroup/CheckboxGroup.tsx).
