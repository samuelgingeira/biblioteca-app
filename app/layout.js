import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Biblioteca App",
  description: "Proyecto Final",
};


export default function RootLayout({ children }) {

  return (

    <html lang="es">

      <body>

        <Navbar />

        {children}

      </body>

    </html>

  );

}
