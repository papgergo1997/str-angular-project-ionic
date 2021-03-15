import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Interest } from '../model/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  interestCollection: AngularFirestoreCollection<any>;
  list$: Observable<any>;

  constructor(private fireStore: AngularFirestore) {
    this.interestCollection = this.fireStore.collection('interests');
    this.list$ = this.interestCollection.valueChanges({
      idField: 'id'
    });
  }

  get(id: string): Observable<any> {
    return this.interestCollection.doc(id).valueChanges();
  }

  create(doc: any): Promise<any> {
    return this.interestCollection.add({ ...doc });
  }
  update(doc: any): Promise<any> {
    const id = doc.id;
    delete doc.id
    return this.interestCollection.doc(id).update({ ...doc });
  }
  remove(doc: any): Promise<any> {
    return this.interestCollection.doc(doc.id).delete();
  }
}
