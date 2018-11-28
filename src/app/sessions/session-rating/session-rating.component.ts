import { Component, OnInit, Input } from '@angular/core';
import { SessionRatingService, ISessionRating, RatingValue } from './session-rating.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-session-rating',
  templateUrl: './session-rating.component.html',
  styleUrls: ['./session-rating.component.less']
})
export class SessionRatingComponent implements OnInit {
  @Input() sessionId: number; // look at the element that spawned me, and if it has an element called sessionId pass it.

  avgRating: number;
  selectedRating: RatingValue;

  ratings: {value: number, name: string}[] = [
    {value: 1, name: '1 star'},
    {value: 2, name: '2 star'},
    {value: 3, name: '3 star'},
    {value: 4, name: '4 star'},
    {value: 5, name: '5 star'},
  ];
  constructor(
    private ratingService: SessionRatingService,
    private toastManager: ToastsManager
  ) { }

  ngOnInit() {
    this.getAvgRating();
  }

hasBeenRatedByUser(userId: number, sessionId): Observable<boolean> {
  return Observable.of(false);
}

getAvgRating(): void {
  this.ratingService.getAverageRating(this.sessionId)
  .subscribe((avgRating) => this.avgRating = avgRating);
}

  submit(): void {
    const rating: ISessionRating = {
      userId: 1,
      sessionId: this.sessionId,
      rating: this.selectedRating,
      createdDate: new Date(),
    };
    this.ratingService.save(rating)
    .subscribe(() => {
      this.toastManager.success('Rating submitted');
      this.getAvgRating();
    });
  }

}
