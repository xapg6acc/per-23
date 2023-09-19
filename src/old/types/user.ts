export interface Post {
  id: number;
  title: string;
  createdAt: Date;
  content?: string | null;
  published: boolean;
  authorId: number;
  User: User;
}

export interface Profile {
  id: number;
  bio?: string | null;
  userId: number;
  User: User;
}

export interface User {
  id: number;
  name?: string | null;
  email: string;
  Post?: Post[];
  Profile?: Profile | null;
}
