import { Rectangle } from '../types/types';

interface rectanglesResponse {
  data: Rectangle[]
}

export async function getRectangles(): Promise<rectanglesResponse> {
  const data = await fetch('http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd')
  return await data.json();
}

export async function getVideoSRC() {
  const data = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  return data;
}