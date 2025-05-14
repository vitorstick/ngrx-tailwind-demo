import { Post } from './Post';

// Define the allowed properties as a const array to ensure type safety
export const postProperties = ['title', 'userId', 'id', 'body'] as const;
// Create a union type from the array values
export type PostProperty = (typeof postProperties)[number];

export interface PostViewModel extends Post {
  selected: boolean;
  visibleProperty: PostProperty;
}
