import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export type PriceChartProps = { [key: string]: number | string }[];

type Props = {
  lines?: EnabledChartLines;
  data: PriceChartProps;
};

type EnabledChartLines = {
  value: string;
  color: string;
}[];

export default function CustomAreaChart({ lines, data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        // width={500}
        // height={400}
        className="text-base font-normal"
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          dy={-25}
          dx={-25}
        />
        <Tooltip contentStyle={{ display: "none" }} />

        {lines &&
          lines.map((line, idx) => {
            return (
              <>
                <Area
                  key={idx}
                  type="monotone"
                  dataKey={line.value}
                  stroke={line.color}
                  strokeWidth="2"
                  fill={"url(#colorFill)"}
                  dot={false}
                />
                <defs>
                  <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={line.color}
                      stopOpacity={0.6}
                    />
                    <stop offset="95%" stopColor={line.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
              </>
            );
          })}
      </AreaChart>
    </ResponsiveContainer>
  );
}
