// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog, priority = false }) {
  return (
    <div className="border border-border-clean hover:border-accent-blue/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 bg-surface rounded-xl relative group overflow-hidden flex flex-col"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          className='h-full w-full group-hover:scale-105 transition-all duration-500 object-cover'
          alt=""
          priority={priority}
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center text-text-secondary text-xs font-mono mb-2">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill size={10} className="text-red-500" />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt size={10} />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='mb-2 cursor-pointer text-lg text-text-primary font-bold hover:text-accent-blue leading-snug transition-colors line-clamp-2'>
            {blog.title}
          </p>
        </Link>
        <p className='text-xs text-accent-blue font-mono font-semibold mb-3'>
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-sm text-text-secondary line-clamp-3 leading-relaxed flex-1'>
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;