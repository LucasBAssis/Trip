import { ITrip } from './../model/trip.model';
import { SERVER_API_URL } from "../app.constants";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TripService {

    public resourceUrl = SERVER_API_URL + 'trip';

    constructor(protected http: HttpClient) {}

    findAll(): Observable<HttpResponse<ITrip[]>> {
        return this.http.get<ITrip[]>(this.resourceUrl, {observe: 'response'});
    }
}
