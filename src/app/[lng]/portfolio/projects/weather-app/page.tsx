import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";
import WeatherAppContent from "./components/weather-app-content/weather-app-content";

const WeatherAppPage: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      language={lng}
      footer={
        <ServerFooter language={lng} path="/portfolio/projects/weather-app" />
      }>
      <WeatherAppContent language={lng} />
    </PageContainer>
  );
};
export default WeatherAppPage;
