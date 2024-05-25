import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Tiago",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}