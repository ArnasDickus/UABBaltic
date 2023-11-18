import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import {
  IWeatherApiRequest,
  IWeatherApiResponse,
} from "@/app/[lng]/portfolio/projects/weather-app/components/interfaces";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NGetWeatherData.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const { lat, lon }: NGetWeatherData.IRequest["body"] = await req.json();

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );

    if (weatherResponse.status !== StatusCodes.okStatus) {
      return NextResponse.json(
        { message: `Internal server error` },
        { status: StatusCodes.internalServerError }
      );
    }

    const weatherData: NGetWeatherData.IResponse = await weatherResponse.json();

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

export namespace NGetWeatherData {
  export interface IRequest {
    body: IWeatherApiRequest;
  }
  export interface IResponse extends IWeatherApiResponse {}
}
