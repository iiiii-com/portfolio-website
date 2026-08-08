"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide">
          作品集
        </h1>
        <p className="mt-4 text-zinc-400 text-base md:text-lg font-light tracking-wide">
          用镜头记录光与影的诗意
        </p>
      </motion.div>

      {/* Projects */}
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, projectIndex) => (
          <motion.section
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Project Header */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
                {project.title}
              </h2>
              <p className="mt-2 text-zinc-400 text-sm md:text-base font-light max-w-2xl">
                {project.description}
              </p>
            </motion.div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {project.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  variants={itemVariants}
                  className={`relative group overflow-hidden rounded-sm ${
                    image.span || "col-span-1"
                  }`}
                  style={{
                    aspectRatio:
                      image.span?.includes("row-span-2")
                        ? "1/2"
                        : image.span?.includes("col-span-2")
                        ? "2/1"
                        : "1/1",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                    <span className="text-white text-sm font-light px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      {image.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
