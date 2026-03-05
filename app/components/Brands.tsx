import Image from "next/image";

const BRANDS = [
  { name: "Google", logo: "/google.png" },
  { name: "Microsoft", logo: "/microsoft.png" },
  { name: "Adobe", logo: "/adobe.png" },
  { name: "Airbnb", logo: "/airbnb.png" },
  { name: "Stripe", logo: "/stripe.png" },
  { name: "Reddit", logo: "/reddit.png" },
  { name: "Notion", logo: "/notion.png" },
  { name: "Figma", logo: "/figma.png" },
];

export default function Brands() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-16 overflow-hidden border-y border-zinc-100 dark:border-zinc-900">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
        Trusted by teams at the world&apos;s best companies
      </p>
      <div className="overflow-hidden w-full">
        <div className="carousel-track">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-3 cursor-default select-none group"
            >
              <div className="w-7 h-7 relative flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold whitespace-nowrap text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}