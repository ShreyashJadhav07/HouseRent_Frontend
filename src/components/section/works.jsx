"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Works() {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepIndex = parseInt(entry.target.dataset.step);
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      title: "Inquire About Any Rental",
      description: "Our dedicated team is here to answer any questions you may have and provide any additional information."
    },
    {
      number: "2", 
      title: "Guided Property Tour",
      description: "During the tour, we'll walk you through each area and key elements that make our property special."
    },
    {
      number: "3",
      title: "Application Process", 
      description: "Our team understands the importance of finding the right fit, and we prioritize matching you with your ideal home."
    },
    {
      number: "4",
      title: "Move In And Orientation",
      description: "Prior to your move-in date, we will arrange a time for you to collect the keys and complete a move-in inspection."
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You can find detailed information about each property, 
            including photos, amenities, and rental terms.
          </p>
        </div>

     
        <div className="relative max-w-6xl mx-auto">
      
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-50"></div>
          </div>

          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 lg:hidden"></div>

          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                data-step={index}
                className={`relative transition-all duration-700 transform ${
                  visibleSteps.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                
                <div className="hidden lg:block">
                  {index % 2 === 0 ? (
                   
                    <div className="flex items-center">
                  
                      <div className="absolute -top-8 left-0">
                        <span className="text-8xl font-bold text-gray-200 select-none">
                          {step.number}
                        </span>
                      </div>
                      
                      
                      <div className="w-1/2 pr-16 pt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-20 z-10">
                        <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                          visibleSteps.has(index) 
                            ? 'bg-gray-900 scale-100 shadow-lg' 
                            : 'bg-gray-300 scale-75'
                        }`}>
                          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            visibleSteps.has(index) 
                              ? 'bg-gray-900 animate-ping opacity-20' 
                              : 'opacity-0'
                          }`}></div>
                        </div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  ) : (
                 
                    <div className="flex items-center">
                      <div className="w-1/2"></div>
                      
                    
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-20 z-10">
                        <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                          visibleSteps.has(index) 
                            ? 'bg-gray-900 scale-100 shadow-lg' 
                            : 'bg-gray-300 scale-75'
                        }`}>
                          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            visibleSteps.has(index) 
                              ? 'bg-gray-900 animate-ping opacity-20' 
                              : 'opacity-0'
                          }`}></div>
                        </div>
                      </div>
                      
                    
                      <div className="w-1/2 pl-16 pt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                    
                      <div className="absolute -top-8 right-0">
                        <span className="text-8xl font-bold text-gray-200 select-none">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

            
                <div className="lg:hidden flex items-start space-x-6">
                
                  <div className="relative z-10 flex items-center justify-center mt-2">
                    <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      visibleSteps.has(index) 
                        ? 'bg-gray-900 scale-100 shadow-lg' 
                        : 'bg-gray-300 scale-75'
                    }`}>
                      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        visibleSteps.has(index) 
                          ? 'bg-gray-900 animate-ping opacity-20' 
                          : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>
                  
                  
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-6xl font-bold text-gray-200 select-none">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}