'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">PAGE NOT FOUND</h2>
        <p className="text-xl text-gray-400 mb-8">
          The reel you&apos;re looking for seems to have gone off-screen.
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-neon-pink px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-pink hover:text-black transition-all duration-300"
          >
            RETURN TO HOMEPAGE
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}