const SkillCard = ({ title, skills, buttonText, buttonLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="list-disc pl-5 mb-4">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">{skill}</li>
        ))}
      </ul>
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default SkillCard;