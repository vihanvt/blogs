export interface simpleBlogCard {
    _createdAt: string | number | Date;
    title: string;
    smallDescription: string;
    currentSlug: string;
  }
  
  export interface fullBlog {
    likes: number;
    currentSlug: string;
    title: string;
    content: PortableTextBlock[];
  }
  
  export type PortableTextBlock = {
    _key: string;
    _type: string;
    children: PortableTextChild[];
    markDefs: MarkDef[];
    style: string;
  };
  
  export type PortableTextChild = {
    _key: string;
    _type: string;
    text: string;
  };
  
  export type MarkDef = {
    _key: string;
    _type: string;
    href?: string;
  };
  
// interface.ts
export interface PageProps {
    params: Promise<{ slug: string }>;
  }
  