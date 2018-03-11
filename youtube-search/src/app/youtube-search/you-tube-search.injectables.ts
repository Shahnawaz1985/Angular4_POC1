/**
 * New typescript file
 */
import {YouTubeSearchService} from './you-tube-search.service';

export const youTubeServiceInjectables: Array<any> = [
  {provide: YouTubeSearchService, useClass: YouTubeSearchService},
  {provide: 'YOUTUBE_API_KEY', useValue: 'AIzaSyBvYiOC6CRibH-9-1onORuDczbEAK0p3Mc'},
  {provide: 'YOUTUBE_API_URL', useValue: 'https://www.googleapis.com/youtube/v3/search'}
];
