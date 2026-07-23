// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ContactForm from './contact-form';

import GradientText from '../../helper/gradient-text';

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-32 border-t border-border-clean pt-16 mx-auto max-w-[1120px]">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Connection</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          Get in <span className="text-accent-blue">touch</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <ContactForm />
        <div className="lg:pl-8">
          <div className="flex flex-col gap-6 lg:gap-8 text-text-secondary">
            <p className="text-sm md:text-lg flex items-center gap-4">
              <MdAlternateEmail
                className="bg-accent-dim text-accent-blue p-2.5 rounded-full hover:bg-accent-blue hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                size={40}
              />
              <span className="font-medium text-text-primary">{personalData.email}</span>
            </p>
            {personalData.phone && (
              <p className="text-sm md:text-lg flex items-center gap-4">
                <IoMdCall
                  className="bg-accent-dim text-accent-blue p-2.5 rounded-full hover:bg-accent-blue hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  size={40}
                />
                <span className="font-medium text-text-primary">
                  {personalData.phone}
                </span>
              </p>
            )}
            <p className="text-sm md:text-lg flex items-center gap-4">
              <CiLocationOn
                className="bg-accent-dim text-accent-blue p-2.5 rounded-full hover:bg-accent-blue hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                size={40}
              />
              <span className="font-medium text-text-primary">
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-4">
            {personalData.github && (
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className="bg-accent-dim text-accent-blue p-3 rounded-full hover:bg-accent-blue hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-accent-dim text-accent-blue p-3 rounded-full hover:bg-accent-blue hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
            {personalData.leetcode && (
              <Link target="_blank" href={personalData.leetcode}>
                <SiLeetcode
                  className="bg-accent-dim text-accent-blue p-3 rounded-full hover:bg-accent-blue hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;