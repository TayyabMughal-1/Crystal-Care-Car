# Crystal Car Wash Website

This version is built in **Next.js Pages Router style**, because this structure matches your example screenshots.

It is not a single page website.

Each service has its own page file inside:

```text
pages/services/
```

Examples:

```text
pages/services/exterior-car-wash.js
pages/services/interior-deep-cleaning.js
pages/services/wax-polish.js
pages/services/headlight-restoration.js
pages/contact.js
pages/about.js
pages/packages.js
pages/areas.js
```

## How to run

Open this folder in VS Code. Then run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

If port 3000 is busy, Next.js will show another local link.

## Main folders

```text
components/     reusable parts like navbar, footer, cards, booking form
data/           service names, service details, prices, areas
pages/          actual website pages and routes
styles/         global website CSS
public/         use this folder for your own images or logo
```

## Where to edit services

For simple editing, open:

```text
data/services.js
```

Change service titles, text, images, benefits, prices, and areas from there.

Every service still has its own page file inside `pages/services/`, so the route is real and separate.

## Where to edit design

Open:

```text
styles/globals.css
```

You can change colours, spacing, buttons, cards, hero sections, and responsive styles.

## Where to edit phone number and email

Open:

```text
components/Layout.js
pages/contact.js
```

Replace the demo phone and email with the client's real details.

## Important note

This version uses real car photo URLs. If you want to use your own images, place them inside `public/` and change the image paths in `data/services.js`.

Example:

```js
image: '/car-wash-photo.jpg'
```
