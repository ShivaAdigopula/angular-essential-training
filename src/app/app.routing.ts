import { RouterModule, Routes } from "@angular/router";
import { MediaItemForm } from "./media-item-form-component";
import { MediaItemListComponent } from "./media-item-list.component";

const appRoutes: Routes = [
  { path: 'add', component: MediaItemForm },
  { path: ':medium', component: MediaItemListComponent},
  { path: '', pathMatch:'full', redirectTo:'all'}
];

export const router = RouterModule.forRoot(appRoutes);
