import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import confetti from 'canvas-confetti';  

@Component({
  selector: 'app-student-form',
  standalone: true,
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  imports: [CommonModule, FormsModule],
})
export class StudentFormComponent {
  student = {
    name: '',
    email: '',
    age: 0,
  };

  onSubmit() {
    console.log('Form Submitted!', this.student);
    this.triggerConfetti();
    this.student = { name: '', email: '', age: 0 };
  }

  triggerConfetti() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ff4f81', '#ffdb00', '#42b883', '#e8e8e8'],
    });
  }
}
