import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { router } from './app.routing';
import { CategoryList } from './category-list.pipe';
import { FavouriteDirective } from './favourite.directive';
import { MediaItemForm } from './media-item-form-component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from './media-item.component';


@NgModule({
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    router
  ], // is used to bring in other modules
  declarations:[
    FavouriteDirective,
    CategoryList,
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MediaItemForm], // is used to make components, directivies, pipes available that don't come another module
  bootstrap: [
    AppComponent
  ], // is the entry point components
})
export class AppModule {

}


