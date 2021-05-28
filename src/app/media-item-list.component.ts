import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from './media-item-service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{
  medium = '';
  mediaItems;

  constructor(private mediaItemService: MediaItemService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const medium = paramMap.get('medium');
      this.mediaItems = this.getMediaItemsByMedium(medium);
    })
  }

  getMediaItemsByMedium(medium) {
    const mediaItems = this.mediaItemService.get();
    if (medium === '' || medium === 'all') {
      return mediaItems;
    }
    return mediaItems.filter(mediaItem => mediaItem.medium === medium);
  }

  onMediaItemDelete(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.delete(mediaItem);
    this.mediaItems = this.mediaItemService.get();
  };
}
