import "./globals.css";

export const metadata = {
  title: "MovieApp",
  description: "Movie App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
