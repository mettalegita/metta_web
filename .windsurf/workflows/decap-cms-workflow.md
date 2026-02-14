---
description: Complete guide to Decap CMS setup, configuration, security, and deployment
---

# Decap CMS Complete Setup Guide

## Overview

This project uses **Decap CMS** (formerly Netlify CMS) for content management. The CMS allows editing homepage sections, blog posts, portfolio projects, and site settings through a user-friendly admin interface.

## Project Structure

```
public/admin/
├── config.yml          # Main CMS configuration
└── index.html          # CMS interface HTML

app/admin/
└── page.tsx            # Next.js admin route

data/
├── homepage.json       # Homepage content
├── clients.json        # Client testimonials
├── testimonials.json   # User testimonials
├── teamMemberData.json # Team information
├── faq.json           # Site-wide FAQ
├── counterData.json   # Statistics counters
├── footer.json        # Footer navigation
├── marketing/blog/    # Blog posts (Markdown)
├── servicesV2/        # Service pages (Markdown)
└── portfolio-agency/case-studies/  # Portfolio projects (Markdown)
```

## CMS Configuration Issues & Fixes

### Initial Problems Resolved

#### 1. Schema Validation Errors
**Issue:** All collections missing required `files` or `folder` properties
```
Config Errors:
'collections[0]' must have required property 'files'
'collections[0]' must have required property 'folder'
```

**Fix:** Each collection must have either:
- `files:` property for single-file collections
- `folder:` property for multi-file collections

#### 2. Collection Structure Requirements
**Issue:** File-based collections used `file:` instead of `files:`

**Before:**
```yaml
- name: hero
  label: Hero Section
  file: data/homepage.json  # ❌ Wrong
```

**After:**
```yaml
- name: hero
  label: Hero Section
  files:                    # ✅ Correct
    - name: hero
      label: Hero Section
      file: data/homepage.json
      fields: [...]
```

#### 3. Authentication Backend Issues
**Issue:** GitHub OAuth redirects to Netlify instead of working locally

**Root Causes:**
- Incorrect backend configuration
- Browser/CDN caching of old config
- Missing proper local development setup

## Backend Configuration

### For Local Development (Testing)

```yaml
backend:
  name: test-repo
```

**Features:**
- ✅ No authentication required
- ✅ Works offline
- ✅ Perfect for local content editing
- ❌ **NOT SECURE** - Anyone can edit if deployed

### For Production (Secure)

```yaml
backend:
  name: github
  repo: mettalegita/metta_web
  branch: main
```

**Requirements:**
- GitHub OAuth App configured
- Environment variables set in deployment platform
- Authorized GitHub users only

### Backend Options Summary

| Backend | Environment | Authentication | Security | Use Case |
|---------|-------------|----------------|----------|----------|
| test-repo | Local | None | ❌ None | Development testing |
| github | Production | GitHub OAuth | ✅ Secure | Live site editing |
| git-gateway | Local/Prod | Via decap-server | ⚠️ Setup required | Advanced local dev |

## Security Considerations

### Local Development (test-repo)
- **Risk:** Anyone with admin URL can edit content
- **Use:** Only for local testing
- **Never deploy** with test-repo backend

### Production (GitHub OAuth)
- **Security:** Only GitHub users with repo access can edit
- **Setup:** Requires GitHub OAuth App + deployment platform config
- **Recommended:** For all production deployments

## Development Workflow

### Start CMS Development
```bash
npm run dev:cms
```
Runs Next.js + decap-server concurrently with hot reloading.

### Individual Commands
```bash
# Next.js only
npm run dev

# Decap server only
npm run decap-server
```

### Making Config Changes
1. Edit `public/admin/config.yml`
2. Save file
3. Refresh `http://localhost:3000/admin/`
4. Test changes in both CMS and frontend

### If Auto-reload Doesn't Work
```bash
# Stop decap-server
Ctrl+C

# Restart
npm run decap-server
```

## Collection Types & Configuration

### File-based Collections (Single Files)
```yaml
- name: homepage
  label: Homepage Content
  files:
    - name: hero
      label: Hero Section
      file: data/homepage.json
      fields:
        - { label: Title, name: title, widget: string }
        - { label: Description, name: description, widget: text }
```

### Folder-based Collections (Multiple Files)
```yaml
- name: blog
  label: Blog Posts
  folder: data/marketing/blog
  create: true
  slug: '{{slug}}'
  extension: md
  format: frontmatter
  fields:
    - { label: Title, name: title, widget: string }
    - { label: Body, name: body, widget: markdown }
```

## Deployment Setup

### For Vercel/Netlify Deployment

#### 1. GitHub OAuth App Setup
```
GitHub Settings → Developer settings → OAuth Apps → New OAuth App
- Homepage URL: https://your-domain.com
- Authorization callback URL: https://your-domain.com/admin
```

#### 2. Environment Variables
```
GITHUB_CLIENT_ID=your_oauth_client_id
GITHUB_CLIENT_SECRET=your_oauth_client_secret
```

#### 3. Repository Access
Ensure your GitHub account has **write access** to the repository.

### Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (for Next.js)
- **Install Command:** `npm install`

## Troubleshooting

### "Config Errors" Messages
- Check all collections have either `files:` or `folder:` property
- Verify file-based collections use proper `files:` structure
- Ensure all required fields are present

### Authentication Issues
- **Local:** Use `test-repo` backend
- **Production:** Configure GitHub OAuth properly
- **Caching:** Clear browser cache or use incognito

### Server Connection Issues
```bash
# Check if decap-server is running
curl http://localhost:8080

# Restart servers
npm run dev:cms
```

### Content Not Updating
- Check file paths in config.yml match actual data files
- Verify collection structure matches data format
- Test both CMS saving and frontend display

## Best Practices

### Configuration
- Keep collections organized by content type
- Use descriptive labels for better UX
- Test configuration changes immediately
- Document custom field types

### Development
- Use test-repo for local development
- Switch to GitHub OAuth before production deployment
- Test content editing workflow end-to-end
- Commit CMS config changes separately

### Security
- Never deploy with test-repo backend
- Limit GitHub repository access to trusted users
- Use environment variables for sensitive data
- Regularly audit CMS access logs

### Content Management
- Use appropriate widget types for data validation
- Provide helpful field descriptions
- Group related fields logically
- Test content display on actual pages

## Quick Reference

### Local Development
```bash
npm run dev:cms                    # Start both servers
http://localhost:3000/admin/       # Access CMS
```

### Production Deployment
```bash
# 1. Switch backend to github
# 2. Set up GitHub OAuth
# 3. Configure environment variables
# 4. Deploy to Vercel/Netlify
```

### Common Issues
- **404 Error:** Check admin route configuration
- **Config Errors:** Verify collection schema
- **Auth Issues:** Check backend configuration
- **Content Not Saving:** Verify file paths and permissions

## Support

For Decap CMS documentation: https://decapcms.org/docs/

For GitHub OAuth setup: https://docs.github.com/en/developers/apps/building-oauth-apps
