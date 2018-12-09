import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export type RatingValue = 1 | 2 | 3 | 4 | 5;

export interface ISessionRating {
 id: number;
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

 /* This got handled by the back end.
    getAvgRating(sessionId: number): Observable<number> {
    const ratings = this.ratings
      .filter((ratingObj: ISessionRating) => ratingObj.sessionId === sessionId)
      .map((ratingObj: ISessionRating) => ratingObj.rating);
    if (!this.ratings.length) {
      return Observable.of(null);
    }
    let sum = 0;
    ratings.forEach((rating: number) => sum += rating);
    if (!this.ratings.length) {
      return Observable.of(null);
    }
    const avg = sum / ratings.length;
    return Observable.of(avg);
  }
*/
  hasBeenRatedByUser(userId: number, sessionId): Observable<boolean> {
    const hasBeenRated = this.ratings.some(
      (rating => rating.userId === userId && rating.sessionId === sessionId)
    );
    return Observable.of(hasBeenRated);
  }

  getRatings(sessionId: number): Observable<ISessionRating[]> {
    const ratings = this.ratings
      .filter((rating) => rating.sessionId === sessionId);
    return Observable.of(ratings);
  }

  save(rating: ISessionRating): Observable<ISessionRating> {
    if (rating.id) {
      return this.http.put<ISessionRating>(`http://localhost:3000/ratings/${rating.id}`, rating);
    } else {
      return this.http.post<ISessionRating>(`http://localhost:3000/ratings/${rating.sessionId}`, rating);
    }
  }
}
