# Chord Based Melody Generator

This repo contains a single page node application of a chord based melody generator.

## Installation

Running these steps requires a previous installation of [Node.js](https://nodejs.org/en/download/).

1. First clone the repository:  
   `git clone https://github.com/loganstillings/MelodyGenerator.git`.
2. Navigate to the cloned repository:  
   `cd MelodyGenerator`
3. Install the necessary node packages (e.g. Express):  
   `npm install`
4. Serve the app locally:  
   `node server.js`
5. View the app on [http://localhost:8000/](http://localhost:8000/)

## Usage

The web application contains a piano layout for the purpose of melody continuation. Touching and holding keys on the piano will trigger the generated sequence. Notes can be played by clikcing with the mouse, using the computer keyboard (with [this layout](https://camo.githubusercontent.com/29529110d639ed79a04752c036fe301fd15c961b/68747470733a2f2f7261772e6769746875622e636f6d2f6b796c65737465747a2f617564696f6b6579732f6d61737465722f696d616765732f617564696f6b6579732d6d617070696e672d726f7773322e6a7067)), or by using your own MIDI controller. User controlled notes will be highlighted in blue, and computer generated notes will be highlighted in green.

### Parameters

Included in the application are several parameters which the user can use to influence the generated melodic sequence:

- Temperature - a slider which controls the randomness of the generated sequence. Low values (when the slider is to the left) will result in the least random output in terms of rhythm and melodic variation.
- Chords - a multi-select used as the underlying chord progression for the generated melody. There is also an option to Auto-detect chords based on the notes being played on the piano. This app supports either using auto-detection or manually selecting which chords should influence the generated melody.
- Instrument - a selection of several sampler instruments including:
  - Grand piano
  - Synth
  - Marimba
  - Casio

## Dependencies

This work makes use of several packages, which are directly imported in the browser. You do not need to do any additional steps to download the correct packages other than the initial inistallation of express using npm.
The dependencies used are:

- [Magenta.js](https://goo.gl/magenta/js) - used for integrating Magenta's [Improv_rnn](https://github.com/magenta/magenta/tree/master/magenta/models/improv_rnn) model with browser-ready javascript code
- [Tensorflow.js](https://js.tensorflow.org/) - contains the underlying architecture used for deep learning in Magenta.js
- [Tone.js](https://tonejs.github.io/) - used for browser level audio capabilities, as well as some of the sounds used for in the instruments
- [Audiokeys](https://github.com/kylestetz/AudioKeys) - used for quick rendering of the piano player
- [WebMidi](https://github.com/djipco/webmidi) - used for browser level audio capabilities
- [Tonal](https://github.com/tonaljs/tonal) - Music theory library for music related computations used for auto-detecting the input chord
- [Neural Melody Autocompletion](https://codepen.io/teropa/pen/gvwwZL) - of which this project was originally forked/inspired
