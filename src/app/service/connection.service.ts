import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Connection } from '../model/connection';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  apiUrl: string = 'http://localhost:3000/connections';
  list$: BehaviorSubject<Connection[]> = new BehaviorSubject<Connection[]>([]);
  usersConnection: Connection[] = [];
  user: User = new User();
  connectionNumbers: number[] = [];

  constructor(private http: HttpClient, private userService: UserService) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<Connection[]>(this.apiUrl).subscribe(
      connections => this.list$.next(connections)
    );
  }

  get(id: number): Observable<Connection> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Observable<Connection> | undefined = this.http.get<Connection>(`${this.apiUrl}/${id}`);
    if (id == 0) {
      return of(new Connection());
    } else {
      return ev;
    }
  }

  create(connection: Connection): Observable<Connection> {
    return this.http.post<Connection>(this.apiUrl, connection);
  }

  update(connection: Connection): Observable<Connection> {
    return this.http.patch<Connection>(`${this.apiUrl}/${connection.id}`, connection);
  }

  remove(connection: Connection): void {
    this.http.delete<Connection>(`${this.apiUrl}/${connection.id}`).subscribe(
      () => this.getAll()
    );
  }
  getConnection(id: number = this.user.id): void {
    this.http.get<Connection[]>(this.apiUrl).subscribe((connection) => connection.forEach(item => {
      if ((item.user1 == id) || (item.user2 == id)) {
        this.usersConnection.push(item)
      } else return
    }))
  }

}

