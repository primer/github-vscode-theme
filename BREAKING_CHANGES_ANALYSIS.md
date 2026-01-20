# Breaking Changes Analysis: Direct @primer/primitives v11 Usage

## Overview

This document compares the current backward-compatible approach vs. a simplified breaking-change approach for migrating to @primer/primitives v11.3.2.

## Current Approach (Backward Compatible)

### src/colors.js: 341 lines
- Imports @primer/primitives v11 themes
- **Transform function (~260 lines)**: Converts flat v11 structure to nested v7 structure
- Complex switch statements mapping:
  - `fgColor-default` → `fg.default`
  - `bgColor-accent-emphasis` → `accent.emphasis`
  - `display-blue-scale-6` → `scale.blue[6]`
  - `button-primary-bgColor-rest` → `btn.primary.bg`
  - etc.

### src/theme.js: Unchanged
- Uses nested structure: `color.fg.default`, `color.accent.emphasis`, `scale.blue[6]`
- ~200+ color references unchanged
- No migration needed

### Pros
✅ No breaking changes for theme.js
✅ Maintains v7 naming conventions
✅ Easier migration path

### Cons
❌ 260+ lines of transformation code
❌ Harder to maintain
❌ Indirection makes debugging harder
❌ Not using primitives structure directly

## Proposed Approach (Breaking Changes - Major Version)

### src/colors.js: 80 lines (~77% reduction)
```javascript
function getColors(theme) {
  switch(theme) {
    case "light": return lightColors;
    case "dark": return darkColors;
    // ... simple mapping, no transformation
  }
}

function getColor(colors, key) {
  return colors[key]?.value || '';
}

function getScaleColor(colors, colorName, index) {
  return colors[`display-${colorName}-scale-${index}`]?.value || '';
}
```

### src/theme.js: Requires updates
Update ~200+ color references:
- **Before**: `color.fg.default`
- **After**: `c('fgColor-default')`

- **Before**: `color.accent.emphasis`
- **After**: `c('bgColor-accent-emphasis')`

- **Before**: `scale.blue[6]`
- **After**: `scale('blue', 6)`

- **Before**: `color.btn.primary.bg`
- **After**: `c('button-primary-bgColor-rest')`

### Pros
✅ **261 fewer lines of code** (~77% reduction in colors.js)
✅ Simpler, cleaner codebase
✅ Direct use of @primer/primitives structure
✅ Easier to update when primitives change
✅ No complex transformation logic
✅ Better aligned with Primer design system

### Cons
❌ Breaking change in how colors are accessed
❌ Need to update ~200+ color references in theme.js
❌ Longer key names (more verbose)
❌ One-time migration effort

## Migration Mapping Guide

| Old (v7 nested) | New (v11 flat) |
|-----------------|----------------|
| `color.fg.default` | `c('fgColor-default')` |
| `color.fg.muted` | `c('fgColor-muted')` |
| `color.fg.subtle` | `c('fgColor-subtle')` |
| `color.fg.onEmphasis` | `c('fgColor-onEmphasis')` |
| `color.accent.fg` | `c('fgColor-accent')` |
| `color.accent.emphasis` | `c('bgColor-accent-emphasis')` |
| `color.accent.muted` | `c('bgColor-accent-muted')` |
| `color.danger.fg` | `c('fgColor-danger')` |
| `color.danger.emphasis` | `c('bgColor-danger-emphasis')` |
| `color.canvas.default` | `c('bgColor-default')` |
| `color.canvas.overlay` | `c('bgColor-overlay')` |
| `color.canvas.inset` | `c('bgColor-inset')` |
| `color.border.default` | `c('borderColor-default')` |
| `color.border.muted` | `c('borderColor-muted')` |
| `color.btn.primary.bg` | `c('button-primary-bgColor-rest')` |
| `color.btn.primary.hoverBg` | `c('button-primary-bgColor-hover')` |
| `color.btn.primary.text` | `c('button-primary-fgColor-rest')` |
| `color.ansi.black` | `c('color-ansi-black')` |
| `scale.blue[6]` | `scale('blue', 6)` |
| `scale.gray[4]` | `scale('gray', 4)` |

## Recommendation

**For a major version bump (v7.0.0)**: Use the simplified approach

### Reasoning:
1. **Simpler codebase**: 261 fewer lines to maintain
2. **Direct alignment**: Uses @primer/primitives structure as-is
3. **Future-proof**: Easier to update when primitives evolve
4. **Clean break**: Major version allows breaking changes
5. **One-time cost**: Migration effort is one-time, maintenance savings are ongoing

### Migration Steps:
1. Replace `src/colors.js` with simplified 80-line version
2. Update `src/theme.js` helper functions to use new accessors
3. Update all ~200 color references in theme.js
4. Test all 16 themes
5. Update documentation
6. Bump to v7.0.0

## Code Size Comparison

| File | Current Lines | Simplified Lines | Reduction |
|------|--------------|------------------|-----------|
| src/colors.js | 341 | 80 | 261 lines (77%) |
| **Total savings** | | | **~260 lines** |

## Conclusion

The breaking-change approach is **significantly simpler** and **better aligned** with the Primer design system. Since this is already a major version bump, embracing the breaking changes results in a cleaner, more maintainable codebase.
