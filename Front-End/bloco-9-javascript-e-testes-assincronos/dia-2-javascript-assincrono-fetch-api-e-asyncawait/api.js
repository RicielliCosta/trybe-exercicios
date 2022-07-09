
const arrCoin = async () => {
  const url = 'https://api.coincap.io/v2/assets'
  
  const response = await fetch(url);
  const data = await response.json()
  return data.data
  
}

const setCoin = async () => {

    const container = document.getElementById('Coins');

    const data = await arrCoin();

    data
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
        const newLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd);
        newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

        container.appendChild(newLi);
    });
    
}

window.onload = () => setCoin();
