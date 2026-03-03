# Package Sorting Function

A TypeScript implementation of a robotic arm dispatch function that sorts packages into the correct stack based on their volume and mass.

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

## Run Tests

```bash
npm test
```

## Build

```bash
npm run build
```

## Web UI

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build:web
```

## Usage

```typescript
import { sort } from "./src/sort";

sort(100, 100, 100, 10); // "SPECIAL" (bulky — volume = 1,000,000)
sort(10, 10, 10, 25); // "SPECIAL" (heavy — mass >= 20)
sort(150, 50, 50, 25); // "REJECTED" (bulky and heavy)
sort(10, 10, 10, 5); // "STANDARD"
```
