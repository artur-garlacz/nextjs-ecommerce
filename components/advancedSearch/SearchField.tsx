import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import { FilterIcon } from '@heroicons/react/outline';
import { useAdvancedSearch } from './hooks/useAdvancedSearch';

const SearchField = () => {
  const { dispatch } = useAdvancedSearch();

  return (
    <div className="flex w-full justify-between">
      <Input
        onChange={(e) => dispatch({ type: 'updateSearch', payload: e.currentTarget.value })}
        placeholder="Search products"
        className="w-full pr-4"
      />
      <div>
        <Button
          className="rounded-full w-12 h-12"
          onClick={() => dispatch({ type: 'toggleModal', payload: true })}
        >
          <FilterIcon color="white" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchField;
