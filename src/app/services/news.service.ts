import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = 'aerDILd4JkWlzPYgyY0o6wE9Gy2QvqWt0JkHaApWlz4';
  constructor(private http: HttpClient) { }

//
  initSources() {
    
    return this.http.get('https://api.newscatcherapi.com/v2/sources?topic=business&lang=en&countries=US' ,{ headers:{ "x-api-key": this.api_key }});
  }


  initArticles() {
   
    return this.http.get('https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business' ,{ headers:{ "x-api-key": this.api_key }});
  }

  getArticlesByID(source: String) {
    return this.http.get('https://api.newscatcherapi.com/v2/search?q=Apple&from=2021/12/15&countries=CA&page_size=1&'+'source='+source ,{ headers:{ "x-api-key": this.api_key }});
  }

}
