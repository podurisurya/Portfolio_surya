const CertificatePage = ({ category }) => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">{category} Certificates</h2>
      <p>Details about {category} certifications will be displayed here.</p>
      <a
        href="/"
        className="inline-block bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800 mt-4"
      >
        Back to Home
      </a>
    </div>
  );
};

export default CertificatePage;