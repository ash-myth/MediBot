
import { Suspense } from 'react';
import SearchPageClient from './search-page-client';
import { Loader2 } from 'lucide-react';

function SearchFallback() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground">
      <Loader2 className="mx-auto h-12 w-12 animate-spin" />
      <p className="mt-4 text-lg">Loading Search...</p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchPageClient />
    </Suspense>
  );
}
