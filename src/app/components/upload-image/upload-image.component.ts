import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import {ImageService} from "../../services/image.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = "";
  fileToUpload: File | null = null;
  caption: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;


  constructor(private imageService:ImageService,private toast: NgToastService, private route: Router) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList | null): void {
    if (files) {
      this.fileToUpload = files.item(0);

      // Show image preview
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          this.imageUrl = event.target.result.toString();
        }
      };

      if (this.fileToUpload) {
        reader.readAsDataURL(this.fileToUpload);
      }
    }
  }


  onSubmit(){
    if(this.fileToUpload && this.caption){
      this.imageService.uploadImage(this.fileToUpload, this.caption)
        .subscribe({
          next:(res=>{
            console.log("Image Uploaded Successfully...", res)
            this.toast.success({
              detail:'SUCCESS',
              summary:'Image Uploaded Successfully!',
              duration:3000,

            })


            this.fileToUpload=null
            this.caption=""
            this.imageUrl = null; // Clear the image preview
            // Clear the file input element
            const fileInputElement = document.getElementById('fileInput') as HTMLInputElement;
            if (fileInputElement) {
              fileInputElement.value = '';
            }
            
            this.route.navigate(['welcome'])


          }),
          error:(err=>{
            console.log("Image was not uploaded successfully", err)
            this.toast.error({
              detail:'ERROR',
              summary:'Image Upload unSuccessful!',
              duration:3000,

            })
          })
        })

    }else {
      console.log('Please select a file and provide a caption');
    }

  }




}

