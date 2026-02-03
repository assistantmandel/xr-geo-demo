# Contributing

## Development

```bash
pnpm install
pnpm dev
```

## Testing AR on Mobile

WebXR requires HTTPS. Options:

1. **ngrok**: `ngrok http 5173`
2. **Deploy**: Push to main, deploy to Netlify/Vercel
3. **Local HTTPS**: Generate self-signed cert

## PR Process

1. Create feature branch
2. Make changes
3. Test locally (and on mobile if AR-related)
4. Create PR, assign @emdahlstrom for review
