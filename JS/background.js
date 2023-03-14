const image = ["0.png", "1.png", "2.png", "3.png"];

const nowImage = image[Math.floor(Math.random() * image.length)];


/*JS에서 HTML에 추가하기 */
const bgImage = document.createElement("img");

bgImage.src = `IMG/${nowImage}`;

document.body.appendChild(bgImage);