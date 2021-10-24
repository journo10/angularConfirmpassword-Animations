import { Component, OnInit } from '@angular/core';
//import { FileUploader,FileSelectDirective  } from 'ng2-file-upload/ng2-file-upload';

//api
//const apiUrl = 'http://localhost:4000/api/upload';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //title = 'ng8fileupload';
  //public uploader: FileUploader = new FileUploader({ url: apiUrl, itemAlias: 'photo' });
  constructor() { }

  ngOnInit(): void {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //   console.log('ResimYükleme:yüklendi:', item, status, response);
    //   alert('Dosya başarıyla yüklendi...');
    // }

  }


  //Angular 12 file upload, Angular 12 image upload konusu İPTAL YAPAMADIN
}
