import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Heart, Share2, ShoppingCart, Eye, MessageCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Model3DViewer from '../components/Model3DViewer';
import { mockModels } from '../utils/mockData';

const ModelDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'details' | 'comments'>('details');
  const model = mockModels.find(m => m.id === id) || mockModels[0];

  const relatedModels = mockModels.filter(m => m.category === model.category && m.id !== model.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-border">
            <Model3DViewer />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{model.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <img src={model.creatorAvatar} alt={model.creator} className="w-6 h-6 rounded-full" />
                  <span>by {model.creator}</span>
                </div>
                <span>•</span>
                <span>{model.uploadDate}</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {model.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  {model.downloads.toLocaleString()} downloads
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {model.likes.toLocaleString()} likes
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {model.category}
                </span>
                {model.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">
                    {model.isFree ? 'Free' : `$${model.price.toFixed(2)}`}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {model.fileFormat} • {model.fileSize}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  {model.isFree ? (
                    <>
                      <Download className="w-5 h-5" />
                      Download Now
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>

                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 border border-border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Like
                  </button>
                  <button className="py-3 border border-border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">Model Information</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Format</dt>
                  <dd className="font-medium">{model.fileFormat}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">File Size</dt>
                  <dd className="font-medium">{model.fileSize}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium">{model.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">License</dt>
                  <dd className="font-medium">{model.isFree ? 'Personal & Commercial' : 'Commercial'}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-border mb-12">
          <div className="border-b border-border">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'details'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('comments')}
                className={`py-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'comments'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Comments (24)
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'details' ? (
              <div className="prose dark:prose-invert max-w-none">
                <p>{model.description}</p>
                <h3>Features</h3>
                <ul>
                  <li>High-quality textures and materials</li>
                  <li>Optimized for real-time rendering</li>
                  <li>Game-ready topology</li>
                  <li>PBR materials included</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <User className="w-10 h-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Add a comment..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={3}
                    />
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Post Comment
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=comment${i}`}
                        alt="User"
                        className="w-10 h-10 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">User {i}</span>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm">Amazing model! Works perfectly in my game project. Highly recommend!</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedModels.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Models</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedModels.map((relatedModel) => (
                <div key={relatedModel.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-border">
                  <img src={relatedModel.thumbnail} alt={relatedModel.title} className="w-full aspect-square object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 line-clamp-1">{relatedModel.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">by {relatedModel.creator}</p>
                    <p className="text-lg font-bold text-blue-600">
                      {relatedModel.isFree ? 'Free' : `$${relatedModel.price.toFixed(2)}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelDetailPage;
