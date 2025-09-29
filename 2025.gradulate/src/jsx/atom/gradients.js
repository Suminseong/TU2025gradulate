export const C = {
  black: '#121212',
  white: '#FFFFFF',
  t: (hex, a) => `rgba(${parseInt(hex.slice(1,3),16)}, ${parseInt(hex.slice(3,5),16)}, ${parseInt(hex.slice(5,7),16)}, ${a})`,
};
export const G = {
  heroToWhite: { from: 'rgba(18,18,18,0)', to: '#FFFFFF', h: 240 },
  whiteToBlack: { from: 'rgba(255,255,255,0)', to: '#121212', h: 320 },
  blackToBlackSoft: { from: 'rgba(18,18,18,0)', to: '#121212', h: 180 },
};
