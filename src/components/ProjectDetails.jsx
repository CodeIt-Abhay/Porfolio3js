import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full py-10 backdrop-blur-sm">
      <motion.div
        className="relative w-[90%] max-w-lg border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 p-5 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full max-h-[200px] object-contain rounded-lg mb-4"
        />

        {/* Title */}
        <h5 className="mb-2 text-xl font-bold text-white text-center">
          {title}
        </h5>

        {/* Description - now LEFT aligned */}
        <div className="w-full text-left">
          <p className="mb-3 text-sm font-normal text-neutral-400 leading-relaxed">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-2 text-sm font-normal text-neutral-400 leading-relaxed"
            >
              {subDesc}
            </p>
          ))}
        </div>

        {/* Tags + View Project */}
        <div className="flex flex-col items-center w-full mt-4 gap-3">
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="rounded-lg w-8 h-8 hover-animation"
              />
            ))}
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation text-white bg-indigo-600 px-4 py-2 rounded-lg"
          >
            View Project
            <img src="assets/arrow-up.svg" className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
