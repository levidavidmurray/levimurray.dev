
import axios, {AxiosResponse} from 'axios';
import {ProjectResponse} from '@/lib/api/api';

const apiClient = axios.create({
  baseURL: 'http://localhost:3030',
});

export class ProjectService {
  public static async fetchProjects(): Promise<Array<ProjectResponse>> {
    const response: AxiosResponse<Array<ProjectResponse>> = await apiClient.get('/projects');
    return response.data;
  }
}
