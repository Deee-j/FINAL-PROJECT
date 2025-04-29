import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedBackComponent {
  isModalOpen = false;
  name = '';
  email = '';
  message = '';
  selectedEmoji = '';
  errorMessage = '';  // 🔴 Error message for incomplete input
  feedbackRecords: any[] = [];

  openModal() {
    this.isModalOpen = true;
    setTimeout(() => {
      this.closeModal();
    }, 3000); // Auto-close modal after 3 seconds
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitFeedback() {
    // 🔎 Check if any field is incomplete
    if (!this.name.trim() || !this.email.trim() || !this.message.trim() || !this.selectedEmoji) {
      this.errorMessage = '⚠️ Please complete all fields including how you feel.';
      return;
    }

    this.errorMessage = '';  // ✅ Clear error if everything is valid

    const currentDateTime = new Date().toLocaleString();

    const feedback = {
      name: this.name,
      email: this.email,
      message: this.message,
      feeling: this.selectedEmoji,
      dateTime: currentDateTime,
    };

    this.feedbackRecords.unshift(feedback);

    this.openModal();
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.selectedEmoji = '';
    this.errorMessage = '';  // Clear error on reset
  }

  selectEmoji(emoji: string) {
    this.selectedEmoji = emoji;
  }
}
