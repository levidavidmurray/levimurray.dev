
import {AxiosResponse} from 'axios';
import {apiClient, ProjectResponse} from '@/lib/api/api';

export class ProjectService {
  public static async fetchProjects(): Promise<Array<ProjectResponse>> {
    const response: AxiosResponse<Array<ProjectResponse>> = await apiClient.get('/projects');
    return response.data;
  }
}
