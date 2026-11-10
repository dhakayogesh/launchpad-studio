import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

const galleryItems = [
  { label: "Hotel exterior", style: "gallery-tile--wide" },
  { label: "Guest room", style: "gallery-tile--tall" },
  { label: "Courtyard", style: "" },
  { label: "Udaipur surroundings", style: "" },
];

export function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <ImagePlaceholder
          key={item.label}
          label={`${item.label} photo to come`}
          className={`gallery-tile ${item.style}`}
        />
      ))}
    </div>
  );
}