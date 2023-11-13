import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-system';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  username: string = "Alexis";
  doesUserExist: boolean = true;
  operatingSystems:  OperatingSystem[] = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOs'}, {id: 'linux', name: 'Linux'}];
  isEditable: boolean = true;

  onClick(osName: string): void {
    console.log(osName)
  }

  emitToParent(): void {
    this.greet.emit("Hi! I'm your child");
  }
}
