import {SERVER_HOST} from '@/lib/api/api';
import {reactive} from 'vue';

const loadImage: (src: string) => Promise<HTMLImageElement> = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(src);
    img.src = src;
  });
};

type AppImagesNames = 'ProjectsHero' | 'ResumePreview';

const AppImagesFilenameMap: { [N in AppImagesNames]: string } = {
  ProjectsHero: 'projects-hero.jpeg',
  ResumePreview: 'resume-preview.png',
};

export const AppImages: { [N in AppImagesNames]: HTMLImageElement | null } = reactive({
  ProjectsHero: null,
  ResumePreview: null,
});

const rejectedImages: string[] = [];

export const preloadImagesAsync = Promise.all(Object.entries(AppImagesFilenameMap).map((entry: [string, string]) => {
  return loadImage(`${SERVER_HOST}/static/${entry[1]}`)
      .then((image) => {
        AppImages[entry[0] as AppImagesNames] = image;
      })
      .catch((rejectedSrc) => rejectedImages.push(rejectedSrc));
}));

