import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
Posts = [];
users = [];
comments = [];
photos = [];
commentsOfPost=[];
postID;
likePost= false;

  constructor(private _Api:ApiserviceService ) { 
    this._Api.getPosts().subscribe( data => 
      this.Posts = data
    );

    this._Api.getUsers().subscribe( data => 
      this.users = data
    );

    this._Api.getComments().subscribe( data => {

    
    this.comments = data 
  });

    this._Api.getPhotos().subscribe( data =>
    this.photos = data 
    );

    _Api.getComments().subscribe( data => {this.comments = data

      for(let i=0; i<this.comments.length; i++)
        {
          if(this.comments[i].postId == this.postID)
            {
              this.commentsOfPost.push(this.comments[i].body)
            }
        }
    });

  }

  like()
  {
   return this.likePost =! this.likePost;
  }

  ngOnInit() {

  }



 
}
