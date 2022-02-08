import Input from '@components/ui/Input';
import { useAdvancedSearch } from './hooks/useAdvancedSearch';

const SearchField = () => {
  const { dispatch } = useAdvancedSearch();

  return (
    <div>
      <Input
        onChange={(e) => dispatch({ type: 'updateSearch', payload: e.currentTarget.value })}
        placeholder="Search products"
      />
    </div>
  );
};

export default SearchField;
