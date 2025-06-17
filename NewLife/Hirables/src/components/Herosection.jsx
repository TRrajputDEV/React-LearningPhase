import { useState, useEffect } from "react";

export default function Herosection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    setIsVisible(true);
    }, []);

    return (
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 ">
      {/* Main Content Container */}
        <div
        className={`relative transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        >
        {/* Border Card */}
        <div className="relative   rounded-2xl p-8 md:p-12  hover:shadow-3xl transition-shadow duration-300">
          {/* Subtle gradient border effect */}
            <div className="absolute rounded-2xl"></div>

          {/* Left border accent */}
            <div className="relative z-10 space-y-6">
            {/* Main Headline */}
            <div className="space-y-2">
                <h1
                className={`text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl transform transition-all duration-700 delay-300 ${
                    isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                >
                Practice with AI.
                <span className="text-gray-800"> Real questions.</span>
                <span className="text-gray-700"> Real feedback.</span>
                <span className="text-green-800"> Real growth.</span>
                </h1>

              {/* Animated underline */}
                <div
                className={`h-0.5 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full transition-all duration-1000 delay-500 ${
                    isVisible ? "w-32" : "w-0"
                }`}
                ></div>
            </div>

            {/* Subheading */}
            <div
                className={`transform transition-all duration-700 delay-700 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
            >
                <p className="text-xl md:text-2xl text-gray-700 font-medium relative inline-block group">
                Interview like a Pro, with AI Flow.
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
                </p>
            </div>

            {/* Stats or Features */}
            <div
                className={`flex flex-wrap gap-8 pt-6 border-t border-gray-100 transform transition-all duration-700 delay-1100 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
            >
                <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">
                    AI-Powered Feedback
                </span>
                </div>
                <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">
                    Real Interview Questions
                </span>
                </div>
                <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">
                    Personalized Growth
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}
