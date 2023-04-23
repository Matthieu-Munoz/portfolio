
import { AppWrapper } from "./context/state";
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

import './globals.css'

export const metadata = {
  title: 'Matthieu Munoz - Portfolio',
  description: 'Portfolio du développeur Matthieu Munoz - Présentation des compétences et des projets | Auteur : Matthieu Munoz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${manrope.className} font-sans`}>
        <AppWrapper>
          {children}
        </AppWrapper>
        </body>
    </html>
  )
}
