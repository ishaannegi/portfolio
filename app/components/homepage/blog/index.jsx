// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  return (
    <div id='blogs' className="my-16 lg:my-32 border-t border-border-clean pt-16 mx-auto max-w-[1120px]">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Writings</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          Latest <span className="text-accent-blue">blogs</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {
          blogs.slice(0, 6).map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>

      <div className="flex justify-center mt-10 lg:mt-16">
        <Link
          className="flex items-center gap-2 rounded-full bg-accent-blue hover:bg-accent-blue/90 px-6 py-2.5 text-center text-xs md:text-sm font-semibold tracking-wide text-white transition-all transform active:scale-95 duration-200 cursor-pointer"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default Blog;