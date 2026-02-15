// Photo Gallery Data
// To add new photos: Just add them to the array below with filename and date

export interface Photo {
  filename: string;
  date: string; // Format: YYYY-MM-DD
  title?: string; // Optional: Add a title for the photo
  category?: string; // Optional: nature, light, streets, details, seasons, memories
}

export const photos: Photo[] = [
  // Add your photos here - just copy/paste this format:
  // { filename: 'photo-name.JPG', date: '2025-12-01', title: 'Beautiful Sunset', category: 'nature' },
  
  { filename: '05675462-881d-496f-b01b-bb8705cfb66a.JPG', date: '2025-12-01' },
  { filename: '38ee7e07-c139-482f-98fc-256e5994317c.JPG', date: '2025-12-01' },
  { filename: '3d142ea6-86ba-4a7e-939a-9df1ada3593c.JPG', date: '2025-12-01' },
  { filename: '3d3fa74e-da81-4a4f-909c-34c393d196dc.JPG', date: '2025-12-01' },
  { filename: '3fdb3f09-4d82-44c3-a47e-963a28451fc9.JPG', date: '2025-12-01' },
  { filename: '4c882c6f-7d71-4f67-aaec-5f2a82a91cb8.JPG', date: '2025-12-01' },
  { filename: '5023f375-30b5-4536-af1c-400db3fc944a.JPG', date: '2025-12-01' },
  { filename: '5a1a4aaf-9fbc-41a8-839d-ebb5eb988c55.JPG', date: '2025-12-01' },
  { filename: '64d843c8-864f-49ba-aba9-c97240143de1.JPG', date: '2025-12-01' },
  { filename: '6fefc1f4-cb5a-4506-b0aa-97e18994931d.JPG', date: '2025-12-01' },
  { filename: '7b6c7c56-781a-4b97-b686-32c8ca741f56.JPG', date: '2025-12-01' },
  { filename: '8cbda18a-dd0a-4e5e-a9b3-741bf8585079.JPG', date: '2025-12-01' },
  { filename: 'a25407c2-e4bc-455b-a7e0-ce7ded18fb87.JPG', date: '2025-12-01' },
  { filename: 'a9d736e7-a87e-4392-84d5-1ca6e21aed64.JPG', date: '2025-12-01' },
  { filename: 'c7de4039-510d-4339-a441-2ef0d82701e9.JPG', date: '2025-12-01' },
  { filename: 'ec5a9b70-39f3-49e8-b1ac-92abd325c6b1.JPG', date: '2025-12-01' },
  { filename: 'photo17.JPG', date: '2025-12-01' },
  { filename: 'photo18.JPG', date: '2025-12-01' },

  { filename: 'IMG-20260109-WA0004.jpg', date: '2026-01-09' },
  { filename: 'IMG-20260109-WA0005.jpg', date: '2026-01-09' },
  { filename: 'IMG-20260112-WA0001.jpg', date: '2026-01-12' },
  { filename: 'IMG-20260112-WA0002.jpg', date: '2026-01-12' },
  { filename: 'IMG-20260112-WA0003.jpg', date: '2026-01-12' },
  { filename: 'IMG-20260112-WA0004.jpg', date: '2026-01-12' },
  { filename: 'IMG-20260112-WA0006.jpg', date: '2026-01-12' },
  { filename: 'IMG-20260206-WA0000(1).jpg', date: '2026-02-06' },
];

// Helper function to format dates nicely
export function formatPhotoDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}
