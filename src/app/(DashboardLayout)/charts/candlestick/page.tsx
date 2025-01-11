import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import ApexCandleStick from "@/app/components/charts/ApexCandleSticks";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Candlestick Chart",
  description: "Generated by create next app",
};
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Candlestick",
  },
];
const CandleStick = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Candlestick" items={BCrumb} />
      <ApexCandleStick />
    </>
  );
};

export default CandleStick;