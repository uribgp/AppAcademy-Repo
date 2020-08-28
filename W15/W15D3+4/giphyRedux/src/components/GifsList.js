import React from 'react';

// TODO: Take in an destructure the `urls` prop
const GifsList = ({ gifUrls }) => (
  <>
    {gifUrls.map((url, i) => {
      return (
        <img key={i} src={url} alt='gif' />
      )
    })}
  </>
)


export default GifsList;

  // TODO: Render a `<div>` as the parent element of your `GifsList` component.
  // TODO: Map over your `urls` array to render an `<img>` for each `url`.
  // console.log(gifUrls)