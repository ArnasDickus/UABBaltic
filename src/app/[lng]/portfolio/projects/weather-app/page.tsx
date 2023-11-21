import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";
import WeatherAppContent from "./components/weather-app-content/weather-app-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App an app to show weather",
  keywords: ["Weather"],
};

const WeatherAppPage: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer language={lng}>
      <WeatherAppContent language={lng} />
    </PageContainer>
  );
};
export default WeatherAppPage;
