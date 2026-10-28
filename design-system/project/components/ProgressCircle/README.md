# ProgressCircle

A progress circle visually showing the percentage of a task completed.

## Usage

```tsx
import { ProgressCircle } from "@lemonsqueezy/wedges";
```

```tsx
<ProgressCircle value={50} />
```

## API Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number \| null` |  | The progress value. |
| `max` | `number` | `100` | The maximum progress value. |
| `getValueLabel` | `function` |  | A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value. |
| `color` | `Enum` | `"primary"` | The color of the filled progress bar. |
| `disabled` | `boolean` | `false` | If set to `true`, additional styles will be applied to indicate that the progress bar is disabled. |
| `size` | `Enum` | `"md"` | The size of the progress bar. |
| `disableAnimation` | `boolean` | `false` | If set to `true`, the progress bar will not animate. |

| Data attribute | Values |
| --- | --- |
| `[data-state]` | `"complete" \| "indeterminate" \| "loading"` |
| `[data-value]` | `The current value` |
| `[data-max]` | `The max value` |

## Accessibility

Adheres to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/meter" target="_blank" rel="nofollow noreferrer">`progressbar` role requirements</a>.

The consumer supplies the content (children, labels, items) and handles state through the props above; Wedges classes need Tailwind with the `wedgesTW()` plugin, or this system's `components/bundle.css`.

Source: `packages/wedges/src/components/` in lmsqueezy/wedges (packages/wedges/src/components/Progress/ProgressCircle.tsx).
