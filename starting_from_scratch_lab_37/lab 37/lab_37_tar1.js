const images = ['1.jpg', '2.jpg', '3.jpg','4.jpg'];
const widths = [200, 300, 200];

const leftValue = getLeftValueForImage(images, widths, 1);

console.log(leftValue);

function getLeftValueForImage(images, widths, index) {
    let results = 0;
    if(index - 1 < 0) {
        return results;
    }
    const slicedImages = images.slice(0, index);
    
    for (let index = 0; index < slicedImages.length; index++) {
        const element = widths[index];
        if(element) {
          results -= element;
        }
    }
    
    return results;
}