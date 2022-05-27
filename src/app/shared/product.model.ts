import {ImageWithMetadata} from './image-with-metadata.model';

export class Product {
  id: number;
  product: string;
  description: string;
  details: string;
  images: ImageWithMetadata[];
}
