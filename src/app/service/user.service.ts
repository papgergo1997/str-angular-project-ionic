
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  list$: Observable<any>;
  userCollection: AngularFirestoreCollection<any>;

  constructor(private fireStore: AngularFirestore) {
    this.userCollection = this.fireStore.collection('users');
    this.list$ = this.userCollection.valueChanges({
      idField: 'id'
    });

  }

  get(id: string): Observable<any> {
    return this.userCollection.doc(id).valueChanges();
  }

  create(doc: any): Promise<any> {
    return this.userCollection.add({ ...doc });
  }

  update(doc: any): Promise<any> {
    const id = doc.id
    delete doc.id
    return this.userCollection.doc(id).update({ ...doc });
  }

  remove(doc: any): Promise<any> {
    return this.userCollection.doc(doc.id).delete();
  }
}
