export type BaseWeatherFilters = {
  lat: number;
  lon: number;
};

export type LocationsData = {
  type: string;
  features: {
    type: string;
    properties: {
      datasource: {
        sourcename: string;
        attribution: string;
        license: string;
        url: string;
      };
      name: string;
      country: string;
      country_code: string;
      city: string;
      postcode: string;
      district: string;
      suburb: string;
      lon: number;
      lat: number;
      formatted: string;
      address_line1: string;
      address_line2: string;
      category: string;
      timezone: {
        name: string;
        offset_STD: string;
        offset_STD_seconds: number;
        offset_DST: string;
        offset_DST_seconds: number;
      };
      result_type: string;
      rank: {
        importance: number;
        confidence: number;
        confidence_city_level: number;
        match_type: string;
      };
      place_id: string;
    };
    geometry: {
      type: string;
      coordinates: number[];
    };
    bbox: number[];
  }[];
  query: {
    text: string;
    parsed: {
      city: string;
      expected_type: string;
    };
  };
};

export type SinriseSunsetData = {
  results: {
    sunrise: '2023-03-11T06:22:56+00:00';
    sunset: '2023-03-11T17:57:11+00:00';
    solar_noon: '2023-03-11T12:10:03+00:00';
    day_length: 41655;
    civil_twilight_begin: '2023-03-11T05:49:37+00:00';
    civil_twilight_end: '2023-03-11T18:30:30+00:00';
    nautical_twilight_begin: '2023-03-11T05:08:34+00:00';
    nautical_twilight_end: '2023-03-11T19:11:33+00:00';
    astronomical_twilight_begin: '2023-03-11T04:26:20+00:00';
    astronomical_twilight_end: '2023-03-11T19:53:47+00:00';
  };
};
