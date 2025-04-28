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
  feedbackRecords: any[] = []; // Store feedback records

  // Modal control
  openModal() {
    this.isModalOpen = true;
    setTimeout(() => {
      this.closeModal();
    }, 3000); // Auto close the modal after 3 seconds
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // Submit feedback
  submitFeedback() {
    if (this.name.trim() && this.email.trim() && this.message.trim()) {
      // Get current date and time
      const currentDateTime = new Date().toLocaleString();

      // Create feedback object
      const feedback = {
        name: this.name,
        email: this.email,
        message: this.message,
        feeling: this.selectedEmoji || 'No feeling selected',  // Default message if no emoji selected
        dateTime: currentDateTime, // Add the current date and time
      };

      // Add the feedback to the records
      this.feedbackRecords.push(feedback);

      // Open the success modal
      this.openModal();

      // Reset the form after submission
      this.resetForm();
    }
  }

  // Reset form fields
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
