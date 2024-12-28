import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
  'https://images.unsplash.com/photo-1519766304817-4f37bda74a26',
  'https://images.unsplash.com/photo-1526676037777-05a232554f77'
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Sports"
        />
      </AnimatePresence>
    </div>
  );
};