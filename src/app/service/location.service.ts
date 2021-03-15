import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationCollection: AngularFirestoreCollection<any>
  list$: Observable<any>

  constructor(private fireStore: AngularFirestore) {
    this.locationCollection = this.fireStore.collection('locations');
    this.list$ = this.locationCollection.valueChanges({
      idField: 'id'
    });
  }

  get(id: string): Observable<any> {
    return this.locationCollection.doc(id).valueChanges();
  }

  create(doc: any): Promise<any> {
    return this.locationCollection.add({ ...doc });
  }

  update(doc: any): Promise<any> {
    const id = doc.id
    delete doc.id
    return this.locationCollection.doc(id).update({ ...doc });
  }

  remove(doc: any): Promise<any> {
    return this.locationCollection.doc(doc.id).delete();
  }

}
