# 🔐 Admin Panel Setup Guide

## ✅ CMS Installed!

The admin panel is now set up at: **https://www.bymiriana.com/admin**

## 🚀 Final Setup Steps (One-time, takes 5 minutes)

### Step 1: Enable Netlify Identity

Since you're using **Vercel**, you need to enable authentication:

**Option A: Use Netlify (Recommended)**
1. Go to [Netlify](https://app.netlify.com/) and sign up (free)
2. Import your GitHub repository: `gionyortiz/bymiriana.com`
3. Deploy the site on Netlify (alongside Vercel is fine)
4. Go to **Site settings** → **Identity**
5. Click **Enable Identity**
6. Under **Registration preferences**: Select "Invite only"
7. Go to **Services** → **Git Gateway** → Enable it

**Option B: Use Alternative Auth (If you don't want Netlify)**
- Use Supabase, Auth0, or custom authentication
- Requires more setup

### Step 2: Invite Miriana

1. In Netlify Identity, click **Invite users**
2. Enter her email: (e.g., miriana@example.com)
3. She'll receive an email with a secure link
4. She sets her own password
5. Done! She can now login

### Step 3: She Can Now Manage Photos!

**Her Login URL**: https://www.bymiriana.com/admin

**What she can do:**
- ✅ Upload new photos (drag & drop)
- ✅ Add titles and dates
- ✅ Choose categories
- ✅ Edit or delete photos
- ✅ Publish changes instantly

**No GitHub access needed!**

---

## 📱 How Miriana Uses It:

1. Go to: `www.bymiriana.com/admin`
2. Click "Login with Netlify Identity"
3. Enter her email and password
4. Click "New Photos" → Upload photo
5. Fill in: Title, Date, Category
6. Click "Publish"
7. Photo appears on website automatically!

---

## 🔧 Alternative: Quick Admin (No Netlify Setup)

If you want something even simpler without Netlify Identity, I can create:
- A password-protected admin page
- Simple upload interface
- Uses a single shared password

Let me know if you want this instead!

---

**Questions?** Contact: info@nexaquantum.net
