// Set the necessary types
type UUID = string;
 
// Set a type definition for posts,
interface Post {
  post_type: 'human_text' | 'genai_text' | 'genai_image';
  title: string;
  content: string;
  created_by: UUID;
  created_at: Date;
}
 
// Create dummy data
const posts: Post[] = [
  {
    post_type: 'human_text',
    title: 'Human Generated Text Post',
    content: 'This is a human-generated text content.',
    created_by: '123e4567-e89b-12d3-a456-426614174000',
    created_at: new Date('2023-01-01T10:00:00Z')
  },
  {
    post_type: 'genai_text',
    title: 'AI Generated Text Post',
    content: 'This is an AI-generated text content.',
    created_by: '123e4567-e89b-12d3-a456-426614174001',
    created_at: new Date('2023-02-01T10:00:00Z')
  },
  {
    post_type: 'genai_image',
    title: 'AI Generated Image Post',
    content: 'This is an AI-generated image content.',
    created_by: '123e4567-e89b-12d3-a456-426614174002',
    created_at: new Date('2023-03-01T10:00:00Z')
  }
];
 
// Exporting posts for use in other modules
export default posts;