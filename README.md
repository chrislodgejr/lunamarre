# Luna Marre Website

A high-impact restaurant website built from the Luna Marre menu artwork: chile red, agave yellow, bull/star iconography, exact Luna Marre wordmark artwork, bold section bars, animated menu browsing, and a modern social-forward Mexican restaurant visual system.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase client scaffolded for future reservation/waitlist capture
- Vercel-ready

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel deployment

1. Import this repository into Vercel.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Output: default Next.js output.
5. Add a custom domain when ready.

## Optional Supabase reservation capture

The Supabase client is already scaffolded in `lib/supabase.ts`. Add these environment variables in Vercel when you are ready to collect reservation leads:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Suggested table:

```sql
create table reservation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  party_size int,
  requested_date date,
  requested_time text,
  notes text,
  created_at timestamptz default now()
);
```

## Media direction

The current build uses high-quality stock imagery. For a premium launch, generate/commission these assets and replace the image URLs in `app/page.tsx`:

- Hero video: slow-motion tortillas, lime squeeze, chile-red backdrop, agave yellow highlights, editorial food styling.
- Taco loop: birria tacos dipped into consomme, steam, macro lens, warm modern Mexican restaurant lighting.
- Platos fuertes loop: wood-fired octopus with charred lemon and glossy sauce brush.
- Interior mood: red lacquer, yellow menu cards, candlelight, agave silhouettes, stylish family-friendly dining room with strong social media appeal.

Recommended tools: Adobe Firefly, Midjourney, Runway, Pika, Sora-style generation, or licensed Pexels/Artgrid/Adobe Stock footage.

## Design system

| Token | Value | Use |
|---|---:|---|
| chile | `#dd2d25` | primary brand red |
| agave | `#efd75e` | menu yellow / CTA |
| mole | `#180c08` | dark contrast |
| crema | `#fff0b9` | warm text |

## Notes

- The food menu text was transcribed from the uploaded `LUNA MARRE MENU 4-20-26` Illustrator/PDF-compatible artwork.
- The cocktail menu exists as a separate concept document and has not been merged into the main food menu unless intentionally added later.
- The layout intentionally mirrors the menu: aggressive color blocking, section bars, bull/star icon, exact wordmark artwork, and strong red/yellow brand energy.
