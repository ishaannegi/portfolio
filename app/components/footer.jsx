// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t border-border-clean bg-bg text-text-secondary">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/negiishaan" className="text-accent-blue font-semibold hover:underline">Ishaan Negi</Link>
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link
              target="_blank"
              href="https://github.com/ishaannegi/pf"
              className="flex items-center gap-2 hover:text-accent-blue transition-colors font-mono text-xs"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ishaannegi/pf/fork"
              className="flex items-center gap-2 hover:text-accent-blue transition-colors font-mono text-xs"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Footer;