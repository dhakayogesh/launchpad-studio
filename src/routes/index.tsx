import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { RoomCard } from "@/components/site/RoomCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Lake Kingdom | Heritage Stay in Udaipur" },
      {
        name: "description",
        content: "Discover The Lake Kingdom, a heritage-inspired hotel in Udaipur, Rajasthan. Explore the stay and send a booking enquiry.",
      },
      { property: "og:title", content: "The Lake Kingdom | Udaipur" },
      {
        property: "og:description",
        content: "A considered heritage-inspired stay in Udaipur, Rajasthan, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="hotel-site">
      <SiteHeader />
      <main>
        <section className="opening" aria-labelledby="opening-title">
          <div className="opening__frame">
            <ImagePlaceholder label="The Lake Kingdom hotel photograph to come" className="photo-placeholder--opening" />
            <div className="opening__content">
              <p className="eyebrow opening__eyebrow">A heritage-inspired stay · Udaipur</p>
              <h1 id="opening-title">The Lake<br />Kingdom</h1>
              <p className="opening__subtitle">A quieter way to discover the City of Lakes.</p>
              <Button asChild size="lg" className="opening__button">
                <a href="#enquiry">Plan your stay <ArrowUpRight aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="opening__caption">
              <span>Udaipur, Rajasthan, India</span>
              <span>01 — Welcome</span>
            </div>
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to the hotel introduction">
            <span>Discover the hotel</span><ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="about-section content-width" id="about">
          <div className="about-section__image-wrap">
            <ImagePlaceholder label="Hotel details photo to come" className="photo-placeholder--about" />
            <span className="image-index">A place to arrive</span>
          </div>
          <div className="about-section__copy">
            <p className="eyebrow">A warm welcome</p>
            <h2>A sense of place,<br />made for your stay.</h2>
            <p>
              Set in Udaipur, The Lake Kingdom invites you to slow down and experience the
              character of Rajasthan. Thoughtful details and a sense of history set the tone
              for days spent discovering the City of Lakes.
            </p>
            <a className="text-link" href="#experiences">Discover the experience <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="rooms-section" id="rooms">
          <div className="content-width">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Rest and retreat"
                title="Rooms for a slower stay"
                description="Room names and details will be added once the hotel’s offerings are confirmed."
              />
              <span className="section-count">02 / STAY</span>
            </div>
            <div className="room-grid">
              <RoomCard
                number="01"
                name="Signature Room"
                description="Room description and amenities to be confirmed."
              />
              <RoomCard
                number="02"
                name="Heritage Suite"
                description="Suite description and amenities to be confirmed."
              />
            </div>
            <p className="placeholder-note">Room names shown as draft placeholders.</p>
          </div>
        </section>

        <section className="experiences-section content-width" id="experiences">
          <div className="experiences-section__intro">
            <SectionHeading
              eyebrow="Beyond the room"
              title="Make the days your own"
              description="A first glimpse of what a stay might hold. Hotel facilities and experiences can be added here as details are confirmed."
            />
            <a className="text-link" href="#enquiry">Ask about your stay <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <span>01</span><div><h3>Discover Udaipur</h3><p>Find your own way through the City of Lakes.</p></div><MapPin aria-hidden="true" />
            </article>
            <article className="experience-item">
              <span>02</span><div><h3>Settle into the moment</h3><p>Make room for a slower rhythm and an easy stay.</p></div><span className="experience-mark" aria-hidden="true">✳</span>
            </article>
            <article className="experience-item">
              <span>03</span><div><h3>See Rajasthan up close</h3><p>Experience the colour and character of the region.</p></div><ArrowUpRight aria-hidden="true" />
            </article>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="content-width">
            <div className="section-topline">
              <SectionHeading
                eyebrow="A first impression"
                title="A glimpse of the stay"
                description="Hotel photographs will bring this gallery to life."
              />
              <span className="section-count">03 / LOOK</span>
            </div>
            <GalleryGrid />
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__inner content-width">
            <div>
              <p className="eyebrow">Find your way here</p>
              <h2>Udaipur is<br />waiting.</h2>
              <p className="contact-location"><MapPin aria-hidden="true" /> Udaipur, Rajasthan, India</p>
              <p className="contact-detail">Hotel address and directions to be added.</p>
            </div>
            <div className="contact-section__action">
              <p>We look forward to hearing from you.</p>
              <a className="contact-placeholder" href="#enquiry">
                <MessageCircle aria-hidden="true" />
                <span><strong>WhatsApp enquiry</strong><small>Contact number to be added</small></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#enquiry">Send a booking enquiry <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="enquiry-section content-width" id="enquiry">
          <div className="enquiry-section__intro">
            <p className="eyebrow">Begin your stay</p>
            <h2>Tell us what<br />you have in mind.</h2>
            <p>Share a few details and the hotel team can help shape your visit.</p>
            <span className="section-count">04 / ENQUIRE</span>
          </div>
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}