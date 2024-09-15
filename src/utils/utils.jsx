export const getColorForCall = (strike) => (strike < 25350 ? "#fffde7" : "transparent");
export const getColorForPut = (strike) => (strike > 25350 ? "#fffde7" : "transparent");
export const getMaxOI = (type,data) => Math.max(...data.map(data => data[`${type}OI`]));
