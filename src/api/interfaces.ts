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
  };
}

export type ShortPost = Pick<
  Post,
  'id' | 'title' | 'excerpt' | 'image' | 'created'
>;

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  related: ShortPost[];
  created: string;
  image?: {
    url: string;
    alt: string;
  };
  modified?: string;
}
