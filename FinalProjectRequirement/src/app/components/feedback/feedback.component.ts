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
  selectedEmoji = ''; // New for emoji selection

  openModal() {
    this.isModalOpen = true;
    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitFeedback() {
    console.log('Feedback submitted:');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    console.log('Selected Emoji:', this.selectedEmoji); // Also log emoji choice

    this.openModal();
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.selectedEmoji = '';
  }

  // When emoji is selected
  selectEmoji(emoji: string) {
    this.selectedEmoji = emoji;
  }
}
