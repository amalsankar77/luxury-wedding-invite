"use client";

import { motion } from "framer-motion";
export default function Story() {
  return (
    <section id="story" className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
        <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
></motion.div>

      <h2 className="text-5xl font-bold mb-8">
        Our Story
      </h2>

      <p className="max-w-2xl text-center text-lg leading-8">
        Two people from different journeys met unexpectedly
        and created a bond that changed everything forever.
      </p>

    </section>
  );
}