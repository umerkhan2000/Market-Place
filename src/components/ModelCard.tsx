import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModelCardProps {
  id: string;
  title: string;
  creator: string;
  price: number;
  thumbnail: string;
  likes: number;
  downloads: number;
  views: number;
  isFree?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  id,
  title,
  creator,
  price,
  thumbnail,
  likes,
  downloads,
  views,
  isFree = false
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
    >
      <Link to={`/model/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {isFree && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              FREE
            </div>
          )}
          <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">by {creator}</p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">
              {isFree ? 'Free' : `$${price.toFixed(2)}`}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views}
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-3 h-3" />
                {downloads >= 1000 ? `${(downloads / 1000).toFixed(1)}k` : downloads}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ModelCard;
