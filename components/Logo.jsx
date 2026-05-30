import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image 
          className="max-w-[100px] md:max-w-[165px]"
          src="/lws_logo.png" 
          alt="Lws"
          height={100}
          width={165}
        />
      </Link>
    </div>
  );
};

export default Logo;