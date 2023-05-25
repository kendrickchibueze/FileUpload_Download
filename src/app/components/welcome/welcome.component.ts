import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageModel} from "../../model/imageModel";
import {ImageService} from "../../services/image.service";
import {MatTable} from "@angular/material/table";




export interface PeriodicElement {
  id:number;
  filepath: string;
  caption: string;
  showDownloadMessage: boolean;
  downloadMessage: string;

}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  imageAndCaption:ImageModel[] =[]
  displayedColumns: string[] = ['id', 'filePath', 'caption']
  message:Object | undefined
  constructor(private imageService:ImageService  ) {
  }
  ngOnInit(): void {
    this.imageService.displayImagesAndCaption()
      .subscribe(response=>{
        console.log(response)
        this.imageAndCaption = response
        this.table.renderRows();
      })
  }

  download(filePath: string) {
    this.imageService.downloadImage(filePath)
      .subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filePath;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error(error);
      }
    );
  }




}



