---
title: Netlify Swag
layout: layouts/base.njk
---

# Swag for all!

We’d love to send you some stickers to celebrate your work. Fill out the form below and we’ll get them in the mail.

(and we love seeing those stickers jazzing up laptops and notebooks. Do show us how great they look by tweeting a photo and mentioning us.)

<form name="swag-for-all" netlify-honeypot="full-name" action="/thanks" netlify>
  <p class="honey">
    <label>Your full name: <input name="full-name"></label>
    <input type="hidden" name="tab" id="tab" value="1">
  </p>
  <p>
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
  </p>
  <p>
    <label for="addressline1">Address line 1</label>
    <textarea name="addressline1" id="addressline1"></textarea>
  </p>
  <p>
    <label for="addressline2">Address line 2 (optional)</label>
    <textarea name="addressline2" id="addressline2"></textarea>
  </p>
  <p>
    <label for="aptnumber">Apt / Suite number (optional)</label>
    <textarea name="aptnumber" id="aptnumber"></textarea>
  </p>
  <p>
    <label for="zip">Zip / Postal code</label>
    <input type="text" name="zip" id="zip">
  </p>
  <p>
    <label for="city">City</label>
    <input type="text" name="city" id="city">
  </p>
  <p>
    <label for="state">State, county or region</label>
    <input type="text" name="state" id="state">
  </p>
  <p>
    <label for="country">Country</label>
    <input type="text" name="country" id="country">
  </p>
  <p>
    <label for="email">Your email<small>(optional)</small></label>
    <input type="email" name="email" id="email">
  </p>
  <p>
    <label for="comments">Anything you’d like to share about the projects you’re working on or why you chose Netlify for docs?<small>(optional)</small></label>
    <textarea name="comments" id="comments"></textarea>
  </p>
  <p>
    <button type="submit" class="button">Request your swag</button>
  </p>
</form>

