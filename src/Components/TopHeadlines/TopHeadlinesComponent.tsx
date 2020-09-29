import React from 'react';
import { TopHeadlinesAPICall } from '../../API/TopHeadlinesAPI/TopHeadlinesAPI';
import Loader from '../../UI/Loader/Loader';
import SimplePaper from '../../UI/Paper/Paper';
import PaperContent from '../../UI/PaperContent/PaperContent';

export function TopHeadlinesComponent() {
  const [data, setData] = React.useState<string[]>([]);
  const [loader, setLoader] = React.useState<boolean>(true);

  React.useEffect(() => {
    TopHeadlinesAPICall()
      .then((data) => {
        setData(data);
        setLoader(false);
      })
      .catch((err) => console.log({ err }));
  }, []);

  function renderNews(): any {
    return data.map((newsData: any) => {
      return (
        <SimplePaper>
          <PaperContent data={newsData} />
        </SimplePaper>
      );
    });
  }

  return loader ? <Loader /> : renderNews();
}
