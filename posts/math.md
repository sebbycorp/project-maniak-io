---
title: 'Render Math With Mathjax'
date: '2022-12-09'
tags:
  - Markdown syntax
  - Mathjax
  - example
image: /images/mathjax.png
description: 'Math equations can be rendered using Mathjax syntax with AMS symbol support.'
mathjax: true
---

## Mathjax

Math equations can be rendered using [Mathjax](https://www.mathjax.org) syntax with AMS symbol support.

Optionally enable this on a per-page basis by adding to your frontmatter `mathjax: true`

Then, use " **$$** your math equation **$$** " pattern on a line by itself to render a block equation:

```
$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$
```

The raw version is:

```
$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$
```

Write in-line equations with

```
\\( ... \\)
```

like

```
\\( x^n / y \\)

```

It's easy! =)
