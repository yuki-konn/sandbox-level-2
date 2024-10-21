# ARIA

### Acessible Rich Internet Applications

- ARIA is an attribute used in many Bootstrap components.
- It's a way to make websites more accessible to people with disabilities.
- Approximately 27% of the world's population has visual impairments.
  This means that over 2.2 billion people worldwide
  could benefit from ARIA when navigating the web.

### ARIA ATTRIBUTES

1. `aria-current="page"`
   - `aria-current` ARIA indicates that an item is currently selected.
   - `"page"` indicates that the item is a page.
   - `"true"` that the item is currently selected.
   - Other valid values: `"step"` `"location"` `"date"` `"time"`.
   - Used on elements that can be selected.
2. `aria-disabled="true"`
   - `aria-disabled` indicates the status of an item.
   - `"true"` indicates that item is disabled.
   - Switch it to `"false"` when the item is enabled.
   - Used on elements that can be disabled and enabled.
3. `aria-label="close"`
   - Describes an item without a label.
   - `"close"` is describing a button that has a meaning, but no label.
   - Used on icons or images that have a meaning but no label.

### Enable the accessibility tree in developer tools

1.  Open developer tools
2.  Elements tab
3.  Accessibility tab
4.  Enable full-page accessibility tree
5.  Refresh the page

### Accessibility tree

The accessibility tree:

- Represents the structure of a web page.
- Only includes accessibility elements.
- How assistive technologies interpret a web page to a user.

### More semantic elements

1. `<header>`
2. `<main>`
3. `<footer>`
4. headings
5. `<p>`
6. `<article>`
   - Use for blog posts, news articles, and other independent self-contained content.
   - Example: recipe cards
7. `<section>`
   - Use to enclose themes, categories, and content with headings.
   - Example: recipe ingredients, recipe instructions
8. `<dialog>`
   - Use for a box or window that can be opened or closed.
   - Example: Bootstrap alert
   - Note: Use the open attribute to show the `<dialog>` content.
9. `<output>`
   - Use this for the result of a calculation or showing feedback.
   - Example: The form has been successfully submitted.

### Semantic attributes

1. Attributes that begin with `aria`
   - aria-current
   - aria-disabled
   - aria-label
2. `type`
   - type="password"
   - type="tel"
3. `role`
   - role="alert"
