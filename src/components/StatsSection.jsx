import React, { useRef, useState } from "react";
import useCountUp from "../hooks/useCountUp";

// DATA
const statsData = [
  { value: 101, label: "Happy Clients" },
  { value: 5, label: "Years in Business" },
  { value: 50, label: "Services Provided" },
  { value: 3000, label: "Transactions Processed" },
];

// SINGLE STAT
const StatItem = ({ value, label, start }) => {
  const animatedCount = useCountUp(start ? value : 0, 2200);
  const suffix = value >= 100 && animatedCount === value ? "+" : "";

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
        {animatedCount.toLocaleString()}
        {suffix}
      </div>

      <div className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 tracking-wide">
        {label}
      </div>
    </div>
  );
};

// MAIN SECTION
const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Intersection Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          // Reset so animation re-runs when revisited
          setStartCount(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Trusted by Businesses Worldwide
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Our experience, reliability, and results speak through numbers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              start={startCount}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
