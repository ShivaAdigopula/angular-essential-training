import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'categoryList',
  pure : true,
})
export class CategoryList implements PipeTransform {
  transform(mediaItems) {
      const categories = mediaItems.map(mediaItem => mediaItem.category);
      return [...new Set<String>(categories)].join();
  }

}
