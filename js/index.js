const changeText = (isSupport, format) => {
  if (isSupport) {
    return `[${format}]` + 'に対応しています。';
  } else {
    return `[${format}]` + 'に対応していません。';
  }
};

const supportFormat = (format) => {
  let isSupport = true;

  try {
    const elm = document.createElement('canvas');
    if (elm.getContext && elm.getContext('2d')) {
      isSupport = elm.toDataURL(`image/${format}`).indexOf(`data:image/${format}`) === 0;
    }
  } catch (err) {
    isSupport = false;
  }

  return isSupport;
};

const updateResult = (id = 'result', formats = ['png', 'webp', 'avif']) => {
  const result = formats.map((format) => {
    const isSupport = supportFormat(format);
    const text = `<p> ${changeText(isSupport, format)} </p>`;
    return text;
  });

  const resultDOM = result.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    ''
  );

  console.log(resultDOM);
  document.getElementById(id).innerHTML = resultDOM;
};
