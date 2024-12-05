export default function Partner() {
    return (
      <section className="py-20 md:px-40 px-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className='w-full h-[30px] justify-between   mb-3 flex items-center'>
        <div className='w-[40%] h-[5%] bg-black'></div>
        <div className='pl-3 font-bold text-center pr-3'>Our Partners</div>
        <div className='w-[40%] h-[5%] bg-black'></div>
      </div>
  
          {/* Partner Grid */}
          <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div
                key={partner}
                className="border border-gray-200 rounded-lg p-6 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Placeholder SVG for Partner Logo */}
                <svg
                  className="h-12 w-12 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5l8.5 5v8L12 23l-8.5-5v-8L12 5z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  