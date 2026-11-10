import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

type RoomCardProps = {
  name: string;
  description: string;
  number: string;
};

export function RoomCard({ name, description, number }: RoomCardProps) {
  return (
    <article className="room-card">
      <ImagePlaceholder label="Room photo to come" className="photo-placeholder--room" />
      <div className="room-card__details">
        <span className="room-card__number">{number}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <a className="text-link" href="#enquiry">
          Enquire about this room <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}