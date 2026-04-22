import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      variants={variants}
    >
      {(eyebrow || title) && (
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          {title && <h2 className="section-title">{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}

export default Section;
