import React from 'react';

const HeroBanner = () => {
  return (
    <section id="home" className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                className="bg-brand-gradient text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full hover:opacity-95 shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center justify-center"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full hover:bg-slate-50 transition-all duration-200 inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Hero Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none flex justify-center">
              <img
                src="/assets/banner-stack.png"
                alt="DevStack Architecture Layer Illustration"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
