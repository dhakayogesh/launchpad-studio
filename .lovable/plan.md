# The Lake Kingdom — Homepage Proposal

## Homepage structure
1. **Header:** hotel name, links to the main sections, and a clear booking enquiry action; collapses into a simple mobile menu.
2. **Opening image area:** a large replaceable photo placeholder with the hotel name, Udaipur location, and enquiry action.
3. **Hotel introduction:** a short welcome and heritage-inspired description, with room for a hotel photograph.
4. **Rooms preview:** a small set of room cards with image placeholders, short summaries, and enquiry links.
5. **Experiences and facilities:** a clean, scannable selection of on-property and local highlights.
6. **Gallery preview:** a simple image grid using clearly replaceable placeholders.
7. **Location and contact:** Udaipur location details, contact options, and a WhatsApp link placeholder.
8. **Booking enquiry:** a short contact form and final enquiry action, followed by a restrained footer.

## Reusable component plan
- `SiteHeader` — desktop navigation and mobile menu.
- `ImagePlaceholder` — consistent, accessible stand-in for future hotel photography.
- `SectionHeading` — shared section title and optional supporting line.
- `RoomCard` — room image placeholder, name, summary, and enquiry link.
- `GalleryGrid` — responsive placeholder image arrangement.
- `EnquiryForm` — name, contact details, dates, guest count, and message fields.
- `SiteFooter` — contact details and section links.

Keep page sections straightforward and avoid extra abstractions or dependencies. Use temporary contact details only as clearly marked placeholders until the real hotel details are provided.

## Simple project structure
```text
src/
  routes/
    index.tsx                 # homepage and page metadata
  components/
    site/
      SiteHeader.tsx
      ImagePlaceholder.tsx
      SectionHeading.tsx
      RoomCard.tsx
      GalleryGrid.tsx
      EnquiryForm.tsx
      SiteFooter.tsx
  styles.css                  # shared colors, typography, and responsive styles
```

## Technical notes
- The existing project is React with TanStack Start and currently uses TypeScript files. Keep the code beginner-readable and limited to the requested homepage; do not add a database, admin tools, booking management, or dependencies.
- Use warm ivory, deep green, muted gold, serif headings, and clean sans-serif body text through shared style tokens.
- Use simple image placeholders only; no generated imagery or copied reference-site content/assets.
- Build only after this proposal is approved. The other named pages can be planned and built in later stages.
