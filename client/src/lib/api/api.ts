
export const SERVER_HOST = "http://localhost:3030";

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
