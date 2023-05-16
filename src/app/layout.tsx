import Navbar from './components/Navbar/Navbar'
import './globals.scss'

export const metadata = {
  title: 'Daniel Szkarupski',
  description: 'Kandydat nr 2 Konfederacji do Sejmu RP w wojewódzctwie opolskim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
