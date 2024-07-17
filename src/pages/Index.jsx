import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogPost = ({ title, content, date }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <p className="text-sm text-gray-500">{date}</p>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
  </Card>
);

const BlogPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Exploring AI Ethics",
      content: "As we delve deeper into the world of artificial intelligence, it's crucial to consider the ethical implications...",
      date: "2023-06-15"
    },
    {
      id: 2,
      title: "The Future of Machine Learning",
      content: "Machine learning is rapidly evolving, and its applications are becoming increasingly diverse...",
      date: "2023-06-10"
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts(prev => [
        { id: prev.length + 1, ...newPost, date: new Date().toISOString().split('T')[0] },
        ...prev
      ]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Anton Osika's Blog</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
        <Input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Post Title"
          className="mb-4"
        />
        <textarea
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          placeholder="Post Content"
          className="w-full p-2 mb-4 border rounded"
          rows="4"
        />
        <Button type="submit">Add Post</Button>
      </form>

      <div>
        {posts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;