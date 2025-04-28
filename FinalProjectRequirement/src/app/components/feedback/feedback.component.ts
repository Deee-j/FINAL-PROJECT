import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Add CommonModule here
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedBackComponent {

  isModalOpen = false;
  name = '';
  email = '';
  message = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitFeedback() {
    console.log('Feedback submitted:');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);

    // After submit, you can reset form and close
    this.name = '';
    this.email = '';
    this.message = '';
    this.closeModal();
  }

  // Reset form fields
  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}