# Slider

An interactive input slider that allows users to select a value from a specified range.

## Usage

```tsx
import { Slider } from "@lemonsqueezy/wedges";
```

```tsx
<Slider />
```

For more advanced usage, you can use the `Slider.Root` component to compose your own slider. These components include pre-defined styles and accessiblity features.

```tsx
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Thumb />
</Slider.Root>
```

## API Reference

The Slider component is built on top of the <a href="https://www.radix-ui.com/primitives/docs/components/slider" rel="nofollow noreferrer" target="_blank">Radix Slider</a> primitive.

### Slider

The Wedges component of the Slider. In most cases this is the only Slider component you will need to use.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `number[]` |  | The value of the slider when initially rendered. Use when you do not need to control the state of the slider. |
| `value` | `number[]` |  | The controlled value of the slider. Must be used in conjunction with onValueChange. |
| `onValueChange` | `function` |  | Event handler called when the value changes. |
| `onValueCommit` | `function` |  | Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service. |
| `name` | `string` |  | The name of the slider. Submitted with its owning form as part of a name/value pair. |
| `orientation` | `"vertical" \| "horizontal"` | `"horizontal"` | The orientation of the slider. |
| `dir` | `"ltr" \| "rtl"` |  | The reading direction of the slider. |
| `inverted` | `boolean` | `false` | Whether the slider is visually inverted. |
| `min` | `number` | `0` | The minimum value for the range. |
| `max` | `number` | `100` | The maximum value for the range. |
| `step` | `number` | `1` | The stepping interval. |
| `minStepsBetweenThumbs` | `number` | `0` | The minimum permitted `step`s between multiple thumbs. |

Also accepts the common `label`, `description`, `tooltip`, `helperText`, `required`, `disabled`, `before`, `after` props.

### Slider.Root

Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `number[]` |  | The value of the slider when initially rendered. Use when you do not need to control the state of the slider. |
| `value` | `number[]` |  | The controlled value of the slider. Must be used in conjunction with onValueChange. |
| `onValueChange` | `function` |  | Event handler called when the value changes. |
| `onValueCommit` | `function` |  | Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service. |
| `name` | `string` |  | The name of the slider. Submitted with its owning form as part of a name/value pair. |
| `orientation` | `"vertical" \| "horizontal"` | `"horizontal"` | The orientation of the slider. |
| `dir` | `"ltr" \| "rtl"` |  | The reading direction of the slider. |
| `inverted` | `boolean` | `false` | Whether the slider is visually inverted. |
| `min` | `number` | `0` | The minimum value for the range. |
| `max` | `number` | `100` | The maximum value for the range. |
| `step` | `number` | `1` | The stepping interval. |
| `minStepsBetweenThumbs` | `number` | `0` | The minimum permitted `step`s between multiple thumbs. |

| Data attribute | Values |
| --- | --- |
| `[data-disabled]` | `Present when disabled` |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Slider.Track

The track that contains the `Slider.Range`.

Also accepts the common `asChild` prop.

| Data attribute | Values |
| --- | --- |
| `[data-disabled]` | `Present when disabled` |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Slider.Range

The range part. Must live inside `Slider.Track`.

Also accepts the common `asChild` prop.

| Data attribute | Values |
| --- | --- |
| `[data-disabled]` | `Present when disabled` |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Slider.Thumb

The range part. Must live inside `Slider.Track`.

Also accepts the common `asChild` prop.

| Data attribute | Values |
| --- | --- |
| `[data-disabled]` | `Present when disabled` |
| `[data-orientation]` | `"vertical" \| "horizontal"` |
| `[data-state]` | `"active" \| "inactive"` |

## Accessibility

Adheres to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/slidertwothumb" target="_blank" rel='noreferrer nofollow'>Slider WAI-ARIA</a> design pattern.

Use `orientation` prop to create vertical sliders.

You can disable the slider by using the `disabled` prop.

Use range values:

Controlled component:

Playground:

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Slider/Slider.tsx).
