import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-pet',
  templateUrl: './my-pet.component.html',
  styleUrls: ['./my-pet.component.css']
})
export class MyPetComponent implements OnInit {
  petName = 'puppy';
  petImageLink = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

  updateName(name: string): void {
    this.petName = name;
  }

  updateImage(image: string): void {
    this.petImageLink = image;
  }
}
