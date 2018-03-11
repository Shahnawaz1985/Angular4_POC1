/**
 * New typescript file
 */
import {SearchResult} from './search-result.model';
import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class YouTubeSearchService {
  http: Http;
  apiKey: string;
  apiURL: string;
  constructor(http: Http,
    @Inject('YOUTUBE_API_KEY') apiKey: string,
    @Inject('YOUTUBE_API_URL') apiURL: string) {
    this.http = http;
    this.apiKey = apiKey;
    this.apiURL = apiURL;
  }
  search(query: string): Observable<SearchResult[]> {
     const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiURL}?${params}`;
    console.log('Service URL:',queryUrl);
    return this.http.get(queryUrl).
    map((response: any) => {
      return (<any>response.json()).items.map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnalUrl: item.snippet.thumbnails.high.url
        });
      });
    });
}
}
