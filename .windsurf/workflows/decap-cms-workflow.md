---
description: How to work with Decap CMS seamlessly during development
---

## Seamless Decap CMS Development

### Start CMS Development
```bash
npm run dev:cms
```

This starts both Next.js and Decap CMS server concurrently with hot reloading.

### For Config Changes
1. **Make changes** to `public/admin/config.yml`
2. **Save the file** - decap-server should auto-reload
3. **Refresh your browser** at `http://localhost:3000/admin/`
4. **Test your changes**

### If Auto-reload Doesn't Work
Sometimes you may need to:
1. Stop the decap-server (Ctrl+C in the terminal where it's running)
2. Restart with: `npm run decap-server`
3. Or restart the full dev:cms command

### Best Practices
- Keep CMS config changes minimal and test frequently
- Use file-based collections for single sections (like homepage parts)
- Use folder-based collections for multiple items (like blog posts, projects)
- Test both the CMS admin interface and the frontend display
