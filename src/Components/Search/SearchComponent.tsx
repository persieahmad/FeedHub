import React from 'react';
import Loader from '../../UI/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import YoutubeAPICall from '../../API/YoutubeAPI/YoutubeAPICall';
import SimplePaper from '../../UI/Paper/Paper';
import ModalUI from '../../UI/ModalUI/ModalUI';
import TextField from '@material-ui/core/TextField';

type TData = {
  id: {
    videoId: string;
  };
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
};

export function SearchComponent() {
  const [loader, setLoader] = React.useState<boolean>(true);
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState<string>('');

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  function APICallYoutube() {
    YoutubeAPICall(query)
      .then((res) => {
        setData(res);
        setLoader(false);
      })
      .catch((err) => alert(err.data.message));
  }

  React.useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      query.length > 0 && APICallYoutube();
    }, 1000);
    // eslint-disable-next-line
  }, [query]);

  function renderSearchField() {
    return (
      <div style={{ marginBottom: '1%' }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
    );
  }

  function renderNews(): any {
    return data?.map(({ id, snippet }: TData) => {
      return (
        <SimplePaper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <p>
              <b>{snippet.title}</b>
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '-30%',
              }}>
              <div
                style={{
                  background: `url(${snippet.thumbnails.high.url}) center no-repeat`,
                  height: isDesktopOrLaptop ? '210px' : '180px',
                  width: isDesktopOrLaptop ? '480px' : '340px',
                  padding: '2%',
                  backgroundSize: '100% auto',
                  borderRadius: '5%',
                }}></div>
            </div>
            <ModalUI {...{ id: id.videoId, isDesktopOrLaptop }} />
          </div>
        </SimplePaper>
      );
    });
  }

  return (
    <>
      {renderSearchField()}
      {loader && query.length !== 0 ? <Loader /> : renderNews()}
    </>
  );
}
