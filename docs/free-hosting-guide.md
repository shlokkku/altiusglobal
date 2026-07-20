# Free Hosting Guide for altius-global.com

This guide assumes you already purchased the domain `altius-global.com` and email service for the same domain.

## Recommended Free Option: Vercel

Vercel is the easiest free hosting option for this React + Vite website. It supports custom domains, HTTPS, and automatic redeploys.

## What You Need

- Access to the domain DNS panel where you purchased `altius-global.com`
- A GitHub account
- A Vercel account
- This project uploaded to a GitHub repository

## Step 1: Build Check Locally

From the project folder:

```bash
npm install
npm run lint
npm run build
```

If `npm run build` succeeds, the site is ready to deploy.

## Step 2: Push the Project to GitHub

1. Create a new GitHub repository, for example `altius-global-website`.
2. In the project folder, initialize Git if needed:

```bash
git init
git add .
git commit -m "Initial Altius Global website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/altius-global-website.git
git push -u origin main
```

If Git is already initialized, only run:

```bash
git add .
git commit -m "Prepare website for deployment"
git push
```

## Step 3: Import the Site into Vercel

1. Go to `https://vercel.com`.
2. Sign in with GitHub.
3. Click **Add New Project**.
4. Select your `altius-global-website` repository.
5. Use these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**.

Vercel will give you a temporary URL like:

```txt
https://altius-global-website.vercel.app
```

Check that the website works there before connecting the domain.

## Step 4: Add altius-global.com in Vercel

1. Open the deployed project in Vercel.
2. Go to **Settings**.
3. Go to **Domains**.
4. Add:

```txt
altius-global.com
```

5. Also add:

```txt
www.altius-global.com
```

Vercel will show DNS records that need to be added at your domain registrar.

## Step 5: Update DNS Records

In your domain registrar DNS panel, add the records Vercel shows. Usually they are:

For root domain:

```txt
Type: A
Name: @
Value: 76.76.21.21
```

For www:

```txt
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Important: Do not delete your email DNS records. Keep records such as MX, SPF, DKIM, and DMARC because those are needed for your domain email service.

## Step 6: Wait for DNS Propagation

DNS can update in a few minutes, but sometimes it takes several hours.

Check:

```txt
https://altius-global.com
https://www.altius-global.com
```

Vercel will automatically issue the HTTPS certificate.

## Step 7: Keep Email Working

Your email hosting likely gave you DNS records such as:

```txt
MX
TXT SPF
TXT DKIM
TXT DMARC
```

Keep those records exactly as your email provider requires. Website hosting and email hosting can share the same domain as long as DNS records are configured correctly.

## Step 8: Future Updates

Whenever you make website changes:

```bash
npm run lint
npm run build
git add .
git commit -m "Update website"
git push
```

Vercel will automatically redeploy the latest version.

## Current Project Deployment Settings

Use these values:

```txt
Framework: Vite
Build command: npm run build
Output directory: dist
Domain: altius-global.com
Contact email: info@altius-global.com
WhatsApp: +971 50 859 9456
```
