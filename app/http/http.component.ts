import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
	selector: 'http-app',
	templateUrl: './app/http/http.component.html'
})
export class HttpAppComponent implements OnInit{
	users: any[] = [];

	constructor(private httpService: HttpService) {};

	ngOnInit() {
		this.httpService.getData()
			.subscribe( (data: any) => {
				this.users = data;
			} );
	}

	onSubmit(username: string, password: string) {
		const body = {username: username, password: password};
		this.httpService.addData(body)
			.subscribe( (data: any) => {
				console.log(data);
			} );
	}
}
