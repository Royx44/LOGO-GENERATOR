const fs = require('fs');
const inquirer = require('inquirer');

// svg added to the end of logo to prevent irregular shape sizing
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

// if logo is successfully created
function writeToFile(fileName, input) {
  const logo = generateSVG(input);

  fs.writeFile(fileName, logo, () => {
    console.log("Generated logo.svg");
  });
}

// displays the questions to the user
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter three characters.',
        validate: (input) => {
          if (input.length === 3) {
            return true;
          }
          return 'Please enter exactly three characters.';
        },
      },
      {
        name: 'textColor',
        type: "input",
        message: 'Enter a color keyword for the text color.',
      },
      {
        name: 'shape',
        type: "list",
        message: 'Choose a shape for the logo.',
        choices: [ "Square", "Circle", "Triangle" ],
      },
      {
        name: 'shapeColor',
        type: "input",
        message: 'Enter a color keyword for the shape color.',
      },
    ])
    .then((input) => {
      writeToFile("logo.svg", input);
    });
}

promptUser();
