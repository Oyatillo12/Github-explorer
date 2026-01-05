import { SearchInput, SearchTabs } from '@/features/search-github'
import { SearchResults } from '@/widgets/search-results'

export function HomePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <SearchInput />
      <SearchTabs />
      <SearchResults />
    </div>
  )
}
