export const hideMainHeaderFooter = (language: string, pathName: string) => {
  const pagesWithoutMainHeaderLayout: string[] = [
    `/${language}/portfolio/projects/weather-app`,
  ];

  return pagesWithoutMainHeaderLayout.includes(pathName);
};
