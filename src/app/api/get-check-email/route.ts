import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
// import client from "../../../../apollo-client";
// import { GET_USER } from "@/store/modules/user/query";
// import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";
// import { errorResponseHandler } from "@/app/utils/error-response-handler";
// import { ICheckEmailApi } from "@/app/[lng]/register/components/interfaces";
import {
  ICurrentWeatherApiResponse,
  IWeatherApiRequest,
} from "@/app/[lng]/portfolio/projects/weather-app/components/interfaces";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NGetCurrentWeather.IRequest["body"]>;
}

// const checkUserExistence = async (email: string): Promise<boolean> => {
//   try {
//     const user = await client.query<GetUserQuery, GetUserQueryVariables>({
//       query: GET_USER,
//       variables: {
//         whereUser: {
//           email: { _eq: email },
//         },
//       },
//     });

//     return !!user.data.user.length;
//   } catch (error) {
//     errorResponseHandler(error, "Failed to Get User");
//     throw new Error("Failed to Get User");
//   }
// };

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
  // try {
  //   const requestData: NCheckEmail.IRequest["body"] = await req.json();
  //   const emailExist = await checkUserExistence(requestData.email);

  //   return NextResponse.json(
  //     { message: "User checked", response: { emailExist: emailExist } },
  //     { status: StatusCodes.okStatus }
  //   );
  // } catch (error) {
  //   return errorResponseHandler(error, "Failed to get User POST");
  // }
};

export namespace NGetCurrentWeather {
  export interface IRequest {
    body: IWeatherApiRequest;
  }
  export interface IResponse extends ICurrentWeatherApiResponse {}
}

// export namespace NCheckEmail {
//   export interface IRequest {
//     body: {
//       email: string;
//     };
//   }
//   export interface IResponse extends ICheckEmailApi {}
// }
