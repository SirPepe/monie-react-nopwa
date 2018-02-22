// Maps currency codes (eg. "EUR") to an object containing a currencies' name
// (eg. "Euro") and symbol (eg. "€"). See https://tinyurl.com/jsmapdocs
// for more info on maps.
export const currencies = new Map([
  [ "AUD", { name: "Australian dollar", symbol: "A$" } ],
  [ "BGN", { name: "Bulgarian lev", symbol: "лв" } ],
  [ "BRL", { name: "Brazilian real", symbol: "R$" } ],
  [ "CAD", { name: "Canadian dollar", symbol: "C$" } ],
  [ "CHF", { name: "Swiss franc", symbol: "Fr" } ],
  [ "CNY", { name: "Chinese yuan", symbol: "元" } ],
  [ "CZK", { name: "Czech koruna", symbol: "Kč" } ],
  [ "DKK", { name: "Danish krone", symbol: "kr." } ],
  [ "EUR", { name: "Euro", symbol: "€" } ],
  [ "GBP", { name: "Pound sterling", symbol: "£" } ],
  [ "HKD", { name: "Hong Kong dollar", symbol: "HK$" } ],
  [ "HRK", { name: "Croatian kuna", symbol: "kn" } ],
  [ "HUF", { name: "Hungarian forint", symbol: "Ft" } ],
  [ "IDR", { name: "Indonesian rupiah", symbol: "Rp" } ],
  [ "ILS", { name: "Israeli new shekel", symbol: "₪" } ],
  [ "INR", { name: "Indian rupee", symbol: "₹" } ],
  [ "JPY", { name: "Japanese yen", symbol: "¥" } ],
  [ "KRW", { name: "South Korean won", symbol: "₩" } ],
  [ "MXN", { name: "Mexican peso", symbol: "Mex$" } ],
  [ "MYR", { name: "Malaysian ringgit", symbol: "RM" } ],
  [ "NOK", { name: "Norwegian krone", symbol: "kr" } ],
  [ "NZD", { name: "New Zealand dollar", symbol: "$" } ],
  [ "PHP", { name: "Philippine peso", symbol: "₱" } ],
  [ "PLN", { name: "Polish złoty", symbol: "zł" } ],
  [ "RON", { name: "Romanian leu", symbol: "L" } ],
  [ "RUB", { name: "Russian ruble", symbol: "₽" } ],
  [ "SEK", { name: "Swedish krona", symbol: "kr" } ],
  [ "SGD", { name: "Singapore dollar", symbol: "S$" } ],
  [ "THB", { name: "Thai baht", symbol: "฿" } ],
  [ "TRY", { name: "Turkish lira", symbol: "₺" } ],
  [ "USD", { name: "United States dollar", symbol: "$" } ],
  [ "ZAR", { name: "South African rand", symbol: "R" } ],
]);


// The currency data comes from the European Central Bank and only contains
// exchange rates relative to the euro. Use this function to get the rate from
// one any currency to any another
export const convertRelative = (rates, from, to, base = "EUR") => {
  if (to === base && from === base) {
    return 1;
  } else {
    if (to === base) {
      return 1 / rates[from];
    } else if (from === base) {
      return rates[to];
    } else {
      return rates[to] / rates[from];
    }
  }
};


// Get latest currency exchange rates
export const getRates = async () => {
  // add some latency for fun
  const latency = Math.random() * (1000 - 500) + 500;
  await new Promise( (res) => setTimeout(res, latency) );
  const response = await fetch("api/latest.json");
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }
};
