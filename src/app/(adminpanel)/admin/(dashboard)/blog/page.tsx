import React from 'react'
import BreadcrumbComp from '@/app/(adminpanel)/components/layout/shared/breadcrumb/BreadcrumbComp';
import CardBox from "@/app/components/shared/CardBox";
import DateTable from "@/app/(adminpanel)/components/table/dateTable";

const tableData = [
  { id: 1, title: 'How to Start a Blog', date: '2023-12-01', blogBanner: 'blog-banner-1.jpg', blogBannerAlter: 'How to Start a Blog Banner', image: 'image-1.jpg', imageAlter: 'Blog Post Image 1', slug: 'https://www.example.com/start-a-blog', thumbnailImage: 'thumb-1.jpg', thumbnailImageAlter: 'Blog Thumbnail 1', action: 'Edit | Delete' },
  { id: 2, title: 'Benefits of Healthy Eating', date: '2023-11-25', blogBanner: 'blog-banner-2.jpg', blogBannerAlter: 'Healthy Eating Banner', image: 'image-2.jpg', imageAlter: 'Healthy Food Image', slug: 'https://www.example.com/healthy-eating', thumbnailImage: 'thumb-2.jpg', thumbnailImageAlter: 'Healthy Eating Thumbnail', action: 'Edit | Delete' },
  { id: 3, title: 'Tech Innovations in 2023', date: '2023-10-10', blogBanner: 'blog-banner-3.jpg', blogBannerAlter: 'Tech Innovations Banner', image: 'image-3.jpg', imageAlter: 'Tech Image', slug: 'https://www.example.com/tech-innovations-2023', thumbnailImage: 'thumb-3.jpg', thumbnailImageAlter: 'Tech Innovations Thumbnail', action: 'Edit | Delete' },
  { id: 4, title: 'Guide to Digital Marketing', date: '2023-09-28', blogBanner: 'blog-banner-4.jpg', blogBannerAlter: 'Digital Marketing Guide Banner', image: 'image-4.jpg', imageAlter: 'Digital Marketing Image', slug: 'https://www.example.com/digital-marketing-guide', thumbnailImage: 'thumb-4.jpg', thumbnailImageAlter: 'Digital Marketing Thumbnail', action: 'Edit | Delete' },
  { id: 5, title: 'The Future of Artificial Intelligence', date: '2023-08-15', blogBanner: 'blog-banner-5.jpg', blogBannerAlter: 'AI Future Banner', image: 'image-5.jpg', imageAlter: 'AI Image', slug: 'https://www.example.com/future-of-ai', thumbnailImage: 'thumb-5.jpg', thumbnailImageAlter: 'AI Thumbnail', action: 'Edit | Delete' },
  { id: 6, title: '10 Tips for a Productive Day', date: '2023-07-22', blogBanner: 'blog-banner-6.jpg', blogBannerAlter: 'Productivity Tips Banner', image: 'image-6.jpg', imageAlter: 'Productivity Image', slug: 'https://www.example.com/productivity-tips', thumbnailImage: 'thumb-6.jpg', thumbnailImageAlter: 'Productivity Thumbnail', action: 'Edit | Delete' },
  { id: 7, title: 'Mastering SEO for Beginners', date: '2023-06-10', blogBanner: 'blog-banner-7.jpg', blogBannerAlter: 'SEO Guide Banner', image: 'image-7.jpg', imageAlter: 'SEO Image', slug: 'https://www.example.com/master-seo', thumbnailImage: 'thumb-7.jpg', thumbnailImageAlter: 'SEO Thumbnail', action: 'Edit | Delete' },
  { id: 8, title: 'How to Improve Your Writing Skills', date: '2023-05-03', blogBanner: 'blog-banner-8.jpg', blogBannerAlter: 'Writing Skills Banner', image: 'image-8.jpg', imageAlter: 'Writing Skills Image', slug: 'https://www.example.com/improve-writing-skills', thumbnailImage: 'thumb-8.jpg', thumbnailImageAlter: 'Writing Skills Thumbnail', action: 'Edit | Delete' },
  { id: 9, title: 'Best Places to Travel in 2023', date: '2023-04-19', blogBanner: 'blog-banner-9.jpg', blogBannerAlter: 'Travel Guide Banner', image: 'image-9.jpg', imageAlter: 'Travel Image', slug: 'https://www.example.com/best-places-to-travel', thumbnailImage: 'thumb-9.jpg', thumbnailImageAlter: 'Travel Thumbnail', action: 'Edit | Delete' },
  { id: 10, title: 'How to Build a Strong Online Presence', date: '2023-03-28', blogBanner: 'blog-banner-10.jpg', blogBannerAlter: 'Online Presence Banner', image: 'image-10.jpg', imageAlter: 'Online Presence Image', slug: 'https://www.example.com/build-online-presence', thumbnailImage: 'thumb-10.jpg', thumbnailImageAlter: 'Online Presence Thumbnail', action: 'Edit | Delete' },
  { id: 11, title: 'Understanding Cryptocurrency', date: '2023-02-15', blogBanner: 'blog-banner-11.jpg', blogBannerAlter: 'Cryptocurrency Guide Banner', image: 'image-11.jpg', imageAlter: 'Crypto Image', slug: 'https://www.example.com/understanding-crypto', thumbnailImage: 'thumb-11.jpg', thumbnailImageAlter: 'Crypto Thumbnail', action: 'Edit | Delete' },
  { id: 12, title: 'How to Create an Effective Marketing Plan', date: '2023-01-05', blogBanner: 'blog-banner-12.jpg', blogBannerAlter: 'Marketing Plan Banner', image: 'image-12.jpg', imageAlter: 'Marketing Plan Image', slug: 'https://www.example.com/marketing-plan', thumbnailImage: 'thumb-12.jpg', thumbnailImageAlter: 'Marketing Plan Thumbnail', action: 'Edit | Delete' },
  { id: 13, title: 'The Power of Networking', date: '2022-12-20', blogBanner: 'blog-banner-13.jpg', blogBannerAlter: 'Networking Power Banner', image: 'image-13.jpg', imageAlter: 'Networking Image', slug: 'https://www.example.com/power-of-networking', thumbnailImage: 'thumb-13.jpg', thumbnailImageAlter: 'Networking Thumbnail', action: 'Edit | Delete' },
  { id: 14, title: 'How to Overcome Procrastination', date: '2022-11-18', blogBanner: 'blog-banner-14.jpg', blogBannerAlter: 'Overcome Procrastination Banner', image: 'image-14.jpg', imageAlter: 'Procrastination Image', slug: 'https://www.example.com/overcome-procrastination', thumbnailImage: 'thumb-14.jpg', thumbnailImageAlter: 'Procrastination Thumbnail', action: 'Edit | Delete' },
  { id: 15, title: 'The Importance of Mental Health', date: '2022-10-22', blogBanner: 'blog-banner-15.jpg', blogBannerAlter: 'Mental Health Banner', image: 'image-15.jpg', imageAlter: 'Mental Health Image', slug: 'https://www.example.com/importance-of-mental-health', thumbnailImage: 'thumb-15.jpg', thumbnailImageAlter: 'Mental Health Thumbnail', action: 'Edit | Delete' },
  { id: 16, title: 'Effective Time Management Strategies', date: '2022-09-10', blogBanner: 'blog-banner-16.jpg', blogBannerAlter: 'Time Management Banner', image: 'image-16.jpg', imageAlter: 'Time Management Image', slug: 'https://www.example.com/time-management-strategies', thumbnailImage: 'thumb-16.jpg', thumbnailImageAlter: 'Time Management Thumbnail', action: 'Edit | Delete' },
  { id: 17, title: 'The Evolution of Social Media', date: '2022-08-30', blogBanner: 'blog-banner-17.jpg', blogBannerAlter: 'Social Media Evolution Banner', image: 'image-17.jpg', imageAlter: 'Social Media Image', slug: 'https://www.example.com/social-media-evolution', thumbnailImage: 'thumb-17.jpg', thumbnailImageAlter: 'Social Media Thumbnail', action: 'Edit | Delete' },
  { id: 18, title: 'Creating Engaging Content', date: '2022-07-25', blogBanner: 'blog-banner-18.jpg', blogBannerAlter: 'Engaging Content Banner', image: 'image-18.jpg', imageAlter: 'Content Creation Image', slug: 'https://www.example.com/engaging-content', thumbnailImage: 'thumb-18.jpg', thumbnailImageAlter: 'Content Thumbnail', action: 'Edit | Delete' },
  { id: 19, title: 'How to Build a Personal Brand', date: '2022-06-15', blogBanner: 'blog-banner-19.jpg', blogBannerAlter: 'Personal Brand Banner', image: 'image-19.jpg', imageAlter: 'Personal Brand Image', slug: 'https://www.example.com/build-personal-brand', thumbnailImage: 'thumb-19.jpg', thumbnailImageAlter: 'Personal Brand Thumbnail', action: 'Edit | Delete' },
  { id: 20, title: 'The Basics of Email Marketing', date: '2022-05-20', blogBanner: 'blog-banner-20.jpg', blogBannerAlter: 'Email Marketing Basics Banner', image: 'image-20.jpg', imageAlter: 'Email Marketing Image', slug: 'https://www.example.com/email-marketing-basics', thumbnailImage: 'thumb-20.jpg', thumbnailImageAlter: 'Email Marketing Thumbnail', action: 'Edit | Delete' },
];

const columns: {
  Header: string;
  accessor: keyof typeof tableData[0]; // Ensures accessor is one of the keys in the sampleData
  isDateColumn?: boolean; // Optional flag for date columns
}[]  = [
  { Header: "ID", accessor: "id" },
  { Header: "Title", accessor: "title" },
  { Header: "Blog Banner", accessor: "blogBanner" },
  { Header: "Blog Banner Alter", accessor: "blogBannerAlter" },
  { Header: "Image", accessor: "image" },
  { Header: "Image Alter", accessor: "imageAlter" },
  { Header: "Thumbnail Image", accessor: "thumbnailImage" },
  { Header: "Thumbnail Image Alter", accessor: "thumbnailImageAlter" },
  { Header: "Slug", accessor: "slug" },
  { Header: "Date", accessor: "date", isDateColumn: true },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Blog Details"/>
      <CardBox>
        <DateTable data={tableData} columns={columns} />
      </CardBox>
    </>
  )
}

export default page