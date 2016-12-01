import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {
	constructor(private http: Http) {};

	getData(): Observable<any[]> {
		return this.http.get('http://localhost:3001/api/data')
			.map( (res: Response) => res.json() );
	}

	addData(user: Object): Observable<any> {
		const body = JSON.stringify(user);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:3001/api/data', 
					body, {headers: headers})
			.map( (res: Response) => res.ok );
	}
}