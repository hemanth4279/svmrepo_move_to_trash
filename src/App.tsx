
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">

        {/* Status Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0 3.75h.01M10.29 3.86l-8.1 14a2 2 0 001.73 3h16.16a2 2 0 001.73-3l-8.1-14a2 2 0 00-3.42 0z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pipeline Breakdown
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          Our pipeline is currently experiencing a temporary breakdown.
          Our team is working to resolve the issue.
        </p>

        {/* Please Wait */}
        <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          Please wait. We will be live soon.
        </div>

        {/* Footer Message */}
        <p className="text-sm text-gray-400 mt-8">
          Thank you for your patience and understanding.
        </p>

      </div>
    </div>
  );
}

export default App;
