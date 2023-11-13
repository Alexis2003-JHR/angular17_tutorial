import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-system';
import { OperatingSystemsService } from '../../core/operating-systems.service';

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
  operatingSystemService: OperatingSystemsService = inject(OperatingSystemsService);
  operatingSystems: OperatingSystem[] = this.operatingSystemService.getOperatingSystems();
  username: string = "Alexis";
  doesUserExist: boolean = true;
  isEditable: boolean = true;

  onClick(osName: string): void {
    console.log(osName)
  }

  emitToParent(): void {
    this.greet.emit("Hi! I'm your child");
  }
}
