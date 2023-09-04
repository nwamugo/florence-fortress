import { Component, ElementRef, OnInit,
    AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { IMusicFile, musicFiles } from '../../models/music-file.model';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('player') player:
    ElementRef<HTMLMediaElement> | null = null;
  @ViewChild('progressBar') progressBar:
    ElementRef<HTMLElement> | null = null;

  currentFile: IMusicFile | undefined;
  nowPlaying = false;
  progressValue = 0;
  songDuration = 1;

  constructor() { }

  ngOnInit(): void {
    this.currentFile = musicFiles[0];
  }

  ngAfterViewInit(): void {
    this.activateEventListeners();
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.nativeElement.removeAllListeners;
    }
  }


  seek(event: MouseEvent) {
    if (this.progressBar) {
      let ratio = event.offsetX /
        this.progressBar.nativeElement.offsetWidth;

      if (this.player) {
        this.player.nativeElement.currentTime = ratio *
          this.player.nativeElement.duration;
      }
    }
  }


  isLastPlaying() {
    return this.currentFile?.name ===
      musicFiles[musicFiles.length -1].name;
  }

  playOrPause() {
    this.nowPlaying
      ? this.player?.nativeElement.pause()
      : this.player?.nativeElement.play();
  }

  resetProgressBar() {
    this.nowPlaying = false;
    this.progressValue = 0;
  }

  switchSongs() {
    if (this.isLastPlaying()) {
      this.currentFile = musicFiles[0]
    } else {
      this.currentFile = musicFiles[1]
    }
  }

  reloadAudio() {
    this.player?.nativeElement.load()
  }

  activateEventListeners() {
    if (this.player) {
      this.player.nativeElement.addEventListener("loadeddata", () => {
        this.songDuration = this.player?.nativeElement.duration ?? 0;
      })
      this.player.nativeElement.addEventListener("timeupdate", () => {
        this.progressValue = this.player?.nativeElement.currentTime ?? 0;
      })
      this.player.nativeElement.addEventListener("pause", () => {
        this.nowPlaying = false;
      })
      this.player.nativeElement.addEventListener("play", () => {
        this.nowPlaying = true;
      })
      this.player.nativeElement.addEventListener("ended", () => {
        this.resetProgressBar();
        this.switchSongs();
        this.reloadAudio();
        this.playOrPause();
      })
    }
  }
}
