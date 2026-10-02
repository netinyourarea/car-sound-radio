
- Shared site data (phone, services list with images) lives in src/lib/site.ts; pages read from it so copy stays in one place.
- Site header/footer render once in src/routes/__root.tsx around <Outlet />.
