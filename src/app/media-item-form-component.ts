import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MediaItemService } from "./media-item-service";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form-component.html',
  styleUrls: ['./media-item-form-component.css']
})
export class MediaItemForm implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private mediaItemService: MediaItemService, private router: Router){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose(
        [
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidation)
    });
  }

  yearValidation(control: FormControl) {
    if (control.value.trim().length == 0) {
      return null;
    }

    const year = parseInt(control.value);
    if (year >= 1900 && year <= 2100) {
      return null;
    }else {
      return {year: true};
    }
   }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
    this.router.navigate(['/']);

  }

}
