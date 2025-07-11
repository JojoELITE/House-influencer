import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { AuthProvider } from "@/context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "House Influencer - L'influence devient une carrière",
  description:
    "Incubateur d'influenceurs gabonais, agence de publicité, média, laboratoire d'égéries et mutuelle d'investissement pour les talents de demain.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <div className="px-48 sticky top-0 z-50  ">
          <Navigation />
          </div>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
