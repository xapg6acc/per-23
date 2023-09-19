interface DummyUser {
  id: number;
  username: string;
}

export interface DummyComment {
  id: number;
  body: string;
  postId: number;
  user: DummyUser;
}

export interface DummyData {
  comments: DummyComment[];
  total: number;
  skip: number;
  limit: number;
}
