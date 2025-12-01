# 📸 How to Add Photos to Your Portfolio

## Easy Steps to Add New Photos

### Step 1: Add Your Photo File
1. Copy your photo (JPG, PNG, etc.) to: `public/photos/`
2. Name it something memorable (e.g., `sunset-beach-2025.jpg`)

### Step 2: Add Photo Information
1. Open the file: `src/data/photos.ts`
2. Add a new line in the `photos` array:

```typescript
{ filename: 'your-photo-name.jpg', date: '2025-12-15', title: 'Beautiful Sunset', category: 'nature' },
```

**Required:**
- `filename`: The exact name of your photo file
- `date`: When the photo was taken (YYYY-MM-DD format)

**Optional:**
- `title`: A name for your photo (will show on hover)
- `category`: nature, light, streets, details, seasons, or memories

### Step 3: Save and Deploy
After adding photos, commit the changes:
```bash
git add .
git commit -m "Add new photos"
git push
```

The website will automatically update in 1-2 minutes!

## Example: Adding 3 New Photos

```typescript
export const photos: Photo[] = [
  // Your existing photos...
  
  // New photos:
  { 
    filename: 'rose-garden.jpg', 
    date: '2025-12-15', 
    title: 'Rose Garden',
    category: 'nature'
  },
  { 
    filename: 'morning-light.jpg', 
    date: '2025-12-16', 
    title: 'Morning Light',
    category: 'light'
  },
  { 
    filename: 'street-corner.jpg', 
    date: '2025-12-17',
    category: 'streets'
  },
];
```

## Photo Shows:
- ✅ The photo itself
- ✅ Date (automatically formatted nicely)
- ✅ Title (if you added one)
- ✅ Copyright watermark (© byMiriana)

## Tips:
- **Photo size**: Try to keep files under 2MB for fast loading
- **Names**: Use simple names without spaces (use dashes: `my-photo.jpg`)
- **Dates**: Use YYYY-MM-DD format (e.g., 2025-12-25)
- **Categories**: Help organize photos (optional)

---
Need help? Contact: info@nexaquantum.net
