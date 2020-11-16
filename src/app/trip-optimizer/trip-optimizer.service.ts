import { ITrip } from './../model/trip.model';
import { ITripTotal } from './../model/tripTotal.model';
import { SERVER_API_URL } from "../app.constants";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TripService {

    public resourceTripUrl = SERVER_API_URL + 'trip';
    public resourceTripTotalUrl = SERVER_API_URL + 'trip-total';

    constructor(protected http: HttpClient) {}

    findAll(page:number, size:number): Observable<HttpResponse<ITrip[]>> {
        const url = `${this.resourceTripUrl}?_page=${page}&_limit=${size}`
        return this.http.get<ITrip[]>(url, {observe: 'response'});
    }

    getLength(): Observable<HttpResponse<ITripTotal>> {
        return this.http.get<ITripTotal>(this.resourceTripTotalUrl, {observe: 'response'});
    }
}
