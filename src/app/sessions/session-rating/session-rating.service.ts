import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export type RatingValue = 1 | 2 | 3 | 4 | 5;

export interface ISessionRating {
 sessionId: number;
 userId: number;
 rating: RatingValue;
 createdDate: Date;
}

@Injectable()
export class SessionRatingService {

// TODO SWS: remove this it's only here to pretend it
// is the db right now.
private ratings: ISessionRating[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  save(rating: ISessionRating): Observable<ISessionRating> {
    return Observable.of(rating);
  }

  getRatings(sessionId: number): Observable<ISessionRating[]> {
    const ratings = this.ratings.filter((rating) => rating.sessionId === sessionId);
    return Observable.of(ratings);
  }

  getAverageRating(sessionId: number): Observable<number> {
    const ratings = this.ratings.filter((rating) => rating.sessionId === sessionId).map((rating) => rating.rating);
    let sum = 0;
    ratings.forEach((rating) => sum += rating);
    if (!this.ratings.length) {
      return Observable.of(null);
    }
    const avg = sum / ratings.length;
    return Observable.of(avg);
  }
}
