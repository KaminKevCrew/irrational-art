# Irrational Art

A visual exploration of irrational numbers through generative art, inspired by [The Art in Pi](https://www.visualcinnamon.com/2015/01/the-art-in-pi) by Nadieh Bremer.

## About

Irrational Art transforms the digits of famous irrational numbers into beautiful geometric patterns. Each digit (0-9) is mapped to both a unique color and direction, creating a path that visualizes the mathematical constant as a continuous line drawing.

## Features

- **Preset Constants**: Visualize up to 20,000 digits of:
  - π (Pi)
  - e (Euler's number)
  - φ (Phi - the golden ratio)
  - √2 (Square root of two)

- **Custom Input**: Enter your own sequence of digits to create unique patterns

- **Interactive Canvas**: Explore the generated artwork on an interactive canvas

## How It Works

Each digit corresponds to:
- A **color** in a predefined palette
- A **direction** around an imaginary circle (like clock positions, but with 10 directions instead of 12)

The digit 0 points straight up with a gold color, and subsequent digits continue around the circle. White line segments mark the beginning and end of each number sequence.

## Live Demo

Visit [irrational-art.kaminskikeving.workers.dev](https://irrational-art.kaminskikeving.workers.dev)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to CloudFlare
npm run deploy
```

## Built With

- JavaScript (ES6+)
- HTML5 Canvas
- Webpack
- CloudFlare Workers

## License

ISC