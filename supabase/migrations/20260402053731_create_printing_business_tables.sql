/*
  # Printing Business Database Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `service` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)
    
    - `gallery_items`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `description` (text, optional)
      - `image_url` (text, required)
      - `category` (text, required)
      - `created_at` (timestamp)
      - `display_order` (integer)

  2. Security
    - Enable RLS on both tables
    - Allow public read access to gallery_items
    - Contact submissions can only be inserted by anyone, but read by authenticated users only
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create gallery_items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery items"
  ON gallery_items
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage gallery"
  ON gallery_items
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample gallery items
INSERT INTO gallery_items (title, description, image_url, category, display_order) VALUES
  ('Wedding Invitation Cards', 'Elegant wedding card designs with gold embossing', 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding Cards', 1),
  ('Business Banner', 'Large format banner for corporate events', 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800', 'Banners', 2),
  ('Visiting Cards Collection', 'Professional business card designs', 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=800', 'Visiting Cards', 3),
  ('Event Poster Design', 'Eye-catching poster for music event', 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=800', 'Posters', 4),
  ('Premium Wedding Cards', 'Luxurious wedding invitations with custom design', 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800', 'Wedding Cards', 5),
  ('Flex Banner Printing', 'High-quality flex printing for shops', 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800', 'Banners', 6);