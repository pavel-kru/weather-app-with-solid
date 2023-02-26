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
      lon: 27.5428318;
      lat: 53.8649531;
      formatted: string;
      address_line1: string;
      address_line2: string;
      category: string;
      timezone: {
        name: string;
        offset_STD: string;
        offset_STD_seconds: 10800;
        offset_DST: string;
        offset_DST_seconds: 10800;
      };
      result_type: string;
      rank: {
        importance: 0.27501;
        confidence: 1;
        confidence_city_level: 1;
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
