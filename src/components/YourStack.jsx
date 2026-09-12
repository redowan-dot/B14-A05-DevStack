import React from 'react';

const YourStack = ({ stack, onRemoveFromStack, onRemoveAll }) => {
  const count = stack.length;

  return (
    <aside className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm sticky top-24">
      {/* Header */}
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">
        Your Stack
      </h2>
      <p className="text-sm text-slate-400 mt-1">
        {count === 0
          ? 'No technologies selected yet.'
          : `${count} Technology Selected`}
      </p>

      {/* Stack Items Content */}
      <div className="mt-6">
        {count === 0 ? (
          /* Empty State */
          <div className="border border-dashed border-sky-100 rounded-xl py-10 px-4 text-center bg-[#fbfdff]">
            <p className="text-sm text-slate-400 font-normal">
              Your stack is empty.
            </p>
          </div>
        ) : (
          /* Selected Items List */
          <div className="space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200/80 rounded-xl p-3 flex items-center justify-between bg-white hover:border-slate-300 transition-all duration-150"
              >
                {/* Tech Icon + Info */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 p-1.5 border border-slate-100 flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Remove Single Item Button */}
                <button
                  type="button"
                  onClick={() => onRemoveFromStack(item.id)}
                  aria-label={`Remove ${item.name} from stack`}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}

            {/* Remove All Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onRemoveAll}
                className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-500 hover:bg-red-50/70 text-sm font-semibold transition-all duration-150 active:scale-[0.99]"
              >
                Remove All
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default YourStack;
