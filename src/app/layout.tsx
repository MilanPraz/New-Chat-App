import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import "./globals.css"
import QueryProvider from "../../providers/QueryProvider"
import dynamic from "next/dynamic"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "../../providers/AuthProvider"
import NextSessionProvider from "../../providers/NextSessionProvider"
// import ProgressBar from "../../common/ProgressBar";

const ProgressBar = dynamic(() => import("../../common/ProgressBar"), {
  ssr: false,
})
const inter = Inter({ subsets: ["latin"] })

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900", "1000"],
})

export const metadata: Metadata = {
  title: "Chat App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className} style={{ background: "black" }}>
        <NextSessionProvider>
          <QueryProvider>
            <ProgressBar />
            {children}
            <Toaster toastOptions={{ position: "top-right" }} />
          </QueryProvider>
        </NextSessionProvider>
      </body>
    </html>
  )
}
