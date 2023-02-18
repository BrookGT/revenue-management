# Revenue Management

Customer and accountant portal for Ethiopian tax filing, revenue collection, and compliance workflows. Built with Next.js 12, Ant Design, and Tailwind CSS.

## Requirements

- Node.js 18+
- npm 9+

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

The app listens on [http://localhost:3000](http://localhost:3000). Point `NEXT_PUBLIC_API_URL` at your Revenue Management API instance.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm test` | Run unit tests with 100% coverage on `lib/` |

## Docker

```bash
docker build -t revenue-management .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.revenue.et revenue-management
```

## Project layout

- `pages/` — admin, user, accountant, and marketing routes
- `components/` — shared UI for v2/v3 landing experiences
- `helpers/` — API client utilities
- `lib/` — pure helpers with enforced unit test coverage
- `contexts/` — authentication and session state

## License

MIT — see [LICENSE](LICENSE).
