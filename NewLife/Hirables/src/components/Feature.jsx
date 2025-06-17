import { useState, useEffect } from 'react';

export default function Feature() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-50 rounded-full opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-50 rounded-full opacity-40"></div>
      </div>

      {/* Main Content Container */}
      <div className={`relative transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Border Card */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
          
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl"></div>
          
          {/* Left border accent */}
          <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          
          <div className="relative z-10 space-y-6">
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className={`text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}>
                Practice with AI. 
                <span className="text-blue-600"> Real questions.</span>
                <span className="text-purple-600"> Real feedback.</span>
                <span className="text-gray-900"> Real growth.</span>
              </h1>
              
              {/* Animated underline */}
              <div className={`h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 delay-500 ${
                isVisible ? 'w-32' : 'w-0'
              }`}></div>
            </div>

            {/* Subheading */}
            <div className={`transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-xl md:text-2xl text-gray-700 font-medium relative inline-block group">
                Interview like a Pro, with AI Flow.
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-700 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="relative z-10">Start Practicing</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white hover:bg-blue-50">
                Learn More
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Stats or Features */}
            <div className={`flex flex-wrap gap-8 pt-6 border-t border-gray-100 transform transition-all duration-700 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">AI-Powered Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">Real Interview Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">Personalized Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}