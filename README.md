# Karaoke Project

This project is a Musixmatch clone developed using Angular for the frontend, and Django for the backend.

## See the demo

You can try this website in this [link](https://karaoke-b21f4.web.app/).

## What I learned in this project

- **Gradio:** Called Gradio interfaces as an API.
- **Hugging Face Deployment:** Used to deploy the model as a hugging face space.
- **Speech Transcription:** Used OpenAI's [Whisper](https://huggingface.co/openai/whisper-large-v3) model for speech to text generation.
- **Audio Separation:** Used Deezer's [Spleeter](https://research.deezer.com/projects/spleeter.html) for vocal extraction.

## Features

- Audio File Upload: to generate music from.
- Integrated music player.
- Lyrics synchronization with the music playback.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm
- Angular CLI
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ZakariaeMoutaouakil/karaoke.git
cd karaoke
```

2. Frontend Setup:

```bash
npm install && ng serve
```
