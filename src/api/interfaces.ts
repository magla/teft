export interface Author {
  id: number;
  name: string;
  meta: {
    title: string;
    company: string;
    avatar: string;
    twitterUrl: string;
    instagramUrl: string;
    facebookUrl: string;
  }
};

type ShortPost = Pick<Post, 'id' | 'title' | 'excerpt' | 'image' | 'modified'>;

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  related: ShortPost[];
  created: string;
  image?: string;
  modified?: string;
}