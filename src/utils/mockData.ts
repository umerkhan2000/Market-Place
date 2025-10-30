import { faker } from '@faker-js/faker';

export interface Model {
  id: string;
  title: string;
  description: string;
  creator: string;
  creatorAvatar: string;
  price: number;
  thumbnail: string;
  likes: number;
  downloads: number;
  views: number;
  category: string;
  tags: string[];
  isFree: boolean;
  fileFormat: string;
  fileSize: string;
  uploadDate: string;
}

const categories = ['Characters', 'Environments', 'Props', 'Vehicles', 'Animals', 'Architecture'];
const formats = ['.glb', '.gltf', '.fbx', '.obj'];

export const generateMockModels = (count: number): Model[] => {
  return Array.from({ length: count }, (_, index) => {
    const isFree = Math.random() > 0.7;
    return {
      id: `model-${index + 1}`,
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      creator: faker.person.fullName(),
      creatorAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`,
      price: isFree ? 0 : parseFloat(faker.commerce.price({ min: 5, max: 99 })),
      thumbnail: `https://picsum.photos/seed/${index}/800/800`,
      likes: faker.number.int({ min: 0, max: 5000 }),
      downloads: faker.number.int({ min: 0, max: 10000 }),
      views: faker.number.int({ min: 100, max: 50000 }),
      category: categories[Math.floor(Math.random() * categories.length)],
      tags: faker.helpers.arrayElements(['3D', 'Low Poly', 'Game Ready', 'PBR', 'Animated', 'Rigged'], { min: 2, max: 4 }),
      isFree,
      fileFormat: formats[Math.floor(Math.random() * formats.length)],
      fileSize: `${faker.number.int({ min: 5, max: 500 })} MB`,
      uploadDate: faker.date.recent({ days: 90 }).toLocaleDateString()
    };
  });
};

export const mockModels = generateMockModels(24);
