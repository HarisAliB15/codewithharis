export default function sitemap() {
  const baseUrl = 'https://www.harisdev.online'; // ← add www here
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}