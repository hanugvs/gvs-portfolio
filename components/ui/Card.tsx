import React from 'react';

type ProjectLike = {
  title?: string;
  description?: string;
  techStack?: string[];
};

interface CardProps {
  title?: string;
  description?: string;
  techStack?: string[];
  link?: string;
  project?: ProjectLike;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  techStack,
  link,
  project,
}) => {
  const renderTags = (tags?: string[]) => (
    <div className="mt-4">
      {tags?.map((tech, index) => (
        <span
          key={index}
          className="inline-block bg-gray-700 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
      {project ? (
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300 mt-2">{project.description}</p>
          {renderTags(project.techStack)}
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 mt-2">{description}</p>
          {renderTags(techStack)}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              View Project
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
