# Nasapoint 

This is a free nasa api web app.

# Env
- Node js -v 18 or latest
- Next js 13 (Typescript)
- PostgreSQL DB with -  Supabase as host (locally with Docker) or locally.
- Prisma for ORM 

# Dev
- `nvm use 18`
- `pnpm install`
- `pnpm install @supabase/supabase-js`
- `supabase init` -> `supabase start`
- `pnpm install prisma`
- `prisma migrate dev`
- Set Supabase Env keys 
- `pnpm run dev`
