import { Posts } from './../../models/posts';
import { Comments } from './../../models/comments';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  //Get Request
  public commentList: Comments[];
  //Get request with parameters
  public postList: Posts[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getComments();
    this.getAllCommentsByParameters();
  }

  //Get Request
  getComments() {
    this.httpService.getComments().subscribe((data) => {
      this.commentList = data;
    });
  }

  //Clear Comment
  clearComment(clist: Comments) {
    this.httpService.getAllClearComment(clist).subscribe((data) => {
      let index = this.commentList.indexOf(clist);
      this.commentList.splice(index, 1);
      console.log('Comment silindi.');
      alert('Başarılı bir şekide silindi');
    });
  }

  //Get request with parameters
  getAllCommentsByParameters() {
    this.httpService.getCommentsByParameters().subscribe((data) => {
      this.postList = data;
    });
  }

  //Get request with parameters => Clear Posts
  clearPost(plist: Posts) {
    this.httpService.getAllClearPost(plist).subscribe((data) => {
      let index = this.postList.indexOf(plist);
      this.postList.splice(index, 1);
      console.log('Posts silindi.');
      alert('Başarılı bir şekide silindi');
    });
  }

  //Post
  addPost(pText: HTMLInputElement) {
    const newPost: Comments = {
      postId: +pText.value, //Baştaki + işareti number'dan string'e çevirdi.
      name: pText.value,
      email:pText.value,
      body: pText.value,
    };
    this.httpService.getPost(newPost).subscribe((data: Comments) => {
      this.commentList.push(data); //Yeni eleman ekler
      this.commentList.unshift(data); //ilk sıraya yeni eleman ekler
      pText.value="";//input'un içinin temizlenmesi
      console.log(data);
    });
  }
}

//NOT => HTML kısmında her bir durum için(postId,name,email,body) ayrı ayrı input yazman gerekir.
