import { Input } from '@components/ui/Input/Input';
import { useAdvancedSearch } from './hooks/useAdvancedSearch';

const SearchField = () => {
  const { dispatch } = useAdvancedSearch();

  return (
    <div>
      <Input
        onChange={(e) => dispatch({ type: 'updateSearchQuery', payload: e.currentTarget.value })}
        placeholder="Search products"
      />
    </div>
  );
};

export default SearchField;
