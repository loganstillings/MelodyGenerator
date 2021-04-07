# Chord Based Melody Generator

This repo contains a single page node application of a chord based melody generator.

## Installation

Running these steps requires a previous installation of [Node.js](https://nodejs.org/en/download/).

1. First clone the repository:  
   `git clone https://github.com/loganstillings/MelodyGenerator.git`.
2. Install the necessary node packages (e.g. Express):  
   `npm install`
3. Serve the app locally:  
   `node server.js`
4. Navigate to [http://localhost:8000/](http://localhost:8000/)

## Usage

The web application contains a piano layout for the purpose of melody continuation. Touching and holding keys on the piano will trigger the generated sequence. Notes can be played by clikcing with the mouse, using the computer keyboard (with [this layout](https://camo.githubusercontent.com/29529110d639ed79a04752c036fe301fd15c961b/68747470733a2f2f7261772e6769746875622e636f6d2f6b796c65737465747a2f617564696f6b6579732f6d61737465722f696d616765732f617564696f6b6579732d6d617070696e672d726f7773322e6a7067) according to the piano), or by using your own MIDI controller.
