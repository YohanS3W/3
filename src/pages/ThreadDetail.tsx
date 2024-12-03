import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ThreadReply from '../components/forum/ThreadReply';
import { forumThreads } from '../data/forumData';
import { MessageSquare } from 'lucide-react';

const ThreadDetail = () => {
  const { id } = useParams<{ id: string }>();
  const thread = forumThreads.find(t => t.id === Number(id));

  if (!thread) {
    return <div>Thread not found</div>;
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg mb-6">
            <h1 className="text-2xl font-bold mb-4">{thread.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Posted by {thread.author}</span>
              <span className="mx-2">•</span>
              <span>{thread.date}</span>
              <span className="mx-2">•</span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {thread.category}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{thread.content}</p>
            <div className="flex items-center text-gray-500">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>{thread.replies.length} replies</span>
            </div>
          </div>

          <div className="space-y-4">
            {thread.replies.map((reply) => (
              <ThreadReply key={reply.id} reply={reply} />
            ))}
          </div>

          <div className="mt-6 bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add a Reply</h3>
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#7A0000] focus:border-transparent"
              rows={4}
              placeholder="Write your reply..."
            />
            <button className="mt-4 bg-[#7A0000] text-white px-6 py-2 rounded-lg hover:bg-[#900000] transition-colors">
              Post Reply
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThreadDetail;