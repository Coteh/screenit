# screenshot-maker

A simple tool I made using [puppeteer](https://github.com/puppeteer/puppeteer) that allows me to take screenshots of webpages for project READMEs, etc.

## Features
- Take a screenshot of a supplied page using puppeteer

## Installation
1. Clone the repository by running `git clone https://github.com/Coteh/screenshot-maker.git`

1. Run `npm link` to symlink the executable to your system path.

## Usage
```
usage: screenshot-maker [URL] [-o OUTPUT_FILE]

  Optional flags:
  -o|--output [OUTPUT_FILE]	Specify output file - defaults to 'screenshot.png'
```

## Issues
- Opinionated (e.g. width and height is always 1280x720, it suits a personal use case of taking quick standard screenshots of pages)
- Only saves to PNG
- Not guaranteed to work with every page (post on Issues page if you find something)

## Future Work
- Implement full-page screenshots (scroll down page)
- Use cookies
- Add tests
