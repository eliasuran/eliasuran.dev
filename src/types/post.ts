export interface Post {
  data: {
    title: string;
    desc: string;
    date: string;
    published: boolean;
  };
  slug: string;
}
