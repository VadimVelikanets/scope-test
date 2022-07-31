import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { getTokenFromLocalStorage } from 'lib/scopeApi';
import Filter from "../components/Filter/Filter";
import UserList from "../components/UserList/UserList";
function SearchPage(): JSX.Element {
  const router = useRouter();
  const [filterData, setFilterData] = useState(null)
  // Redirect if token is missing
  useEffect(() => {
    if (!getTokenFromLocalStorage()) {
      router.push({
        pathname: '/login',
        query: { from: router.pathname },
      });
    }
  }, [router]);


  return (
    <div className="px-4 sm:px-6 lg:px-8 col-span-full xl:col-start-1 xl:col-span-3 relative">
      <Filter/>
      <UserList/>
    </div>
  );
}

export default SearchPage;
