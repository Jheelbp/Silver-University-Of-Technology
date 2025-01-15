import React, { useEffect, useRef } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Color palettes
const PINK_COLORS = ["#FF69B4", "#FF1493", "#DB7093", "#C71585", "#FF82AB"];
const RED_COLORS = ["#FF0000", "#DC143C", "#B22222", "#8B0000", "#CD5C5C"];
const ORANGE_COLORS = ["#FFA500", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500"];
const YELLOW_COLORS = ["#FFD700", "#FFA07A", "#FFB6C1", "#FFDAB9", "#F0E68C"];

// Data sets
const deptSalaryData = [
  { name: "Computer Science", value: 20 },
  { name: "Civil", value: 6.87 },
  { name: "Electrical", value: 10.43 },
  { name: "IT", value: 17.38 },
  { name: "Mechanical", value: 9 },
  { name: "Chemical", value: 7.28 },
];

const ctcDistributionData = [
  { category: "Elite", value: 28 },
  { category: "Super Dream", value: 48.4 },
  { category: "Dream", value: 21.5 },
  { category: "Normal", value: 2.2 },
];

const categorySelectionData = [
  { category: "Placement", value: 85 },
  { category: "Higher Studies", value: 15 },
];

const researchInternshipData = [
  { institute: "IIT Bombay", value: 55.4 },
  { institute: "IIT Patna", value: 20.4 },
  { institute: "IIT Bombay (others)", value: 4.1 },
  { institute: "Inhouse", value: 14.3 },
  { institute: "Others", value: 6.1 },
];

// Reusable DonutChart component
function DonutChart({ data, dataKey, nameKey, colors, animationDelay = 0 }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // Initial state - hidden
      gsap.set(chart, { opacity: 0, scale: 0.8 });

      // Animation on scroll
      gsap.to(chart, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: animationDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chart,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [animationDelay]);

  return (
    <div ref={chartRef} className="w-full h-full">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Main Pies component
function Pies() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Department Wise Salary */}
        <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Department Wise Average Salary
          </h2>
          <DonutChart
            data={deptSalaryData}
            dataKey="value"
            nameKey="name"
            colors={PINK_COLORS}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CTC Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              CTC Wise Percentage Placement
            </h2>
            <DonutChart
              data={ctcDistributionData}
              dataKey="value"
              nameKey="category"
              colors={RED_COLORS}
              animationDelay={0.2}
            />
          </div>

          {/* Category Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              Categoric Selection of Students
            </h2>
            <DonutChart
              data={categorySelectionData}
              dataKey="value"
              nameKey="category"
              colors={ORANGE_COLORS}
              animationDelay={0.4}
            />
          </div>

          {/* Research Internship */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              Research Internship of Students
            </h2>
            <DonutChart
              data={researchInternshipData}
              dataKey="value"
              nameKey="institute"
              colors={YELLOW_COLORS}
              animationDelay={0.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pies;
