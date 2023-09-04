export interface IMusicFile {
  opusUrl: string;
  mp3Url: string;
  name: string;
  artist: string;
}

export const musicFiles: Array<IMusicFile> = [
  {
    opusUrl: "assets/audio/ruby-amanfu-beautiful-you-are.opus",
    mp3Url: "assets/audio/ruby-amanfu-beautiful-you-are.mp3",
    name: "Beautiful, you are",
    artist: "Ruby Amanfu"
  },
  {
    opusUrl: "assets/audio/sleeping-lion-for-help.opus",
    mp3Url: "assets/audio/sleeping-lion-for-help.mp3",
    name: "For help",
    artist: "Sleeping Lion"
  }
]