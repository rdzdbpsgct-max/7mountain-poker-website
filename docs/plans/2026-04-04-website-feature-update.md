# Website Feature Update v7.0.0 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the 7Mountain Poker marketing website with all new app features from v6.9.8 to v7.0.0

**Architecture:** Content-driven update. All text lives in `src/lib/i18n.ts`. Components render from translation keys. Add new feature entries to i18n, then update components to render them. Take new screenshots via Chrome.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion

---

### Task 1: Take new screenshots of the app

Use Chrome MCP to navigate to https://7mountainpoker.vercel.app and capture screenshots of new features:
- Statistics Dashboard
- Deal-Making modal
- Setup Wizard
- League Charts
- Audio Settings with 4 categories
- Game mode with GameInfoBar

Save to `public/screenshots/` in the website project.

### Task 2: Update i18n translations — Pro Features

**Files:** `src/lib/i18n.ts`

Add 2 new Pro Feature entries (DE + EN):
- `dealMaking`: Deal-Making / Chop Calculator (ICM Chop, Chip Chop, Even Split)
- `statistics`: Statistics Dashboard (Trend-Charts, Metriken, Filter)

Update existing entries:
- `voiceItem`: Mention Custom Audio Upload & 4 Audio-Kategorien
- `rebuy`: Mention Re-Entry support

### Task 3: Update i18n translations — Power Tools

**Files:** `src/lib/i18n.ts`

Add 2 new Power Tool entries (DE + EN):
- `callTheClock`: Call the Clock / Shot Clock
- `exports`: Erweiterte Exporte (Hendon Mob CSV, Blind-CSV, Cloud Export)

Update existing entries:
- `guidedTour`: Mention 6-step Setup Wizard
- `icm`: Mention Deal-Making integration

### Task 4: Update i18n translations — Features Section

**Files:** `src/lib/i18n.ts`

Update existing feature descriptions:
- `blinds`: Mention Drag & Drop reordering
- `players`: Mention player search filter, duplicate detection
- `remote`: Mention Multi-Controller, Admin/Viewer roles

### Task 5: Update i18n translations — TV & Remote Section

**Files:** `src/lib/i18n.ts`

Update:
- `tvRemote.remote.controls`: Add "Call the Clock" to controls list
- `tvRemote.remote.description`: Mention Multi-Controller support
- `tvRemote.tv.screens`: Add side pot screen
- Add `tvRemote.tv.roles` for Admin/Viewer

### Task 6: Update ProFeaturesSection component

**Files:** `src/components/ProFeaturesSection.tsx`

- Expand from 6 to 8 feature cards
- Add SVG icons for dealMaking and statistics
- Add new entries to features array
- Update cardSuits array to match 8 items
- Grid stays 3-col on lg (will naturally wrap)

### Task 7: Update PowerToolsSection component

**Files:** `src/components/PowerToolsSection.tsx`

- Expand from 12 to 14 tool cards
- Add SVG icons for callTheClock and exports
- Add entries to iconKeys and featureKeys arrays

### Task 8: Update TVRemoteSection component

**Files:** `src/components/TVRemoteSection.tsx`

- Add Multi-Controller badge
- Add Admin/Viewer role info

### Task 9: Build and verify

Run `npm run build` in the website project to ensure no TypeScript errors or build failures. Verify with `npm run dev`.

### Task 10: Commit changes

Commit all changes with descriptive message.
