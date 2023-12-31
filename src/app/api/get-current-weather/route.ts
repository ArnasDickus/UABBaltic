import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import {
  IWeatherApiRequest,
  ICurrentWeatherApiResponse,
} from "@/app/[lng]/portfolio/projects/weather-app/components/interfaces";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NGetCurrentWeather.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const { lat, lon, language }: NGetCurrentWeather.IRequest["body"] =
    await req.json();

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${
        language || "en"
      }&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );

    if (weatherResponse.status !== StatusCodes.okStatus) {
      return NextResponse.json(
        { message: `Internal server error` },
        { status: StatusCodes.internalServerError }
      );
    }

    const weatherData: NGetCurrentWeather.IResponse =
      await weatherResponse.json();

    return NextResponse.json(
      { message: "Success", response: weatherData },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    console.error("error -> ", error);
    return NextResponse.json(
      { message: `Error, ${error}` },
      { status: StatusCodes.internalServerError }
    );
  }
};

export namespace NGetCurrentWeather {
  export interface IRequest {
    body: IWeatherApiRequest;
  }
  export interface IResponse extends ICurrentWeatherApiResponse {}
}
