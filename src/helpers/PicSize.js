const getPictureSize = (window) => {
  console.log(window.innerWidth);
  return window.innerWidth > 800 ? '260px' : '180px';
};

export default getPictureSize;
