import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userOcuppation: string = "Developer";
  city: string = 'A Coruña';
  childsMessage: string = ""

  receiveEmision($event: string):void {
    this.childsMessage = $event;
  }
}
