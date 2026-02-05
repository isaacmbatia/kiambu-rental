# Kiambu Rental Website

This is a modern, responsive rental website built with React and Vite.

## Features
- **Admin Managed**: You can easily add/remove houses by editing a single file.
- **WhatsApp Integration**: Direct WhatsApp links for landlords to list and tenants to inquire.
- **Responsive Design**: Looks great on mobile and desktop.
- **Premium Aesthetics**: Professional green and white theme.

## How to Run

1. Open a terminal in this folder.
2. Run `npm install` (if not already done).
3. Run `npm run dev`.
4. Open `http://localhost:5173` in your browser.

## How to Add/Edit Houses

All house listings are stored in `src/data/houses.js`.

To add a new house:
1. Open `src/data/houses.js`.
2. Add a new object to the `houses` array following this format:
   ```javascript
   {
     id: 6, // Unique number
     title: "House Title",
     location: "Location Name",
     price: 15000,
     type: "Apartment", // or Bedsitter, Shop, etc.
     imageUrl: "https://link-to-image.com/image.jpg",
     isNew: true, // or false
     verified: true
   }
   ```
3. Save the file. The website will update immediately.

## Customization

- **Colors & Fonts**: Edit `src/index.css`.
- **Contact Number**: Currently set to `0735047202`. To change, search and replace in the `src/components` folder.
