const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '650px',
  laptop: '1024px',
  laptopL: '1440px',
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileS})and (max-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileM})and (max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.mobileL})and (max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet})and (max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptop})and (max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.laptopL})`,
}
