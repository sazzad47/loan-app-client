import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Transunion: 4000,
    Experian: 2400,
    Equifax: 2400,
  },
  {
    name: "Feb",
    Transunion: 3000,
    Experian: 1398,
    Equifax: 2210,
  },
  {
    name: "Mar",
    Transunion: 2000,
    Experian: 9800,
    Equifax: 2290,
  },
  {
    name: "Apr",
    Transunion: 2780,
    Experian: 3908,
    Equifax: 2000,
  },
  {
    name: "May",
    Transunion: 1890,
    Experian: 4800,
    Equifax: 2181,
  },
  {
    name: "Jun",
    Transunion: 2390,
    Experian: 3800,
    Equifax: 2500,
  },
  {
    name: "Jul",
    Transunion: 3490,
    Experian: 4300,
    Equifax: 2100,
  },
  {
    name: "Aug",
    Transunion: 3490,
    Experian: 4300,
    Equifax: 2100,
  },
  {
    name: "Sep",
    Transunion: 3490,
    Experian: 4300,
    Equifax: 2100,
  },
  {
    name: "Oct",
    Transunion: 3490,
    Experian: 4300,
    Equifax: 2100,
  },
  {
    name: "Nov",
    Transunion: 3490,
    Experian: 4300,
    Equifax: 2100,
  },
  {
    name: "Dec",
    Transunion: 3490,
    Experian: 4300,
    Equifax: 2100,
  },
];

const CustomizedTransunionDot = (props) => {
  const { cx, cy, value } = props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x={cx - 20}
        y={cy - 20}
        width="42"
        height="41"
        viewBox="0 0 42 41"
        fill="none"
      >
        <ellipse
          cx="21.1767"
          cy="20.2427"
          rx="20.5918"
          ry="20.1299"
          fill="#9F86C0"
          fill-opacity="0.1"
        />
        <ellipse
          cx="21.1764"
          cy="20.0315"
          rx="13.7066"
          ry="13.3992"
          fill="#9F86C0"
          fill-opacity="0.19"
          stroke="#9F86C0"
          stroke-opacity="0.08"
        />
        <ellipse
          cx="21.1765"
          cy="20.0312"
          rx="6.90988"
          ry="6.75488"
          fill="#9F86C0"
        />
      </svg>
    );
  }

  const CustomizedExperianDot = (props) => {
    const { cx, cy, value } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={cx - 20}
      y={cy - 20}
      width="42"
      height="41"
      viewBox="0 0 42 41"
      fill="none"
    >
      <ellipse
        cx="21.0889"
        cy="20.5508"
        rx="20.5918"
        ry="20.1299"
        fill="#62DF19"
        fill-opacity="0.17"
      />
      <ellipse
        cx="21.0885"
        cy="20.3391"
        rx="13.7066"
        ry="13.3992"
        fill="#62DF19"
        fill-opacity="0.15"
        stroke="#62DF19"
        stroke-opacity="0.15"
      />
      <ellipse
        cx="21.0886"
        cy="20.3394"
        rx="6.90988"
        ry="6.75488"
        fill="#62DF19"
      />
    </svg>
  );
};

  const CustomizedEquifaxDot = (props) => {
    const { cx, cy, value } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={cx - 20}
      y={cy - 20}
      width="42"
      height="41"
      viewBox="0 0 42 41"
      fill="none"
    >
      <ellipse
        cx="21.04"
        cy="20.4585"
        rx="20.5918"
        ry="20.1299"
        fill="#5465FF"
        fill-opacity="0.17"
      />
      <ellipse
        cx="21.0396"
        cy="20.2473"
        rx="13.7066"
        ry="13.3992"
        fill="#5465FF"
        fill-opacity="0.15"
        stroke="#5465FF"
        stroke-opacity="0.15"
      />
      <ellipse
        cx="21.0398"
        cy="20.2471"
        rx="6.90988"
        ry="6.75488"
        fill="#5465FF"
      />
    </svg>
  );
};

export default function MyScore() {
  return (
    <div className="w-[70%] bg-white p-5 rounded-[2.9375rem]">
        <div className="">
        <h3 className="my-score mb-3"> My Score </h3>
        </div>

    <ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Experian"
          stroke="#5465FF"
          dot={<CustomizedTransunionDot />}
        />
        <Line type="monotone" dataKey="Transunion" stroke="#62DF19" dot={<CustomizedExperianDot />} />
        <Line type="monotone" dataKey="Equifax" stroke="#9F86C0" dot={<CustomizedEquifaxDot />} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}
