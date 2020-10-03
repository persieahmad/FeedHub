import React from 'react';
import Loader from '../../UI/Loader/Loader';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive';
import YoutubeAPICall from '../../API/YoutubeAPI/YoutubeAPICall';

export function TopHeadlinesComponent() {
  const [loader, setLoader] = React.useState<boolean>(true);
  const [data, setData] = React.useState([]);

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const options = {
    height: isDesktopOrLaptop ? '390' : '190',
    width: isDesktopOrLaptop ? '640' : '340',
  };

  function APICallYoutube() {
    YoutubeAPICall('top news')
      .then((res) => {
        setData(res);
        setLoader(false);
      })
      .catch((err) => alert(err.data.message));
  }

  React.useEffect(() => {
    setTimeout(() => {
      APICallYoutube();
    }, 1000);
  }, []);

  function renderNews(): any {
    return data?.map(({ id }: { id: { videoId: string } }) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
          <YouTube videoId={id.videoId} opts={options} />
        </div>
      );
    });
  }

  return loader ? <Loader /> : renderNews();
}
