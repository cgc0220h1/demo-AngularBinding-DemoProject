import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRepos} from '../model/github';

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  url = 'https://api.github.com/search/repositories';

  constructor(private httpClient: HttpClient) {
  }

  findByKeyword(keyword: string): Observable<IRepos> {
    let params = new HttpParams();
    params = params.append('q', keyword);
    return this.httpClient.get<IRepos>(this.url, {params});
  }
}
