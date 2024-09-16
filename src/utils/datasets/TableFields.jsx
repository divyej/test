
export const headers = {
    calls: ["Gamma", "Vega", "Theta", "Delta", "Call OI (Lakh)"],
    puts: ["Put OI (Lakh)", "Delta", "Theta", "Vega", "Gamma"],
  };
  

export const mapping= {
  'Gamma': 'gamma',
  'Vega': 'vega',
  'Theta': 'theta',
  'Call Delta': 'Delta',
  'Call OI (Lakh)': 'callOI',
  'Put Delta': 'Delta',
  'Put OI (Lakh)': 'putOI',
  'Strike': 'strike',
};
