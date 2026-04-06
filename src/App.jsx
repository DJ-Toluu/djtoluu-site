import { useState } from "react";

const FORMSPREE_ID = "mjgppanr";
const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxZl06gzPyDwjXrAprC10kYSAFF2TzJfPMOOP_eQ8pydLrI90ZeuPE2TEyvoG24-Ow/exec";
const HERO_IMAGE_URL =
  "https://res.cloudinary.com/datxxycgf/image/upload/IMG_0542_2_00s_odiglq";

export default function DJToluuLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    eventType: "",
    guestCount: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const payload = {
      name: formData.name,
      event_date: formData.date,
      event_type: formData.eventType,
      guest_count: formData.guestCount,
      message: formData.message,
    };
    try {
      const [formspreeRes] = await Promise.all([
        fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        }),
        fetch(SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {}),
      ]);
      if (formspreeRes.ok) {
        setStatus("success");
        setFormData({ name: "", date: "", eventType: "", guestCount: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const services = [
    {
      title: "Corporate Events",
      description:
        "Sophisticated music direction for company parties, galas, conferences, networking events, and brand experiences.",
    },
    {
      title: "Weddings",
      description:
        "Thoughtful curation for every chapter of the celebration, from cocktail hour ambiance to a full dance floor.",
    },
    {
      title: "Private Celebrations",
      description:
        "Refined, high-energy sets shaped around your guests, your space, and the atmosphere you want to create.",
    },
  ];

  const highlights = [
    "Open-format DJ blending Afrobeats, Amapiano, Hip-Hop, R&B, Latin, and more",
    "Professional sound, microphone support, and smooth event pacing",
    "Experienced with corporate functions, weddings, and upscale private events",
    "Atlanta-based and available for select travel bookings",
  ];

  const process = [
    {
      step: "01",
      title: "Share your vision",
      text: "Send the date, venue, guest count, and the type of atmosphere you want guests to feel from the start.",
    },
    {
      step: "02",
      title: "Receive a tailored proposal",
      text: "Get a clear recommendation shaped around your event style, timing, and production needs.",
    },
    {
      step: "03",
      title: "Elevate the experience",
      text: "We align on music direction, flow, announcements, and the details that help the event feel seamless.",
    },
  ];

  const faqs = [
    {
      q: "What types of events do you DJ?",
      a: "Corporate events, weddings, private celebrations, and other gatherings that call for a polished, crowd-aware music experience.",
    },
    {
      q: "Do you provide sound equipment?",
      a: "Yes. Sound and microphone support can be included based on your venue, guest count, and overall event needs.",
    },
    {
      q: "Do you travel?",
      a: "Yes. Atlanta is home base, and select out-of-town bookings are available depending on the event.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f0e8] text-[#2f241d]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#cbb7a2]/40 bg-[#f7f0e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <p className="text-lg font-semibold tracking-[0.22em] uppercase text-[#5a4333]">
            DJ Toluu
          </p>
          <nav className="hidden gap-8 text-sm text-[#6b5445] md:flex">
            <a href="#services" className="transition hover:text-[#2f241d]">Services</a>
            <a href="#about" className="transition hover:text-[#2f241d]">About</a>
            <a href="#process" className="transition hover:text-[#2f241d]">Process</a>
            <a href="#contact" className="transition hover:text-[#2f241d]">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full border border-[#7b5a46] bg-[#7b5a46] px-5 py-2 text-sm font-medium text-[#fff8f2] transition hover:scale-[1.02] md:inline-flex"
          >
            Check Availability
          </a>
        </div>
      </header>

      {/* Mobile nav strip */}
      <div className="border-b border-[#cbb7a2]/40 bg-[#f7f0e8] md:hidden">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-6 py-3 text-sm text-[#6b5445]">
          <a href="#services" className="whitespace-nowrap">Services</a>
          <a href="#about" className="whitespace-nowrap">About</a>
          <a href="#process" className="whitespace-nowrap">Process</a>
          <a href="#contact" className="whitespace-nowrap">Contact</a>
          <a href="#contact" className="whitespace-nowrap font-medium text-[#7b5a46]">
            Check Availability
          </a>
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f0e8_0%,#f3e8dc_55%,#efe2d4_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,122,84,0.18),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
            {/* Left */}
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#c9b19b] bg-[#fff8f1]/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#866956]">
                Atlanta Corporate • Weddings • Private Events
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight text-[#3a2a20] sm:text-5xl lg:text-6xl">
                Premium DJ experiences for events that need the room to feel right.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#6f5849] sm:text-lg md:text-xl">
                DJ Toluu delivers polished, crowd-aware music experiences for corporate events,
                weddings, and private celebrations—curated with style, flow, and energy that lasts
                all night.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#7b5a46] px-7 py-4 text-center text-sm font-semibold text-[#fff8f2] transition hover:scale-[1.02]"
                >
                  Check Availability
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-[#b9967c] px-7 py-4 text-center text-sm font-semibold text-[#6b4d3b] transition hover:bg-[#fff8f1]"
                >
                  Explore Services
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-[#d8c2af] bg-[#fff9f3] p-5 shadow-[0_18px_40px_rgba(93,63,42,0.08)]">
                  <p className="text-3xl font-semibold">Corporate</p>
                  <p className="mt-2 text-sm text-[#7c6657]">
                    Polished event energy for brands, teams, and professional spaces.
                  </p>
                </div>
                <div className="rounded-3xl border border-[#d8c2af] bg-[#fff9f3] p-5 shadow-[0_18px_40px_rgba(93,63,42,0.08)]">
                  <p className="text-3xl font-semibold">Open-Format</p>
                  <p className="mt-2 text-sm text-[#7c6657]">
                    Afrobeats, Amapiano, Hip-Hop, R&B, Latin, and more.
                  </p>
                </div>
                <div className="rounded-3xl border border-[#d8c2af] bg-[#fff9f3] p-5 shadow-[0_18px_40px_rgba(93,63,42,0.08)]">
                  <p className="text-3xl font-semibold">Atlanta + Travel</p>
                  <p className="mt-2 text-sm text-[#7c6657]">
                    Available for local events and select destination bookings.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative z-10">
              <div className="grid gap-5">
                <div className="rounded-[2rem] border border-[#d7c2ae] bg-[#fff8f2] p-5 shadow-[0_30px_70px_rgba(108,73,47,0.12)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#cdb49d]">
                    <img
                      src={HERO_IMAGE_URL}
                      alt="DJ Toluu event crowd"
                      fetchpriority="high"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.04),rgba(74,48,33,0.42))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#f5e7d9]">
                        Featured Visual
                      </p>
                      <p className="mt-3 max-w-sm text-2xl font-medium leading-tight text-[#fff8f2]">
                        Warm, polished event energy for unforgettable celebrations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-[#d8c2af] bg-[#fff9f3] p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9a806d]">Ideal For</p>
                  <p className="mt-3 text-lg font-medium text-[#3a2a20]">
                    Corporate events, weddings, mixers, launch events, and curated private
                    celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="border-y border-[#d8c2af] bg-[#f1e4d7]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-sm text-[#806755] sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
            <div>Professional event atmosphere</div>
            <div>Tailored crowd reading and music flow</div>
            <div>Optional sound and mic support</div>
            <div>Built for premium bookings</div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f6b]">Services</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Flexible enough for the crowd. Refined enough for the brand.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-[#d8c2af] bg-[#fff9f3] p-8 shadow-[0_18px_40px_rgba(93,63,42,0.08)]"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#6f5849]">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f6b]">About</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              A polished DJ experience built around energy, timing, and people.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#6a5445]">
            <p>
              DJ Toluu brings a versatile open-format approach to events that need more than a
              playlist. Every set is shaped around the room, the audience, and the moment—so the
              music never feels random, forced, or flat.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-[#d8c2af] bg-[#fff8f2] p-5 text-base leading-7 text-[#6a5445]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-[#fffaf5] text-[#2f241d]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f6b]">Process</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Simple booking. Clear communication. A stronger event experience.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-[#dcc7b5] bg-[#f7eee5] p-8"
                >
                  <p className="text-sm font-semibold tracking-[0.2em] text-[#b08f79]">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#6f5849]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f6b]">FAQ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                The essentials planners usually want to know before they book.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-[2rem] border border-[#d8c2af] bg-[#fff9f3] p-6"
                >
                  <h3 className="text-xl font-semibold">{faq.q}</h3>
                  <p className="mt-3 text-base leading-7 text-[#6f5849]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <div className="rounded-[2.5rem] border border-[#d0baa7] bg-[linear-gradient(135deg,#fff8f1_0%,#f4e6d7_100%)] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f6b]">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Make the event feel elevated before guests even hit the dance floor.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6f5849]">
                  Send your date, venue or city, event type, and guest count. You'll get a tailored
                  response built around your event—not a generic quote.
                </p>
                <p className="mt-4 text-sm text-[#9a7f6c]">
                  Or reach out directly at{" "}
                  <a
                    href="mailto:bookings@djtoluu.com"
                    className="underline underline-offset-4"
                  >
                    bookings@djtoluu.com
                  </a>
                </p>
              </div>

              {/* Booking form */}
              <div className="rounded-[2rem] border border-[#ccb49f] bg-[#fffaf5] p-6">
                {status === "success" ? (
                  <div className="py-8 text-center">
                    <p className="text-xl font-semibold text-[#3a2a20]">Request received!</p>
                    <p className="mt-2 text-sm text-[#6f5849]">
                      We'll be in touch shortly about your event.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-[#d8c2af] bg-white px-4 py-3 text-sm text-[#3a2a20] placeholder:text-[#b09a8a] focus:outline-none focus:ring-2 focus:ring-[#7b5a46]/30"
                    />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-2xl border border-[#d8c2af] bg-white px-4 py-3 text-sm text-[#3a2a20] focus:outline-none focus:ring-2 focus:ring-[#7b5a46]/30"
                    />
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full rounded-2xl border border-[#d8c2af] bg-white px-4 py-3 text-sm text-[#3a2a20] focus:outline-none focus:ring-2 focus:ring-[#7b5a46]/30"
                    >
                      <option value="">Event type</option>
                      <option>Corporate Event</option>
                      <option>Wedding</option>
                      <option>Private Celebration</option>
                      <option>Gala / Fundraiser</option>
                      <option>Brand / Launch Event</option>
                      <option>Other</option>
                    </select>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full rounded-2xl border border-[#d8c2af] bg-white px-4 py-3 text-sm text-[#3a2a20] focus:outline-none focus:ring-2 focus:ring-[#7b5a46]/30"
                    >
                      <option value="">Guest count (optional)</option>
                      <option>Under 50</option>
                      <option>50–100</option>
                      <option>100–200</option>
                      <option>200–500</option>
                      <option>500+</option>
                    </select>
                    <textarea
                      placeholder="Tell me about your event — venue, city, vibe, anything relevant"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-[#d8c2af] bg-white px-4 py-3 text-sm text-[#3a2a20] placeholder:text-[#b09a8a] focus:outline-none focus:ring-2 focus:ring-[#7b5a46]/30"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-full bg-[#7b5a46] px-7 py-4 text-sm font-semibold text-[#fff8f2] transition hover:scale-[1.02] disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Check Availability"}
                    </button>
                    {status === "error" && (
                      <p className="text-center text-sm text-red-600">
                        Something went wrong. Email{" "}
                        <a href="mailto:bookings@djtoluu.com" className="underline">
                          bookings@djtoluu.com
                        </a>{" "}
                        directly.
                      </p>
                    )}
                    <div className="flex gap-3 pt-1">
                      <a
                        href="https://linktr.ee/djtoluu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full border border-[#b9967c] px-5 py-3 text-center text-sm font-semibold text-[#6b4d3b] transition hover:bg-[#fff4ea]"
                      >
                        View Links
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#cbb7a2]/40 bg-[#efe2d4]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#806755] sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p className="font-semibold uppercase tracking-[0.22em] text-[#5a4333]">DJ Toluu</p>
            <p>Atlanta Corporate • Weddings • Private Events</p>
            <a href="mailto:bookings@djtoluu.com" className="underline underline-offset-4">
              bookings@djtoluu.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
