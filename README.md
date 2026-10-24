# Mako Cats Math website

Website for **Mako Cats Math**, the math game for kids on iPhone, iPad and Android, in English and German.
Plain HTML and CSS. Nothing to install and nothing to build.

| Page | English | German |
|---|---|---|
| Home | `index.html` | `de/index.html` |
| Support (the store "Support URL") | `support/index.html` | `de/support/index.html` |
| Privacy (this website + summary of the app) | `privacy/index.html` | `de/datenschutz/index.html` |
| Impressum (German only) | `impressum/index.html` | |
| Page not found | `404.html` (both languages) | |

When you change text, change the English and the German page.

Colors and layout are in `assets/site.css`. The "Try a question" mini game is `assets/try.js`;
its words are in the `data-…` lines on each home page (EDIT 8).

## Editing text

Open a page and search for `EDIT`. Each numbered comment marks text you can change.
Change only the words between `>` and `<`.

## Google Play

The Google Play buttons link to `https://play.google.com/store/apps/details?id=com.mathcats.mathcats`.
That address only works for everyone once the app is in production on Google Play.
In Play Console, set **Website** to `https://makohippo.com/` (AdMob then finds `app-ads.txt` at the domain root).

## When the app is live on the App Store

In `index.html` **and** `de/index.html`:

1. **EDIT 4**: swap "Coming soon" for the real App Store link.
2. **EDIT 13**: change the closing box text and add the App Store button.
3. **LINK EDIT** near the top: add the App Store ID for Safari's app banner.

Then in App Store Connect set **Support URL** to `https://makohippo.com/MakoCatsMath/support/` and **Marketing URL** to `https://makohippo.com/MakoCatsMath/`.

## The domain

The site is served at `https://makohippo.com/MakoCatsMath/`: the custom domain `makohippo.com` is set on the root
repo `MathCatsMathCats.github.io` (DNS at Cloudflare, "DNS only"). Every project site inherits it, and the old
github.io addresses redirect there. Don't set a custom domain on this repository.

`404.html` has a fixed `<base href="/MakoCatsMath/">`, so its links work at any depth.

The app's privacy policy stays at
`https://mathcatsmathcats.github.io/MakoCatsMath-privacy/privacy-policy.html` (it redirects to makohippo.com),
because that address is built into the app. This site links to it.

`app-ads.txt` here is only a spare copy: AdMob reads the one at the domain root,
`https://makohippo.com/app-ads.txt`, from the `MathCatsMathCats.github.io` repo.
