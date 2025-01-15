import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Paper, Typography, Grid } from "@mui/material";

const BLUE_COLORS = ["#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"];

// Placement Data
const branches = ["Computer Science", "IT", "Mechanical", "Electrical", "Chemical", "Civil"];

const branchPlacementData = [
  { year: "2020-21", "Computer Science": 100, "IT": 95, "Mechanical": 80, "Electrical": 75, "Chemical": 70, "Civil": 65 },
  { year: "2021-22", "Computer Science": 100, "IT": 97, "Mechanical": 85, "Electrical": 80, "Chemical": 73, "Civil": 68 },
  { year: "2022-23", "Computer Science": 100, "IT": 99, "Mechanical": 88, "Electrical": 83, "Chemical": 75, "Civil": 70 },
  { year: "2023-24", "Computer Science": 100, "IT": 100, "Mechanical": 90, "Electrical": 85, "Chemical": 78, "Civil": 72 },
];

function Bars() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={4}>
        {/* Text Section on the Left */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Placement Statistics
            </Typography>
            <Typography variant="body1" paragraph>
              This chart illustrates branch-wise placement data for the years 2020-21 through 2023-24. 
              It showcases the consistent improvement in placement rates across all branches, 
              particularly in Computer Science and IT.
            </Typography>
            <Typography variant="body1">
              Explore the chart on the right to see detailed trends and compare the placement 
              statistics for different branches.
            </Typography>
          </Paper>
        </Grid>

        {/* Chart Section on the Right */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
              Branch-wise Placement Statistics
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={branchPlacementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {branches.map((branch, index) => (
                  <Bar
                    key={branch}
                    dataKey={branch}
                    fill={BLUE_COLORS[index % BLUE_COLORS.length]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Bars;