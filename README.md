# Package Sorter

A TypeScript + React web app that sorts packages into the correct stack based on their dimensions and mass. Built with Vite, Tailwind CSS, Formik, and Yup.

## Rules

| Stack        | Condition               |
| ------------ | ----------------------- |
| **STANDARD** | Not bulky and not heavy |
| **SPECIAL**  | Either bulky or heavy   |
| **REJECTED** | Both bulky and heavy    |

- **Bulky**: volume >= 1,000,000 cm³ or any dimension >= 150 cm
- **Heavy**: mass >= 20 kg

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build:web
```

## Tests

```bash
npm test
```

## Lint & Format

```bash
npm run lint            # check for lint errors
npm run lint:fix        # auto-fix lint errors
npm run format          # format all source files
npm run format:check    # check formatting
```

## Usage

```typescript
import { sort } from "./src/utils/sort";

sort(100, 100, 100, 10); // "SPECIAL" (bulky — volume = 1,000,000)
sort(10, 10, 10, 25); // "SPECIAL" (heavy — mass >= 20)
sort(150, 50, 50, 25); // "REJECTED" (bulky and heavy)
sort(10, 10, 10, 5); // "STANDARD"
```
