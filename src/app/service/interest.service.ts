import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Interest } from '../model/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  apiUrl: string = 'http://localhost:3000/interests';
  list$: BehaviorSubject<Interest[]> = new BehaviorSubject<Interest[]>([]);

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<Interest[]>(this.apiUrl).subscribe(
      interests => this.list$.next(interests)
    );
  }

  get(id: number): Observable<Interest> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Observable<Interest> | undefined = this.http.get<Interest>(`${this.apiUrl}/${id}`)
    if (id == 0) {
      return of(new Interest());
    } else {
      return ev;
    }
  }

}
