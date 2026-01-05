import { useSearch } from '../model/useSearch'

export function SearchTabs() {
  const { type, onTypeChange } = useSearch()

  return (
    <div className="flex gap-2 mt-4">
      <button
        className={type === 'users' ? 'font-bold' : ''}
        onClick={() => onTypeChange('users')}
      >
        Users
      </button>

      <button
        className={type === 'repositories' ? 'font-bold' : ''}
        onClick={() => onTypeChange('repositories')}
      >
        Repositories
      </button>
    </div>
  )
}
