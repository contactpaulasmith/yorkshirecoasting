import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, Coffee, ShowerHead, UtensilsCrossed, WashingMachine, Package, Tv, Car } from "lucide-react";

const sections = [
  {
    icon: Car,
    title: "Parking",
    items: [
      "Parking Permits / Town Parking Disc (please request additional if multiple cars)",
    ],
  },
  {
    icon: ShowerHead,
    title: "Bedroom & Bathroom",
    items: [
      "Freshly made beds with hotel-quality linen",
      "Bath towel for each guest",
      "Hand towels and bath mats",
      "Hairdryer",
      "Hand soap and small complimentary body wash",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Essentials",
    items: [
      "Tea towels",
      "Washing-up liquid",
      "Dish sponge and cleaning cloth",
      "Dishwasher tablets (2 complimentary — bring more for longer stays)",
      "Bin bags",
      "Tea, coffee, sugar and milk portions (welcome supply)",
    ],
  },
  {
    icon: WashingMachine,
    title: "Laundry",
    items: [
      "Washing machine",
      "Washing machine tablets (2 complimentary — bring more for longer stays)",
      "Iron and ironing board",
      "Clothes airer",
    ],
  },
  {
    icon: Package,
    title: "General Supplies",
    items: [
      "Toilet paper (starter supply)",
      "Kitchen roll (starter supply)",
      "Basic cleaning products",
    ],
  },
  {
    icon: Tv,
    title: "Technology",
    items: [
      "Smart TV(s)",
      "Wifi (access information provided on arrival)",
    ],
  },
];

export default function IncludedForStay() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            What's Included for your Stay
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our aim is to provide everything you need to get your holiday off to a great start.
          </p>
        </motion.div>

        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-primary/5 border border-primary/15 rounded-2xl p-6 mb-12 text-muted-foreground leading-relaxed space-y-3"
        >
          <p>
            Consumable items such as tea, coffee, washing-up liquid, dishwasher tablets, laundry detergent and toilet paper are supplied as a complimentary starter pack. For longer stays, or if you use more than the initial supply, supermarkets are conveniently located within a couple of minutes' walk should you wish to purchase additional items.
          </p>
          <p>
            If you need anything during your stay, please don't hesitate to get in touch — we're always happy to help.
          </p>
          <p>
            To help you settle in and enjoy your stay, we've provided a range of essentials for your comfort.
          </p>
        </motion.div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, sIdx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + sIdx * 0.07 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-lg font-serif text-primary">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          Need something we haven't thought of?{" "}
          <a href="/contact" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Get in touch
          </a>{" "}
          — we're always happy to help.
        </motion.p>
      </div>
    </Layout>
  );
}
