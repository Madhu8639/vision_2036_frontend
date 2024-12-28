import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative h-[50vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3)'
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
};