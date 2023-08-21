
function generateSVG(input) {
  let shapeElement = '';
  if (input.shape === 'Circle') {
    shapeElement = `<circle cx="150" cy="115" r="80" fill="${input.shapeColor}" />`;
  } else if (input.shape === 'Square') {
    shapeElement = `<rect x="40" y="40" width="220" height="150" fill="${input.shapeColor}" />`;
  } else if (input.shape === 'Triangle') {
    shapeElement = `<polygon points="150,40 40,190 260,190" fill="${input.shapeColor}" />`;
  }

  let logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeElement}`;
  logo += `<text x="35" y="80" font-size="40" fill="${input.textColor}">${input.text}</text></svg>`;

  return logo;
}

module.exports = generateSVG;
