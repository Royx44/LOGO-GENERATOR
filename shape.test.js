// shape.test.js
const generateSVG = require('./shape');

test('Generate SVG Logo', () => {
  const input = {
    text: 'ABC',
    textColor: 'red',
    shape: 'Circle',
    shapeColor: 'blue',
  };

  const expectedSVG = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="115" r="80" fill="blue" />
      <text x="35" y="80" font-size="40" fill="red">ABC</text>
    </svg>
  `;

  const generatedSVG = generateSVG(input);
  expect(generatedSVG).toBe(expectedSVG);
});
