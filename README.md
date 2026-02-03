# WebXR AR Demo

A simple WebXR Augmented Reality demo built with Vue 3 and TresJS.

## Features

- 🥽 WebXR AR session with camera passthrough
- 📦 3D geometric objects (cube, sphere, cone)
- 📍 Objects positioned ~1 meter from starting point
- 📱 Mobile-first design
- 🎮 Orbit controls for desktop preview

## Tech Stack

- **Vue 3** + TypeScript
- **TresJS** (Three.js for Vue)
- **Vite** for fast development
- **WebXR Device API** for AR

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Testing AR

WebXR requires HTTPS (except on localhost). For mobile testing:

### Option 1: ngrok tunnel
```bash
pnpm dev
# In another terminal:
ngrok http 5173
```

### Option 2: Local HTTPS
```bash
# Generate self-signed cert
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# Update vite.config.ts to use the cert
# Then run:
pnpm dev --https
```

### Option 3: Deploy to HTTPS host
Deploy to Netlify, Vercel, or similar for instant HTTPS.

## Browser Support

| Browser | AR Support |
|---------|------------|
| Chrome Android | ✅ Full |
| Samsung Internet | ✅ Full |
| Firefox Android | ⚠️ Limited |
| Safari iOS | ⚠️ WebXR Viewer app needed |
| Desktop browsers | ❌ No AR (preview only) |

## Object Positions

Objects are placed 1 meter in front of the starting position:

- 🔴 **Red Cube** - 0.5m to the left
- 🔵 **Blue Sphere** - center
- 🟢 **Green Cone** - 0.5m to the right

## License

MIT
