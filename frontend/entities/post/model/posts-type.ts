export interface PostList {
  id: number;
  title: string;
  description: string;
  content: string;
  tags?: string[];
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}
