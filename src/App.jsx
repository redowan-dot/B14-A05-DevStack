import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Load technologies data from public/technologies.json
  
  useEffect(() => {
  const loadTechnologies = async () => {
    try {
      const res = await fetch('/technologies.json');

      if (!res.ok) {
        throw new Error('Failed to load technologies');
      }

      const data = await res.json();

      setTechnologies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading technologies:', error);
      toast.error('Failed to load technology data');
      setLoading(false);
    }
  };

  loadTechnologies();
}, []);

  // Add a technology to the stack
  const handleAddToStack = (tech) => {
    // Check if the technology is already added
    const alreadyExists = stack.find((item) => item.id === tech.id);

    if (alreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove a single technology from the stack
  const handleRemoveFromStack = (techId) => {
    const removedItem = stack.find((item) => item.id === techId);
    const updatedStack = stack.filter((item) => item.id !== techId);
    setStack(updatedStack);

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack.`);
    }
  };

  // Remove all technologies from the stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-100 selection:text-pink-900">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Banner Section */}
      <main className="flex-grow">
        <HeroBanner />

        {/* Technologies Grid & Sidebar Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
          
          {/* Section Header */}
          <div className="mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Asynchronous Loading State or Content Grid */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              
              <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => {
                  const isInStack = stack.some((item) => item.id === tech.id);
                  return (
                    <TechnologyCard
                      key={tech.id}
                      tech={tech}
                      isInStack={isInStack}
                      onAddToStack={handleAddToStack}
                    />
                  );
                })}
              </div>

              {/* Your Stack Sidebar Panel */}
              <div className="lg:col-span-4 xl:col-span-3">
                <YourStack
                  stack={stack}
                  onRemoveFromStack={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>

            </div>
          )}
        </section>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
