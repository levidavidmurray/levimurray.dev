
import {AxiosResponse} from 'axios';
import {apiClient, SiteDataResponse} from '@/lib/api/api';

export class SiteDataService {
  public static async fetchSiteData(): Promise<SiteDataResponse> {
    const response: AxiosResponse<SiteDataResponse> = await apiClient.get('/site_data');
    return response.data;
  }
}
