# PoliTechs.uk

A simple website for the **PoliTechs.uk** politics & technology networking movement.

## Stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React](https://react.dev/) — UI library
- [React Router](https://reactrouter.com/) — client-side routing
- [Reactstrap](https://reactstrap.github.io/) + [Bootstrap](https://getbootstrap.com/) — UI components & layout
- [SCSS](https://sass-lang.com/) — custom styling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## Project Structure

```
src/
  components/   # Shared components (Header, Footer, EventCard, MailchimpSignup)
  data/         # Static data (events.js, groups.js)
  pages/        # Page components (Landing, Events, RelatedGroups)
  styles/       # SCSS styles (main.scss)
  App.jsx       # Root component with routing
  main.jsx      # Entry point
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — mission, events, sign-up, petition |
| `/events` | Full events listing |
| `/groups` | Related organisations |

## Docs

- [branding.md](branding.md) — brand guidelines
- [mission.md](mission.md) — full mission statement
- [TODO.md](TODO.md) — roadmap and outstanding tasks
