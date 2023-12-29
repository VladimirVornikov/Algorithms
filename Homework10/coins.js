const getCoins = (sum, coins) => {
    const result = [];
    // Сортируем монеты в порядке убывания
    const sortedCoins = coins.sort((a, b) => b - a);
    console.log(coins);

    for (const coin of sortedCoins) {
        while (sum >= coin && result.length < coins.length) {
            result.push(coin);
            sum -= coin;
        }
    }

    // Если сумма разменяна полностью, возвращаем результат, иначе пустой массив
    return sum === 0 ? result : [];
};

const main = () => {
    const penny = [1, 3, 4, 2];
    const amount = 15;
    const res = getCoins(amount, penny);
    console.log(res);
};

main();
