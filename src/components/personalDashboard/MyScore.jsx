import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
    <div className="w-full bg-white p-5 rounded-[2.9375rem]">
        <div className="w-full flex items-center justify-between mb-2">
        <h3 className="my-score mb-3"> My Score </h3>
        <button className="select-time px-3 py-2 flex items-center gap-2">
          This week
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.825818 10.6862C0.830868 11.7645 1.70913 12.6346 2.78747 12.6295C3.86581 12.6245 4.73589 11.7462 4.73084 10.6679C4.72579 9.58953 3.84753 8.71946 2.76919 8.72451C1.69084 8.72956 0.820769 9.60782 0.825818 10.6862ZM2.78249 11.5645C2.29233 11.5668 1.89312 11.1713 1.89082 10.6812C1.88853 10.191 2.28402 9.79181 2.77417 9.78951C3.26433 9.78722 3.66354 10.1827 3.66583 10.6729C3.66813 11.163 3.27264 11.5622 2.78249 11.5645Z" fill="#333333"/>
            <path d="M2.22588 6.41949C2.22726 6.71358 2.46678 6.95087 2.76087 6.9495C3.05497 6.94812 3.29226 6.70859 3.29088 6.4145L3.26429 0.734466C3.26291 0.440373 3.02338 0.203079 2.72929 0.204456C2.4352 0.205833 2.1979 0.44536 2.19928 0.739453L2.22588 6.41949Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88596 2.13286C7.89101 3.21121 8.76928 4.08128 9.84762 4.07623C10.926 4.07118 11.796 3.19292 11.791 2.11458C11.7859 1.03623 10.9077 0.16616 9.82933 0.171209C8.75099 0.176259 7.88091 1.05452 7.88596 2.13286ZM9.84263 3.01123C9.35248 3.01352 8.95326 2.61803 8.95097 2.12788C8.94867 1.63772 9.34416 1.23851 9.83432 1.23622C10.3245 1.23392 10.7237 1.62941 10.726 2.11956C10.7283 2.60972 10.3328 3.00893 9.84263 3.01123Z" fill="#333333"/>
            <path d="M9.35252 12.0663C9.35389 12.3604 9.59342 12.5977 9.88751 12.5963C10.1816 12.5949 10.4189 12.3554 10.4175 12.0613L10.3909 6.38125C10.3895 6.08716 10.15 5.84987 9.85593 5.85124C9.56184 5.85262 9.32454 6.09215 9.32592 6.38624L9.35252 12.0663Z" fill="#333333"/>
          </svg>
        </button>
        </div>

        <div className="w-full flex justify-center gap-5">
        <label>
          <input type="checkbox" className="accent-[#5465FF] w-[15px] h-[15px]" /> <span className="score-label ml-2"> transunion </span> 
        </label>
        <label>
          <input type="checkbox" className="accent-[#62DF19] w-[15px] h-[15px]" /> <span className="score-label ml-2"> experian </span>  
        </label>
        <label>
          <input type="checkbox" className="accent-[#9F86C0] w-[15px] h-[15px]" /> <span className="score-label ml-2"> equifax </span>   
        </label>
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
