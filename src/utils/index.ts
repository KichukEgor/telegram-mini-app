type HoroscopeData = {
  [key: string]: string;
};

type HoroscopeItem = {
  title: string;
  date: string;
};

type HoroscopesJSON = {
  horoscopes: {
    [lang: string]: {
      [key: string]: HoroscopeItem;
    };
  };
};

type Horoscope = {
  id: string;
  title: string;
  date: string;
  description: string;
  src: string;
};

export const normalizedData = (
    data: HoroscopeData,
    dataJSON: HoroscopesJSON,
    lang: string
): Horoscope[] => {
  let horoscopes: Horoscope[] = [];

  for (const [key, value] of Object.entries(data)) {
    const item = dataJSON.horoscopes[lang !== "ru" ? "en" : lang][key];

    horoscopes.push({
      id: key,
      title: item.title,
      date: item.date,
      description: value,
      src: `/${key}.png`,
    });
  }

  return horoscopes;
};
