export interface IWeatherApiRequest {
  lat: number;
  lon: number;
  language: string;
}

interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grind_level: number;
  humidity: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ICurrentWeatherApiResponse {
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
    main: IWeatherMain;
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
    weather: IWeather[];
    wind: IWind;
  };
}

export interface I5DaysWeatherApiResponse {
  message: string;
  response: {
    city: {
      id: number;
      coord: {
        lat: number;
        lon: number;
      };
      name: string;
      population: number;
      sunrise: number;
      sunset: number;
      timezone: number;
    };
    cnt: number;
    cod: string;
    list: {
      clouds: {
        all: number;
      };
      dt: number;
      dt_txt: string;
      main: IWeatherMain;
      pop: number;
      sys: {
        pod: string;
      };
      visibility: number;
      weather: IWeather[];
      wind: IWind;
    }[];
    message: number;
  };
}

export interface ICities {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}
