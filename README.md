# makocatsmath.com

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
In Play Console, set **Website** to `https://makocatsmath.com/` (AdMob then finds `app-ads.txt` here).

## When the app is live on the App Store

In `index.html` **and** `de/index.html`:

1. **EDIT 4**: swap "Coming soon" for the real App Store link.
2. **EDIT 13**: change the closing box text and add the App Store button.
3. **LINK EDIT** near the top: add the App Store ID for Safari's app banner.

Then in App Store Connect set **Support URL** to `https://makocatsmath.com/support/` and **Marketing URL** to `https://makocatsmath.com/`.

## Publishing on GitHub Pages with the domain

1. Buy `makocatsmath.com`.
2. The site's repository is `MathCatsMathCats/MakoCatsMath` (public).
   Never reuse the names `MakoCatsMath-privacy`, `MathCats-privacy` or `ChromaticDrift-privacy`.
3. Push this folder:
   ```
   git remote add origin https://github.com/MathCatsMathCats/MakoCatsMath.git
   git push -u origin main
   ```
4. Repository **Settings → Pages**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
5. Same page, **Custom domain**: enter `makocatsmath.com` and save.
6. At the domain registrar, add these DNS records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | mathcatsmathcats.github.io |

7. When GitHub shows the certificate is ready, tick **Enforce HTTPS**.
8. Recommended: verify the domain under your GitHub account **Settings → Pages**, so nobody else can claim it.

The app's privacy policy stays at
`https://mathcatsmathcats.github.io/MakoCatsMath-privacy/privacy-policy.html`,
because that address is built into the app. This site links to it.

`app-ads.txt` is here for the Android version: AdMob reads it from the website
named in the Google Play listing.
