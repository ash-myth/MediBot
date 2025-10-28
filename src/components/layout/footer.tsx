
import { Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="mt-auto bg-muted/20 border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <Link href="/" className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">MediBot</span>
          </Link>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-2">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/search">Search</Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </footer>
  );
}
