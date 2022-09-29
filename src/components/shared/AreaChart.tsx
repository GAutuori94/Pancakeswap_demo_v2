import React, { PureComponent } from "react";
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
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs></defs>
        <XAxis dataKey="date" />
        <Tooltip />

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
                />
                <defs>
                  <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={line.color}
                      stopOpacity={0.8}
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
