# ProgressBar

A progress bar visually showing the percentage of a task completed.

## Usage

```tsx
import { ProgressBar } from "@lemonsqueezy/wedges";
```

```tsx
<ProgressBar value={50} />
```

## API Reference

`ProgressBar` component extends the <a href="https://www.radix-ui.com/docs/primitives/components/progress" target="_blank" rel='nofollow noreferrer'>Radix Progress</a> component and supports all of its props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| `value` | `number \| null` |  | The progress value. |
| `max` | `number` | `100` | The maximum progress value. |
| `getValueLabel` | `function` |  | A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value. |
| `variant` | `"default" \| "inline"` | `"default"` | The variant of the progress bar. |
| `color` | `Enum` | `"primary"` | The color of the filled progress bar. |
| `disabled` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the progress bar is disabled. |
| `tooltip` | `ReactNode` |  | Optional description of the progress bar, shown on hover. |
| `description` | `ReactNode` |  | Additional information displayed next to the label. |
| `label` | `ReactNode` |  | Label of the input. |
| `helperText` | `ReactNode` |  | Additional text or information to guide the user. It's rendered below the progress bar. |
| `indicator` | `ReactNode` |  | Typically a text or icon element indicating the current progress value. |
| `afterIndicator` | `ReactNode` |  | The slot to be rendered after the indicator. |
| `disableAnimation` | `boolean` | `false` | If set to `true`, the progress bar will not animate. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"complete" \| "indeterminate" \| "loading"` |
| `[data-value]` | `The current value` |
| `[data-max]` | `The max value` |

## Accessibility

The `ProgressBar` component supports all accessibility features of the <a href="https://www.radix-ui.com/primitives/docs/components/progress#accessibility" target="_blank" rel="nofollow noreferrer">Radix Progress</a> primitive.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Progress/ProgressBar.tsx).
