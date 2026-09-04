import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHOTOS = [
  {
    id: 1,
    url: "/gallery/Expo.jpeg",
    event: "Exhibition",
    year: "2026"
  },
  {
    id: 2,
    url: "/gallery/I-Bacus.jpeg",
    event: "I-BACUS-TECH Internship",
    year: "2025"
  },
  {
    id: 3,
    url: "/gallery/Iv.jpeg",
    event: "Industrial Visit",
    year: "2025"
  },
  {
    id: 4,
    url: "/gallery/KPR%20Hackathon.jpeg",
    event: "KPR Hackathon",
    year: "2026"
  },
  {
    id: 5,
    url: "/gallery/cit%20hackathon.jpeg",
    event: "CRYPTERA National Hackathon",
    year: "2026"
  },
  {
    id: 6,
    url: "/gallery/codezap.jpeg",
    event: "Codezap",
    year: "2026"
  },
  {
    id: 7,
    url: "/gallery/expo%20cit.jpeg",
    event: "AI/4.0 Solution Expo",
    year: "2026"
  },
  {
    id: 8,
    url: "/gallery/intern%20.jpeg",
    event: "Data Analysis Training",
    year: "2025"
  },
  {
    id: 9,
    url: "/gallery/intern%203.jpeg",
    event: "Dashboard Development",
    year: "2025"
  },
  {
    id: 10,
    url: "/gallery/proj%20expo.jpeg",
    event: "Project Expo",
    year: "2026"
  },
  {
    id: 11,
    url: "/gallery/proj%20expo2.jpeg",
    event: "Project Presentation",
    year: "2026"
  },
  {
    id: 12,
    url: "/gallery/sns.jpeg",
    event: "Hackathon at SNS Institutions",
    year: "2026"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-32 px-6 md:px-16 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 uppercase">08 — My Journey in frames</h2>
          <div className="w-12 h-1 bg-red-accent mb-6"></div>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            A glimpse into the hackathons, exhibitions, research presentations, and experiences that shaped my journey.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(photo)}
              className="relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-6 border border-white/10 hover:border-red-accent hover:shadow-[0_0_30px_rgba(229,9,20,0.3)] transition-all duration-500 bg-card-bg"
            >
              {/* Image */}
              <img 
                src={photo.url} 
                alt={photo.event} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              
              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-red-accent text-sm font-bold tracking-widest uppercase block mb-1">{photo.year}</span>
                  <h4 className="text-white font-display font-bold text-xl leading-tight">{photo.event}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-red-accent transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.event}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-[0_0_40px_rgba(229,9,20,0.2)] border border-white/10"
              />
              <div className="mt-6 text-center">
                <span className="text-red-accent font-bold tracking-widest text-sm uppercase block mb-2">{selectedImage.year}</span>
                <h3 className="text-white font-display font-bold text-2xl md:text-3xl">{selectedImage.event}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
