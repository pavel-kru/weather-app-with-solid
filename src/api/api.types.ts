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
