'use client'
import React from 'react';
import { HeroCenter } from '../_comps';
import { TextH } from '@/comps';

export default function BlogsPage() {
  return (
    <section>
      <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
        Blogs
      </TextH>
    </section>
  );
}
