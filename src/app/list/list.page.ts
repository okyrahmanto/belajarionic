import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: any[] | undefined;
  constructor(private http: HttpClient) { }

  fetchUsers() {
    this.http.get<any>('https://dummyjson.com/users')
    .subscribe((data: any[] | undefined)=>{
      this.users = data;
      console.log(this.users);
    })
  }

  ngOnInit() {
    this.fetchUsers();
    
  }

  

  videoGames = [
    "Pokémon Yellow",
    "Mega Man X",
    "The Legend of Zelda",
    "Pac-Man",
    "Super Mario World",
  ];

  alertButtons = ['YES','NO'];

}
