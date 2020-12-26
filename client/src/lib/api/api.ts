
import axios from 'axios';
import {Config} from '@/lib/config';

export const SERVER_HOST = Config.isDev ? Config.URL.serverDev : Config.URL.serverProd;

export const apiClient = axios.create({
  baseURL: SERVER_HOST,
});

export interface MediaResponse {
  byte_size: number;
  content_type: "image/jpeg" | "image/png" | "video/mp4";
  created_at: string;
  filename: string;
  link: string;
}

export interface ProjectResponse {
  id: string;
  project_id: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string;
  project_url: string;
  source_url: string;
  thumbnail: MediaResponse;
  showcase_images: MediaResponse[];
}

export interface SiteDataResponse {
  about_me_html: string;
  about_me_md: string;
}
