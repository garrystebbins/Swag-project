---
title: Thank You Stickers
layout: layouts/base.njk
---

# Thank you!

Thanks again for participating in our tree-testing study. Your feedback is incredibly useful in helping us organize our docs.

We'd love to send you some stickers as a thank you.

<form name="swag-for-testers" netlify-honeypot="full-name" action="/thanks" netlify>
  <p class="honey">
    <label>Your full name: <input name="full-name"></label>
    <input type="hidden" name="tab" id="tab" value="1">
  </p>
  <p>
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
  </p>
  <p>
    <label for="address">Address</label>
    <textarea name="address" id="address"></textarea>
  </p>
  <p>
    <label for="zip">Zip / Postal code</label>
    <input type="text" name="zip" id="zip">
  </p>
  <p>
    <label for="country">Country</label>
    <input type="text" name="country" id="country">
  </p>
  <p>
    <label for="email">Your email<small>(optional - used for confirmation)</small></label>
    <input type="email" name="email" id="email">
  </p>
  <p>
    <button type="submit" class="button">Get your stickers</button>
  </p>
</form>
