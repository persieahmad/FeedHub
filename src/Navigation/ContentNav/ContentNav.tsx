import React from 'react';
import { EverythingComponent } from '../../Components/Everything/EverythingComponent';
import { SearchComponent } from '../../Components/Search/SearchComponent';
import { TopHeadlinesComponent } from '../../Components/TopHeadlines/TopHeadlinesComponent';

export default function ContentNav({ value }: { value: number }) {
  return (
    <div style={{ marginTop: 80, marginBottom: 80 }}>
      {value === 0 && <TopHeadlinesComponent />}
      {value === 1 && <EverythingComponent />}
      {value === 2 && <SearchComponent />}
    </div>
  );
}
