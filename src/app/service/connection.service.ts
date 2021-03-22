import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Connection } from '../model/connection';
import { User } from '../model/user';
import { UserService } from './user.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  list$: Observable<any>;
  user: User = new User();
  connectionCollection: AngularFirestoreCollection<any>;


  constructor(private fireStore: AngularFirestore, private userService: UserService) {
    this.connectionCollection = this.fireStore.collection('connections');
    this.list$ = this.connectionCollection.valueChanges({
      idField: 'id'
    });
  }



  create(doc: any): Promise<any> {
    return this.connectionCollection.add({ ...doc });
  }

  update(doc: any): Promise<any> {
    const id = doc.id
    delete doc.id
    return this.connectionCollection.doc(id).update({ ...doc });
  }

  remove(doc: any): Promise<any> {
    return this.connectionCollection.doc(doc.id).delete();
  }

}

