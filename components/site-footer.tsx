import Link from "next/link"
import { Frame } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Frame className="h-6 w-6" />
              <span>ElevateX</span>
            </Link>
            <p className="text-sm text-gray-500">
              Elevating skills, careers, and opportunities through industry partnerships and practical training.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-gray-500 hover:text-gray-900">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/solution" className="text-gray-500 hover:text-gray-900">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-500 hover:text-gray-900">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-500 hover:text-gray-900">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-500 hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ElevateX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
