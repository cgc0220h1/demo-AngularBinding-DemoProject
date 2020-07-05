import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRepos, ISingleRepo} from '../model/github';

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  url = 'https://api.github.com/search/repositories';

  constructor(private httpClient: HttpClient) {
  }

  findByKeyword(keyword: string): Observable<IRepos> {
    const params = new HttpParams({fromString: 'q=keyword'});
    return this.httpClient.get<IRepos>(this.url, {responseType: 'json', params});
  }
}
