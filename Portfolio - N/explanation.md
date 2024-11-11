###  app.js

This code uses the `IntersectionObserver` API to monitor when a specific element (in this case, an element with the class `.skills`) comes into view on the webpage. When the `.skills` element enters the viewport, it triggers animations on various progress bars inside it by adding specific CSS classes (e.g.,` animation-1`, `animation-2`, etc.) to them.

Here's a breakdown of how it works:

1. **IntersectionObserver Creation:** An `IntersectionObserver` is created with a callback function that fires whenever the observed element enters or exits the viewport.

2. **Observing Entries:** The callback processes the `entries`, which are the elements being observed. For each entry, the following steps occur:

- Selects all elements inside the observed element (e.g., `.progress-bar-70`, `.progress-bar-60`, etc.).
- Checks if the observed element is intersecting (i.e., in the viewport). If it is:
    - It adds the corresponding animation class (`animation-1`, `animation-2`, etc.) to the progress bars.
- If the element is no longer in view, it removes the animation classes.

3. **Observer Activation:** The `observer.observe()` method is called on an element with the class `.skills`, making it the target of the intersection observation.

**Purpose:** The goal of this code is to animate progress bars only when the `.skills` section comes into view, improving performance by only activating animations when they're visible on the screen.

### CSS

```css
.skills__frontend .box-100 .box-70 {
	width: 70%;
}
```
This CSS rule targets an element with the class .box-70 that is a descendant of an element with the classes .box-100 and .skills__frontend. The rule sets the width of .box-70 to 70%.

### Breakdown of the selector:

- `.skills__frontend`: This class likely represents a section or container, such as a part of a "Skills" section.
- `.box-100`: This is a nested container inside `.skills__frontend`.
- `.box-70`: This is the element whose width is being defined, and it must be inside `.box-100`.

**Effect:**

Any `.box-70` element within a `.box-100 container`, which in turn is within a `.skills__frontend` container, will have a width of 70% relative to its parent container (`.box-100`).   

```css
.p-y-1 {
	padding: .5rem 0;
}
```
The CSS class .p-y-1 applies vertical padding (top and bottom) to an element.

### Breakdown:

- `.p-y-1`: This class targets an element and applies padding to its top and bottom (y-axis).

- `padding: .5rem 0;`:

    - `.5rem`: The top and bottom padding is set to 0.5 rem (relative to the root font size). In most cases, 1 rem is equivalent to 16px, so `.5rem` is typically 8px.
    - `0`: The left and right padding is set to 0, meaning no horizontal padding is applied.

**Effect:**

This class will add `0.5rem` (8px) of padding to the top and bottom of any element that it is applied to, with no padding on the left and right.