import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  missionText = [
    {
      text: `In support of Sustainable Development Goal 4 (SDG 4), which emphasizes Quality Education, we proudly highlight our commitment through our platform. We believe that education is a powerful tool that can open countless opportunities and drive lasting change within communities. Our aim is to contribute meaningfully to the global call for inclusive and equitable education for all.`
    },
    {
      text: `At LearnTube PH, our mission is to make quality education accessible to every Filipino student. We firmly believe in education’s transformative power to uplift individuals and communities alike. Guided by the principles of SDG 4, we are dedicated to ensuring that every learner, regardless of background, has the opportunity to receive a quality education.`
    },
    {
      text: `Our platform curates high-quality educational content, handpicked from trusted sources to meet the diverse learning needs of Filipino students. We strive to make our resources as inclusive as possible, offering a wide range of materials across various subjects and educational levels. Every piece of content is carefully selected to align with our goal of promoting lifelong learning and equal opportunities.`
    },
    {
      text: `Importantly, LearnTube PH is and will always be completely free and accessible to everyone. By removing financial barriers, we aim to empower students across the Philippines to pursue their educational dreams. Our platform serves as a gateway to knowledge, growth, and future success, creating a positive ripple effect that extends beyond the individual to the wider community.`
    }
  ];

  vissionText = [
    {
      text: `To ensure inclusive and equitable quality education and promote lifelong learning opportunities for all, empowering individuals with the knowledge and skills necessary for personal growth, social well-being, and sustainable development.`
    },
    
  ];

  teamMembers = [
    {
      name: 'Dee Jay',
      role: 'CEO & Founder',
      age: 20,
      sex: 'Male',
      course: 'Information Technology',
      hobbies: ['Photography', 'Traveling', 'Gaming'],
      imageUrl: '../assets/images/about-images/deejay.jpg'
    },
    {
      name: 'Charlie',
      role: 'Head of Development',
      age: 20,
      sex: 'Male',
      course: 'Information Technology',
      hobbies: ['Coding', 'Video Games', 'Hiking'],
      imageUrl: '../assets/images/about-images/charlie.jpg'
    },
    {
      name: 'Lawrence',
      role: 'Lead Designer',
      age: 21,
      sex: 'Male',
      course: 'Information Technology',
      hobbies: ['Drawing', 'Coding', 'Playing Music'],
      imageUrl: 'https://th.bing.com/th/id/OIP.tX36supoUyT_GOZtBHrQJgHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
      name: 'Von',
      role: 'Editor',
      age: 23,
      sex: 'Male',
      course: 'Information Technology',
      hobbies: ['Coding', 'Reading', 'Gaming'],
      imageUrl: '../assets/images/about-images/von.jpg'
    },
    {
      name: 'Mel Jones',
      role: 'Project Manager',
      age: 20,
      sex: 'Male',
      course: 'Information Technology',
      hobbies: ['Traveling', 'Reading', 'Coding'],
      imageUrl: '../assets/images/about-images/meljones.jpg'
    }
  ];
}