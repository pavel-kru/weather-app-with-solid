import { BaseApiClient } from './base-api-client';

class ProjectApi extends BaseApiClient {
  getLocations = async (search: string) =>
    await this.api.get(
      `geocode/autocomplete?text=${search}&apiKey=${
        import.meta.env.VITE_GEOAPIFY_API_KEY
      }`,
      { prefixUrl: 'https://api.geoapify.com/v1/' }
    );
}

export const projectApi = new ProjectApi();
