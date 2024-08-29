import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'allVod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-vod.component.html',
  styleUrl: './all-vod.component.css'
})
export class AllVodComponent implements OnInit {


  // data: { 
  //   title: string, 
  //   description:string, 
  //   videoLink: SafeResourceUrl
  // }[] = [];

  // constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {


    // this.apiService.getVideoData()
    // .then((responseData) => {
    //   this.data = responseData.map((item: { 
    //     title: string, 
    //     description:string, 
    //     videoLink: string 
    //   }) => ({
    //     title: item.title,
    //     description: item.description,
    //     videoLink: this.sanitizer.bypassSecurityTrustResourceUrl(item.videoLink)
    //   }));
    // }).catch(error => {
    //   console.error('Erreur lors de la récupération des données:', error);
    // });
  // }
  // convertToEmbedUrl(url: string): string {
  //   const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^"&?\/\s]{11})/;
  //   const match = url.match(regex);
  //   if (match && match[1]) {
  //     return `https://www.youtube.com/embed/${match[1]}`;
    }
  //   return url
  // }
}