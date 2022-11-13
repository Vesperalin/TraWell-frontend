import { Comment } from './Comment';

export interface CommentsResponse {
  page_size: number;
  count: number;
  results: Comment[];
}
