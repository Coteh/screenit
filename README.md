# screenit

[![npm](https://img.shields.io/npm/v/screenit)](https://www.npmjs.com/package/screenit)
[![npm](https://img.shields.io/npm/dw/screenit)](https://npmcharts.com/compare/screenit?minimal=true)

A simple tool I made using [puppeteer](https://github.com/puppeteer/puppeteer) that allows me to take screenshots of webpages for project READMEs, etc.

## Features
- Take a screenshot of a supplied page using puppeteer

## Installation

### Via `npm`

Install the command globally by running `npm install -g screenit`

### Via Cloning
1. Clone the repository by running:
```
git clone https://github.com/Coteh/screenit.git
```

1. Run `npm link` to symlink the executable to your system path.

## Usage
```
usage: screenit [URL] [-o OUTPUT_FILE]

  Optional flags:
  -o|--output [OUTPUT_FILE]	Specify output file - defaults to 'screenshot.png'
  --version			Display version number
```

## Issues
- Opinionated (e.g. width and height is always 1280x720, it suits a personal use case of taking quick standard screenshots of pages)
- Only saves to PNG
- Not guaranteed to work with every page (post on Issues page if you find something)

## Future Work
- Implement full-page screenshots (using automated scrolling)
- Use cookies
- Add tests
