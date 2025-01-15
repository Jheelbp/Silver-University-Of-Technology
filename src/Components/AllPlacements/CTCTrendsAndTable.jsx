import React, { useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ctcComparisonData = [
  { year: "2020-21", average: 12.5, median: 10 },
  { year: "2021-22", average: 14.2, median: 12 },
  { year: "2022-23", average: 15.8, median: 13.5 },
  { year: "2023-24", average: 18.3, median: 15 },
];

const CTCLineChart = ({ data }) => (
  <ResponsiveContainer width="99%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="average"
        stroke="#8884d8"
        strokeWidth={2}
        name="Average CTC"
      />
      <Line
        type="monotone"
        dataKey="median"
        stroke="#82ca9d"
        strokeWidth={2}
        name="Median CTC"
      />
    </LineChart>
  </ResponsiveContainer>
);

const CTCTable = ({ data }) => (
  <TableContainer>
    <Table sx={{ border: "1px solid #ddd" }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
          <TableCell sx={{ fontWeight: "bold" }}>Metric</TableCell>
          {data.map((stat) => (
            <TableCell
              key={stat.year}
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {stat.year}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {["Average (CTC)", "Median (CTC)"].map((metric, idx) => (
          <TableRow
            key={idx}
            sx={{
              backgroundColor: idx % 2 === 0 ? "#fafafa" : "white",
            }}
          >
            <TableCell sx={{ fontWeight: "bold" }}>{metric}</TableCell>
            {data.map((stat, index) => (
              <TableCell key={index} align="center">
                {metric === "Average (CTC)"
                  ? `${stat.average} LPA`
                  : `${stat.median} LPA`}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const CTCTrendsAndTable = () => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const tableRef = useRef(null);
  const insightsRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      })
      .from(".chart-title", { opacity: 0, x: -30, duration: 0.6 })
      .from(".recharts-wrapper", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.2)",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      })
      .from(".table-title", { opacity: 0, x: -30, duration: 0.6 })
      .from("thead tr", { opacity: 0, y: -20, duration: 0.4 })
      .from("tbody tr", { opacity: 0, x: -20, duration: 0.4, stagger: 0.2 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: insightsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      })
      .from(".insights-title", { opacity: 0, y: -20, duration: 0.6 })
      .from(".insight-paragraph", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
      });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row gap-6">
      {/* Left Section: Graph and Table */}
      <div className="flex-1">
        <Paper
          elevation={3}
          sx={{ padding: 3, borderRadius: 2, marginBottom: 3 }}
          ref={chartRef}
        >
          <h2 className="text-xl font-semibold mb-4 chart-title">CTC Trends</h2>
          <CTCLineChart data={ctcComparisonData} />
        </Paper>

        <Paper
          elevation={3}
          sx={{ padding: 3, borderRadius: 2 }}
          ref={tableRef}
        >
          <h2 className="text-xl font-semibold mb-4 table-title">
            CTC Comparison Table
          </h2>
          <CTCTable data={ctcComparisonData} />
        </Paper>
      </div>

      {/* Right Section: Insights */}
      <div className="flex-1" ref={insightsRef}>
        <Paper
          elevation={3}
          sx={{ padding: 3, borderRadius: 2, height: "100%" }}
        >
          <h2 className="text-xl font-semibold mb-4 insights-title">
            Insights
          </h2>
          <Typography variant="body1" className="insight-paragraph">
            Over the years, there has been a consistent growth in both the
            average and median CTC offered to students. This trend highlights
            the increasing demand for skilled professionals across various
            industries. The institution's focus on nurturing technical
            expertise, innovative thinking, and real-world problem-solving
            capabilities has significantly contributed to this growth. Graduates
            are equipped with cutting-edge skills that align with the evolving
            needs of the job market, making them highly sought-after by top
            recruiters.
          </Typography>
          <Typography variant="body1" className="insight-paragraph">
            The upward trajectory reflects the institution’s commitment to
            student employability and fostering collaborations with top
            organizations. By establishing strategic partnerships with leading
            companies and hosting career development programs, the institution
            ensures that students are exposed to the latest industry practices
            and trends. Initiatives such as internship opportunities, live
            projects, and industry visits provide hands-on experience, preparing
            students for the challenges of the modern workplace.
          </Typography>
          <Typography variant="body1" className="insight-paragraph">
            The steady increase in median CTC demonstrates equitable placement
            outcomes, ensuring opportunities for all. This achievement reflects
            the institution's inclusive approach to education, where every
            student, irrespective of their background, is empowered to succeed.
            Special attention is given to bridging skill gaps through
            personalized mentoring, soft skills training, and technical
            workshops, enabling students from diverse streams to achieve their
            career aspirations. The focus on equity fosters a sense of
            confidence and determination among the student community.
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default CTCTrendsAndTable;
