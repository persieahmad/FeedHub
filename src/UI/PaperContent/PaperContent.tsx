import React from 'react';

export default function PaperContent({ data }: any) {
  return (
    <div>
      <img src={data.urlToImage} height="400px" width="100%" />
      <p
        style={{
          marginTop: -72,
          color: 'white',
          fontSize: 20,
          fontFamily: 'sans-serif',
        }}>
        {data.title}
      </p>
    </div>
  );
}
