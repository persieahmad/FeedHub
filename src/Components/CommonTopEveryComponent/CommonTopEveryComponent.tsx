import React from 'react';
import Loader from '../../UI/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import YoutubeAPICall from '../../API/YoutubeAPI/YoutubeAPICall';
import SimplePaper from '../../UI/Paper/Paper';
import ModalUI from '../../UI/ModalUI/ModalUI';

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

export default function CommonTopEveryComponent({ title }: { title: string }) {
  const [loader, setLoader] = React.useState<boolean>(true);
  const [data, setData] = React.useState([]);

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  function APICallYoutube() {
    YoutubeAPICall(title)
      .then((res) => {
        console.log({ res });
        setData(res);
        setLoader(false);
      })
      .catch((err) => alert(err.data.message));
  }

  React.useEffect(() => {
    setTimeout(() => {
      APICallYoutube();
    }, 1000);
    // eslint-disable-next-line
  }, []);

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

  return loader ? <Loader /> : renderNews();
}
