"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-zinc-700">
            <Image
              src={aboutData.avatarUrl}
              alt="山岚头像"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-8">
            关于我
          </h1>
          <div className="space-y-6">
            {aboutData.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="text-zinc-300 text-base md:text-lg font-light leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
