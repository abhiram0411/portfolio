# Run doc — NeuralOS portfolio (Next.js)

The app lives in the `neuralos/` subdirectory of the checkout.

## Reproduce uncommitted artifacts

1. No `.env*` files are required — the app runs without environment variables. (If one is ever added, copy it from the main checkout.)
2. Install dependencies (the project uses **npm**):
   ```bash
   cd neuralos
   npm install
   ```
3. Nothing else is needed; Next.js generates `.next/` on first run.

## Run the server

```bash
cd neuralos
npm run dev
```

- Default dev server URL: http://localhost:3000
- If port 3000 is taken, Next.js auto-picks the next free port (prints it in the log), or pass `-p <port>`.
- Server log: `.freebuff/preview-*.log` (write npm output there, run detached).
