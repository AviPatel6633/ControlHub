import React from 'react'
import BreadcrumbComp from '@/app/(adminpanel)/components/layout/shared/breadcrumb/BreadcrumbComp';
import CardBox from "@/app/components/shared/CardBox";
import DateTable from "@/app/(adminpanel)/components/table/dateTable";

const tableData = [
  { id: 1, title: 'Homepage', metaTitle: 'Welcome to Our Site', metaDescription: 'Welcome to our homepage. Explore various sections and services we offer to help you find what you\'re looking for.', keywords: 'home, landing, welcome', canonical: 'https://www.example.com/home', slug: 'home', updatedDate: '2023-12-01', action: 'Edit | Delete' },
  { id: 2, title: 'About Us', metaTitle: 'Learn More About Us', metaDescription: 'Get to know more about our journey, mission, values, and the team that makes everything possible.', keywords: 'about, company, team', canonical: 'https://www.example.com/about', slug: 'about-us', updatedDate: '2023-11-15', action: 'Edit | Delete' },
  { id: 3, title: 'Contact', metaTitle: 'Contact Us for Inquiries', metaDescription: 'Reach out to us for any inquiries or support. We are here to help you!', keywords: 'contact, support, email', canonical: 'https://www.example.com/contact', slug: 'contact', updatedDate: '2023-10-25', action: 'Edit | Delete' },
  { id: 4, title: 'Services', metaTitle: 'Our Services', metaDescription: 'Explore our wide range of services tailored to meet your needs. From consultancy to implementation, we\'ve got you covered.', keywords: 'services, offerings, solutions', canonical: 'https://www.example.com/services', slug: 'services', updatedDate: '2023-09-30', action: 'Edit | Delete' },
  { id: 5, title: 'Blog', metaTitle: 'Latest News and Insights', metaDescription: 'Read our blog for the latest industry trends, tips, and insights from experts in the field.', keywords: 'blog, articles, news', canonical: 'https://www.example.com/blog', slug: 'blog', updatedDate: '2023-08-22', action: 'Edit | Delete' },
  { id: 6, title: 'FAQ', metaTitle: 'Frequently Asked Questions', metaDescription: 'Find answers to the most common questions regarding our services and policies.', keywords: 'FAQ, help, questions', canonical: 'https://www.example.com/faq', slug: 'faq', updatedDate: '2023-07-18', action: 'Edit | Delete' },
  { id: 7, title: 'Privacy Policy', metaTitle: 'Our Privacy Policy', metaDescription: 'Read our privacy policy to understand how we handle your personal information and ensure your privacy.', keywords: 'privacy, data protection, policy', canonical: 'https://www.example.com/privacy', slug: 'privacy-policy', updatedDate: '2023-06-12', action: 'Edit | Delete' },
  { id: 8, title: 'Terms of Service', metaTitle: 'Our Terms of Service', metaDescription: 'Learn about the terms and conditions that govern the use of our website and services.', keywords: 'terms, conditions, service', canonical: 'https://www.example.com/terms', slug: 'terms-of-service', updatedDate: '2023-05-08', action: 'Edit | Delete' },
  { id: 9, title: 'Testimonials', metaTitle: 'What Our Clients Say', metaDescription: 'Read testimonials from our happy clients and discover how our solutions helped their businesses grow.', keywords: 'testimonials, reviews, feedback', canonical: 'https://www.example.com/testimonials', slug: 'testimonials', updatedDate: '2023-04-19', action: 'Edit | Delete' },
  { id: 10, title: 'Portfolio', metaTitle: 'Our Work Portfolio', metaDescription: 'Check out our portfolio to see the projects we\'ve worked on and the solutions we\'ve delivered.', keywords: 'portfolio, projects, work', canonical: 'https://www.example.com/portfolio', slug: 'portfolio', updatedDate: '2023-03-26', action: 'Edit | Delete' },
  { id: 11, title: 'Careers', metaTitle: 'Join Our Team', metaDescription: 'Explore career opportunities with us. We\'re always looking for talented individuals to join our team.', keywords: 'careers, jobs, hiring', canonical: 'https://www.example.com/careers', slug: 'careers', updatedDate: '2023-02-14', action: 'Edit | Delete' },
  { id: 12, title: 'Events', metaTitle: 'Upcoming Events', metaDescription: 'Stay updated with our upcoming events and webinars designed to educate and inspire our audience.', keywords: 'events, webinars, conferences', canonical: 'https://www.example.com/events', slug: 'events', updatedDate: '2023-01-08', action: 'Edit | Delete' },
  { id: 13, title: 'Shop', metaTitle: 'Online Store', metaDescription: 'Browse through our online shop for exclusive deals on products and services.', keywords: 'shop, store, online', canonical: 'https://www.example.com/shop', slug: 'shop', updatedDate: '2022-12-05', action: 'Edit | Delete' },
  { id: 14, title: 'Products', metaTitle: 'Our Products', metaDescription: 'Check out the products we offer, from gadgets to services, designed to meet your needs.', keywords: 'products, gadgets, offerings', canonical: 'https://www.example.com/products', slug: 'products', updatedDate: '2022-11-21', action: 'Edit | Delete' },
  { id: 15, title: 'Gallery', metaTitle: 'Image Gallery', metaDescription: 'View our image gallery showcasing our projects, products, and events.', keywords: 'gallery, images, photos', canonical: 'https://www.example.com/gallery', slug: 'gallery', updatedDate: '2022-10-30', action: 'Edit | Delete' },
  { id: 16, title: 'Privacy', metaTitle: 'Privacy Overview', metaDescription: 'Learn about our privacy practices, your rights, and how we handle your data.', keywords: 'privacy, rights, data handling', canonical: 'https://www.example.com/privacy-overview', slug: 'privacy-overview', updatedDate: '2022-09-18', action: 'Edit | Delete' },
  { id: 17, title: 'Support', metaTitle: 'Customer Support', metaDescription: 'Get help with any of your issues by visiting our customer support section.', keywords: 'support, help, assistance', canonical: 'https://www.example.com/support', slug: 'support', updatedDate: '2022-08-03', action: 'Edit | Delete' },
  { id: 18, title: 'Terms', metaTitle: 'User Terms', metaDescription: 'Understand the terms of service that govern your use of our platform.', keywords: 'terms, user agreement', canonical: 'https://www.example.com/user-terms', slug: 'user-terms', updatedDate: '2022-07-10', action: 'Edit | Delete' },
  { id: 19, title: 'Sitemap', metaTitle: 'Site Map', metaDescription: 'Explore our site map for easy navigation of all the pages on our website.', keywords: 'sitemap, navigation', canonical: 'https://www.example.com/sitemap', slug: 'sitemap', updatedDate: '2022-06-25', action: 'Edit | Delete' },
  { id: 20, title: 'Downloads', metaTitle: 'Resources and Downloads', metaDescription: 'Access our downloadable resources, whitepapers, and brochures for more information.', keywords: 'downloads, resources, documents', canonical: 'https://www.example.com/downloads', slug: 'downloads', updatedDate: '2022-05-16', action: 'Edit | Delete' },
];

const columns: {
  Header: string;
  accessor: keyof typeof tableData[0]; // Ensures accessor is one of the keys in the sampleData
  isDateColumn?: boolean; // Optional flag for date columns
}[]  = [
  { Header: "ID", accessor: "id" },
  { Header: "Title", accessor: "title" },
  { Header: "Meta Title", accessor: "metaTitle" },
  { Header: "Meta Description", accessor: "metaDescription" },
  { Header: "Keywords", accessor: "keywords" },
  { Header: "Canonical", accessor: "canonical" },
  { Header: "Slug", accessor: "slug" },
  { Header: "Updated Date", accessor: "updatedDate", isDateColumn: true },
];
const page = () => {
  return (
    <div>
      <BreadcrumbComp title="Manage SEO"/>
      <CardBox>
        <DateTable data={tableData} columns={columns} />
      </CardBox>
    </div>
  )
}

export default page