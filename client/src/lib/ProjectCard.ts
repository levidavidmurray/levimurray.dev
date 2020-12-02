
export interface ProjectLinks {
  source: string;
  project: string;
}
export interface ProjectCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string;
  links: ProjectLinks;
  images: Array<number>; // TODO: Image array
}
