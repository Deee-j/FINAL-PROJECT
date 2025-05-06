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
  errorMessage = '';
  feedbackRecords: any[] = [];

  // For editing existing feedback
  isEditing = false;
  editingIndex: number | null = null;

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
    if (!this.name.trim() || !this.email.trim() || !this.message.trim() || !this.selectedEmoji) {
      this.errorMessage = '⚠️ Please complete all fields including how you feel.';
      return;
    }

    this.errorMessage = '';

    const currentDateTime = new Date().toLocaleString();

    const feedback = {
      name: this.name,
      email: this.email,
      message: this.message,
      feeling: this.selectedEmoji,
      dateTime: currentDateTime,
    };

    if (this.isEditing && this.editingIndex !== null) {
      // Update existing record
      this.feedbackRecords[this.editingIndex] = feedback;
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      // Add new feedback
      this.feedbackRecords.unshift(feedback);
    }

    this.openModal();
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.selectedEmoji = '';
    this.errorMessage = '';
    this.isEditing = false;
    this.editingIndex = null;
  }

  selectEmoji(emoji: string) {
    this.selectedEmoji = emoji;
  }

  editFeedback(record: any, index: number) {
    this.name = record.name;
    this.email = record.email;
    this.message = record.message;
    this.selectedEmoji = record.feeling;
  
    // Optional: remove the original so user re-submits edited one
    this.feedbackRecords.splice(index, 1);
  }
  
  deleteFeedback(index: number) {
    this.feedbackRecords.splice(index, 1);
  }
  
}
