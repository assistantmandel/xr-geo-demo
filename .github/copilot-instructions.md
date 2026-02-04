# Copilot Instructions

## Project Overview

This is a **WebXR Augmented Reality demo** built with Vue 3 and TresJS. The project demonstrates AR capabilities by placing 3D geometric objects (cube, sphere, cone) in physical space approximately 1 meter from the user's starting position.

**Tech Stack:**
- Vue 3 (Composition API with `<script setup>`)
- TypeScript (strict mode)
- TresJS (Three.js integration for Vue)
- WebXR Device API
- Vite (development and build tool)
- pnpm (package manager)

## Development Commands

```bash
# Install dependencies (always use pnpm, not npm/yarn)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Coding Standards

### TypeScript
- **Strict mode enabled** - follow strict TypeScript configurations
- **No `any` types** - use proper typing or `unknown` when type is truly unknown
- Use `// eslint-disable-next-line @typescript-eslint/no-explicit-any` only when absolutely necessary (e.g., when dealing with complex third-party library types)
- Prefer type inference over explicit types where obvious
- Use `type` for object shapes, `interface` for extensible contracts

### Vue 3
- **Use Composition API exclusively** - no Options API
- **Use `<script setup>` syntax** for all components
- Use `shallowRef` for complex objects (like Three.js renderers) to avoid deep reactivity overhead
- Follow Vue 3 best practices for refs and reactive data
- Use TypeScript with proper typing for props, emits, and composables

### Code Style
- **Single quotes** for strings
- **2-space indentation**
- **Semicolons** at end of statements (per existing code style)
- Prefer arrow functions
- Use destructuring where appropriate
- Keep functions small and focused

### Comments
- Add JSDoc-style comments for composables and complex functions
- Inline comments should explain *why*, not *what*
- Keep comments concise and meaningful

## Folder Structure

```
src/
├── components/       # Vue components (*.vue files)
├── composables/      # Vue composables (use*.ts files)
├── App.vue          # Main app component
└── main.ts          # App entry point

public/              # Static assets
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ARScene.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useWebXR.ts`)
- **Files**: Match their export name
- **Variables/Functions**: camelCase
- **Types/Interfaces**: PascalCase

## WebXR-Specific Guidelines

### AR Session Management
- Always check `isSupported` before attempting to start AR sessions
- Handle session lifecycle properly (start, end, cleanup)
- Use `local-floor` reference space for AR (not `local` or `viewer`)
- WebXR requires HTTPS except on localhost

### Three.js / TresJS
- Use TresJS components (prefix `Tres*`) for Three.js objects
- Access renderer through TresCanvas context structure
- Configure `isCustomElement` in Vite config for TresJS custom elements
- Use `shallowRef` for Three.js renderer instances to avoid reactivity issues
- Positions use Three.js coordinate system: `[x, y, z]` as `[number, number, number]`

### Performance
- Minimize XR frame callback overhead
- Use shallow reactivity for complex 3D objects
- Exclude `@tresjs/core` from Vite's optimizeDeps

## Libraries & Dependencies

### Use These
- **Vue 3** - UI framework
- **@tresjs/core** - Three.js integration
- **@tresjs/cientos** - TresJS helpers (OrbitControls, etc.)
- **three** - 3D graphics library

### Do Not Add Without Approval
- Additional state management libraries (Vue's built-in reactivity is sufficient)
- Alternative 3D libraries (stick with Three.js/TresJS)
- jQuery or similar legacy libraries
- CSS frameworks (project uses scoped CSS)

### Adding Dependencies
- Always use `pnpm add <package>` (not npm/yarn)
- Justify new dependencies in PR description
- Check bundle size impact for production builds

## Testing & Validation

### Desktop Testing
- Verify 3D scene renders in desktop browser
- Test orbit controls work in non-AR mode
- Check grid helper displays correctly

### Mobile AR Testing
- WebXR requires HTTPS on mobile devices
- Use ngrok tunnel: `ngrok http 5173` for quick mobile testing
- Test on Chrome Android and Samsung Internet (primary targets)
- Verify AR button appears only when WebXR is supported

### Browser Support
- **Primary**: Chrome Android, Samsung Internet (full AR support)
- **Secondary**: Desktop browsers (preview mode with orbit controls)
- **Limited**: Firefox Android, Safari iOS (WebXR Viewer app needed)

## Files/Folders to Ignore

When making changes, ignore or don't modify these:
- `node_modules/` - dependencies
- `dist/` - build output
- `.git/` - version control
- `pnpm-lock.yaml` - lock file (only update via pnpm commands)
- `.vscode/` - editor settings
- `*.tsbuildinfo` - TypeScript build cache

## Common Patterns

### Creating a New Component
```vue
<script setup lang="ts">
// Imports
import { ref } from 'vue'

// Props (if any)
interface Props {
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title'
})

// Component logic
const count = ref(0)
</script>

<template>
  <!-- Template -->
</template>

<style scoped>
/* Scoped styles */
</style>
```

### Creating a New Composable
```typescript
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Description of what this composable does
 */
export function useExample() {
  const value = ref<string>('')
  
  onMounted(() => {
    // Setup
  })
  
  onUnmounted(() => {
    // Cleanup
  })
  
  return {
    value,
    // Other exports
  }
}
```

## Security & Best Practices

- Never commit secrets or API keys
- Use environment variables for configuration (if needed)
- Validate user input
- Handle errors gracefully with try-catch blocks
- Clean up resources in `onUnmounted` hooks
- Follow principle of least privilege for WebXR permissions

## PR Guidelines

1. Create feature branch from main
2. Make focused changes (one feature/fix per PR)
3. Test locally on desktop browser
4. Test on mobile device if AR-related changes
5. Assign @emdahlstrom for review
6. Update documentation if needed

## Additional Notes

- This is a demonstration project focused on simplicity and clarity
- Prioritize readability and maintainability over cleverness
- Keep the AR experience smooth and responsive
- Document complex WebXR interactions
