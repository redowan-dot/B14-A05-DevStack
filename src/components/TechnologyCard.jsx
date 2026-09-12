import React from 'react';

const TechnologyCard = ({ tech, isInStack, onAddToStack }) => {
  const { name, category, description, icon, rating, difficulty, badge, badgeColor } = tech;
  const badgeClass = badgeColor || 'text-purple-600 bg-purple-50 border-purple-200';

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Header: Tech Icon & Badge */}
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 p-2 border border-slate-100">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-full h-full object-contain"
            />
          </div>
          {badge && (
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Name and Description */}
        <h3 className="text-xl font-bold text-slate-900 mt-4 tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Metadata Details: Category, Difficulty, Rating */}
        <div className="flex items-center justify-between text-xs mt-6 pt-4 border-t border-slate-100">
          <span className="bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md">
            {category}
          </span>
          <span className="text-slate-500 font-medium">{difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <svg
              className="w-4 h-4 text-amber-400 fill-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      

      {/* Action Button: Disabled when added, but clicking triggers duplicate warning */}
      <div
        className="mt-5"
        onClick={() => {
          if (isInStack) {
            onAddToStack(tech);
          }
        }}
      >
        {isInStack ? (
          <button
            type="button"
            disabled
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-medium text-sm flex items-center justify-center gap-1.5 cursor-not-allowed pointer-events-none"
          >
            <span>✓</span> Added to Stack
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAddToStack(tech)}
            className="w-full py-2.5 px-4 rounded-xl bg-[#0c121e] hover:bg-[#1e2738] text-white font-medium text-sm transition-all duration-150 active:scale-95 shadow-sm"
          >
            Add to Stack
          </button>
        )}
      </div>
    </div>
  );
};

export default TechnologyCard;
