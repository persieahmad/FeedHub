import React from 'react';
import Loader from '../../UI/Loader/Loader';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive';

export function TopHeadlinesComponent() {
  const [loader, setLoader] = React.useState<boolean>(true);

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const videoId = ['DIs-CBcnB68', 'B-7c_VnHxtA', 'xDMP3i36naA', 'MBqlwJrbrAU', 'ZE-GjQy-PLc'];
  const options = {
    height: isDesktopOrLaptop ? '390' : '190',
    width: isDesktopOrLaptop ? '640' : '340',
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  function renderNews(): any {
    return videoId.map((id) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
          <YouTube videoId={id} opts={options} />
        </div>
      );
    });
  }

  return loader ? <Loader /> : renderNews();
}
