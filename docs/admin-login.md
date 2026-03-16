# Admin CMS Login Guide

This guide explains how to access and log in to the Decap CMS (formerly Netlify CMS) admin interface for mettalegita.com.

## Access URL

Open your browser and navigate to:

```
https://www.mettalegita.com/admin/
```

## Login Method

The CMS uses **GitHub OAuth** for authentication. This means you log in with your GitHub account.

### Steps

1. Go to `https://www.mettalegita.com/admin/`
2. Click the **Log in with GitHub** button
3. If prompted, authorize the GitHub OAuth application to access your account
4. You'll be redirected to the CMS dashboard

## Requirements

- A GitHub account with access to the `metta_web` repository
- The GitHub account must have appropriate permissions to modify content

## Troubleshooting

### "Log in with GitHub" button not working

- Make sure you're accessing the correct URL: `https://www.mettalegita.com/admin/`
- Check that JavaScript is enabled in your browser
- Clear browser cache/cookies and try again

### Authorization errors

- Ensure your GitHub account has access to the repository
- You may need to request access from the repository owner

### CMS not loading

- Verify the site is deployed: `https://www.mettalegita.com`
- Check that `public/admin/config.yml` exists in the repository

## CMS Features

Once logged in, you can:

- **Edit Hero Section** — Update the homepage hero image, title, and subtitle
- **Manage About Content** — Edit the about page information
- **Update Services** — Add or modify service offerings
- **Blog Posts** — Create and edit blog articles
- **Media Library** — Upload and manage images

## Technical Details

- **CMS Engine**: Decap CMS (formerly Netlify CMS)
- **Backend**: GitHub (content stored as Markdown/JSON in the repository)
- **OAuth App**: Configured with GitHub Client ID `Ov23liGcvlsEsFx5F2xM`

## Security Note

The CMS uses OAuth for secure authentication. Do not share your GitHub credentials — instead, ensure proper repository access permissions are granted to team members through GitHub's organization or repository settings.
