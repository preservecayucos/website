# Preserve Cayucos website

A static site built with [Astro](https://astro.build), hosted on Netlify, and edited through [Pages CMS](https://pagescms.org). Nobody needs to touch code to post an update or change the text.

## How it fits together

| Piece | What it does | Where it lives |
|---|---|---|
| GitHub repo | Holds the site's files. Every change is a commit. | `preservecayucos` org |
| Netlify | Rebuilds and publishes the site on every commit, and collects form submissions. | app.netlify.com |
| Pages CMS | The browser editor. Saving a post commits it to GitHub, Netlify publishes it within about a minute. | app.pagescms.org |
| PledgeIt | Donations (through Ecologistics). The site just links to it. | charity.pledgeit.org/preservecayucos |

## First-time setup

1. **Push to GitHub.** Create an empty repo named `website` in the `preservecayucos` org (no README). Then, from this folder:
   ```
   git remote add origin https://github.com/preservecayucos/website.git
   git push -u origin main
   ```
2. **Connect Netlify.** Add new site → Import from Git → GitHub → pick the repo. Build settings come from `netlify.toml`, so accept the defaults and deploy.
3. **Turn on forms.** Netlify → Site → Forms → Enable form detection, then trigger a redeploy (Deploys → Trigger deploy). The `contact` and `newsletter` forms appear after that deploy.
4. **Form email notifications.** Forms → Form notifications → Add notification → Email → send to the group Gmail. Do it for `contact` at minimum.
5. **Pages CMS.** Go to app.pagescms.org, sign in with the group's GitHub account, install the Pages CMS GitHub app on the `preservecayucos` org, and open the repo. Add editors under the project's collaborator settings.
6. **Domain.** Netlify → Domain management → Add domain, then add the DNS records it gives you in Cloudflare. Update `site` in `astro.config.mjs` to the real domain.

## Before launch

- [ ] Replace the fiscal sponsor statement with Ecologistics' approved wording (Site text & settings → Donate page). It shows on the Donate page and in every page footer.
- [ ] If Ecologistics accepts checks, fill in "Giving by check." It stays hidden while blank.
- [ ] Board confirms their names and titles can be public.
- [ ] Board reviews all drafted copy, including the two starter posts.
- [ ] Submit both forms on the live site once and confirm the email arrives.

## For editors

**Post an update:** Pages CMS → Updates → Add entry. Fill in title, date, and the post. A short summary and a photo are optional. Save. It's live in about a minute.

**Hide a post without deleting it:** tick "Draft."

**Change site text** (headline, about, board, donate link, contact info): Pages CMS → Site text & settings.

**Email list signups:** Netlify → Forms → newsletter. Export as CSV whenever you need it, or import it into MailerLite or Kit once you set one up.

## Moving the email list to MailerLite or Kit later

Replace the `<form>` in `src/components/Signup.astro` with the provider's embed code, keeping the surrounding heading and text. Export the existing Netlify signups first and import them into the new tool.

## Working on the code

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

Text and settings: `src/data/site.json`. Posts: `src/content/updates/`. Uploaded images: `public/media/`. Editor configuration: `.pages.yml`.
