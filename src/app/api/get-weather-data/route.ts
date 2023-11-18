import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";

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
    body: {
      lat: number;
      lon: number;
    };
  }
  export interface IResponse {
    message: string;
    response: {
      base: string;
      clouds: {
        all: number;
      };
      cod: number;
      coord: {
        lon: number;
        lat: number;
      };
      dt: number;
      id: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grind_level: number;
        humidity: number;
      };
      name: string;
      sys: {
        type2: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
      };
      timezone: number;
      visibility: number;
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
    };
  }
}
