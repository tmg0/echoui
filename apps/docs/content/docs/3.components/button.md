---
title: 'Button'
description: 'Buttons allow users to perform actions and choose with a single tap.'
---

# Button

Buttons allow users to perform actions and choose with a single tap.

---

## Usage

:code-demo{files=/components/content/button/usage.vue}

### Disabled

:code-demo{files=/components/content/button/disabled.vue}

### Sizes

:code-demo{files=/components/content/button/sizes.vue}

### Radius

:code-demo{files=/components/content/button/radius.vue}

### Colors

:code-demo{files=/components/content/button/colors.vue}

### Variants

:code-demo{files=/components/content/button/variants.vue}

### Loading

Pass the `isLoading` prop to display a `Spinner` component inside the button.

:code-demo{files=/components/content/button/loading.vue}

You can also customize the loading spinner by passing the a custom component to the `spinner` prop.

:code-demo{files=/components/content/button/loading-custom.vue}

### With Icons

You can add icons to the Button by passing the `startContent` or `endContent` slots.

:code-demo{files=/components/content/button/icons.vue}

### Icon Only

You can also display a button without text by passing the `isIconOnly` prop and the desired icon as children.

:code-demo{files=/components/content/button/icon-only.vue}
