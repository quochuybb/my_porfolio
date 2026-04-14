// Layout chính — wrap toàn bộ app
import './globals.css';
import Navbar from '@/components/Navbar';

// SEO metadata
export const metadata = {
  title: 'Nguyen Quoc Huy | Unity Game Developer',
  description: 'Portfolio of Nguyen Quoc Huy - Unity Game Developer specializing in multiplayer games and performance optimization.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
