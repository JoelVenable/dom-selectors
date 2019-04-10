# dom-selectors


## Practice

Add the following code to a new HTML file. Make sure you include a stylesheet named `blog.css`.

```html
<body>
  <article class="article">
    <section class="article__header">
      Welcome to my blog
    </section>
    <section class="article__content">
      Copper mug small batch meh plaid flexitarian. Before they
      sold out occupy chartreuse hot chicken, la croix
      fingerstache offal VHS air plant. Humblebrag blue bottle
      cred af jean shorts etsy copper mug chicharrones cronut
      art party scenester pabst chillwave. Distillery 8-bit
      pabst fashion axe, tousled cloud bread bushwick roof party
      franzen quinoa fixie.
    </section>
    <aside class="aside_box--dark dashed">
      <div class="article__header">
        Very important box header
      </div>
      Messenger bag sriracha tote bag intelligentsia air plant
      leggings.
    </aside>
    <section class="article__footer">
      Author: Steve Brownlee
    </section>
  </article>
</body>
```

> blog.css

```css
.article {
    padding: 10px;
    border: 1px solid blue;
}

.article__header {
    font-size: 1.5em;
}

.article__footer {
    padding: 0 30px;
}

.goldenrod {
    background-color: goldenrod;
}

.dashed {
    border: 1px dashed black;
}
```

1. Use JavaScript to obtain a reference to the first section with the class of `article_header` and change its text with the `textContent` property to "Welcome to the {insert your name here} blog"
1. Use JavaScript to obtain a reference to **all** `article__header` elements and change their `classList` property value to `article__header important`.
1. Obtain a reference the element with a class of `dashed` and remove it.
1. Obtain a reference the element with a class of `article_footer` and add the class of `goldenrod` it.

> **Google tip:** [Find info about classList](http://lmgtfy.com/?q=mdn+javascript+classlist)