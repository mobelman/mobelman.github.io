import {ImageWithMetadata} from './image-with-metadata.model';

export class Product {
  id: number = -1;
  name: string = "";
  description: string = "";
  details: string = "";
  images: ImageWithMetadata[] = [];
}
