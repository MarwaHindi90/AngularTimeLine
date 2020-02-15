import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post;
  comments=[];
  photos;
  user ;
  commentsOfPost=[];
  likePostt = false;
  likeComment = false;
  display = true;

  postID;
  allComments;
  // commentsOfPost;

  constructor(private route:ActivatedRoute , private api:ApiserviceService) { 
    api.getPosts().subscribe(data =>  this.post = data[this.postID-1]);

    api.getUsers().subscribe(data =>  this.user = data[this.postID-1]);
   

    api.getPhotos().subscribe(data => this.photos = data[this.postID-1]);

    api.getComments().subscribe( data => {this.comments = data

      for(let i=0; i<this.comments.length; i++)
        {
          if(this.comments[i].postId == this.postID)
            {
              this.commentsOfPost.push(this.comments[i].body)
            }
        }
    });
   
  }

  ngOnInit() {
    this.getIdFromUrl()
    
  }

  getIdFromUrl(){
    this.postID = this.route.snapshot.params.id;
    // console.log(this.postID)
  }

  like() {
    return this.likeComment =! this.likeComment;
  }
  likePost()
  {
    return this.likePostt =! this.likePostt;
  }

  displayComment()
  {
    return this.display =! this.display;
  }

}
