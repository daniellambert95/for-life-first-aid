import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cardiacfirstrespondercourse.ie'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/what-to-do-if-someone-collapses`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-perform-cpr`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-cpr-courses-in-dublin`,
      lastModified: new Date('2025-04-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/heart-attack-vs-cardiac-arrest`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-long-does-cpr-certificate-last`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-much-does-a-cpr-course-cost-in-dublin`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-use-a-defibrillator`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/is-a-cardiac-first-responder-course-worth-it`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/first-aid-course-dublin`,
      lastModified: new Date('2025-05-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cfr-course-dublin`,
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/baby-and-child-first-aid-dublin`,
      lastModified: new Date('2025-05-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/workplace-first-aid-dublin`,
      lastModified: new Date('2025-05-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2025-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
