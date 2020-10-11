const cars = [ { name: 'c1', color: 'red', speed: 40 }, { name: 'c2', color: 'blue', speed: 20 }];

const fastestCar = getFastestCar(cars);
console.log(fastestCar.name);

// three solutions 
// one using reduce -> const max = data.reduce((prev, current) => (prev.y > current.y) ? prev : current) (n)
// second using var maxB = a.sort((a,b)=>b.y-a.y)[0].y;    // 27 chars time complexity:  O(nlogn) (nlogn)
// third var maxC = Math.max(...a.map(o=>o.y));     // 26 chars time complexity: >O(2n)


function getFastestCar(cars) {
    const fastestCar = cars.reduce((prev, current) => (prev.speed > current.speed) ? prev : current);
    return fastestCar;
}