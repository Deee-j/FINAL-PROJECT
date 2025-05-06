import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private sanitizer: DomSanitizer) {
    this.videos = this.rawVideos.map(video => ({
      ...video,
      embedUrl: this.getEmbedUrl(video.src)
    }));
  }

  searchQuery = '';

  get filteredImages() {
    return this.images.filter(img =>
      img.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      img.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get filteredVideos() {
    return this.videos.filter(video =>
      video.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  images = [
    {
      title: 'Classroom Learning',
      description: 'A well-equipped classroom provides a conducive environment for students to engage, learn, and grow. This image showcases the traditional setup for effective classroom learning.',
      src: 'https://www.themanthanschool.co.in/blog/wp-content/uploads/2023/06/Optimal-Learning-Environment-1000x576.jpg',
      alt: 'Classroom Learning'
    },
    {
      title: 'Teacher Mentorship',
      description: 'Teacher mentorship plays a vital role in supporting professional growth and improving teaching strategies. This image depicts a mentoring session between experienced educators.',
      src: 'https://get.goreact.com/wp-content/uploads/2024/09/2024_09_K12-Mentoring-Blog_Feature-Image.png',
      alt: 'Teacher Mentorship'
    },
    {
      title: 'Digital Education Access',
      description: 'Access to technology and digital resources empowers students with knowledge beyond traditional classroom boundaries. This image highlights a modern computer lab.',
      src: 'https://www.gettingsmart.com/wp-content/uploads/2017/11/Digital-Learning-Students-on-Computers-in-Well-Designs-computer-lab.jpg',
      alt: 'Digital Education Access'
    },
    {
      title: 'Inclusive Learning for All',
      description: 'Inclusive education ensures that all students, regardless of background or ability, have access to quality education. This image highlights diverse learners in an inclusive setting.',
      src: 'https://blogs.worldbank.org/content/dam/sites/blogs/img/detail/mgr/blog_karolina.jpg',
      alt: 'Inclusive Learning for All'
    },
    {
      title: 'Building Future Leaders',
      description: 'Leadership development programs help nurture the next generation of changemakers. This image captures a leadership academy in action, shaping young minds for a brighter future.',
      src: 'https://www.acc.org//-/media/Non-Clinical/Images/2020/11/CARDIOLOGY/13/Leadership-Academy-1200x800.jpg',
      alt: 'Building Future Leaders'
    },
    {
      title: 'Empowering Girls Through Education',
      description: 'Education is a powerful tool for gender equality. This image shows girls participating in an educational seminar, empowered to pursue their dreams.',
      src: 'https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/juliette_low_seminar_-_volunteer_photo_0.jpg',
      alt: 'Empowering Girls Through Education'
    },
    {
      title: 'Adult Literacy Classes',
      description: 'Adult education programs help individuals enhance their literacy and skills, creating more opportunities for personal and professional growth.',
      src: 'https://cdn.britannica.com/57/102257-050-AD29F06D/Project-Literacy-adult-education-course-Watertown-Mass.jpg',
      alt: 'Adult Literacy Classes'
    },
    {
      title: 'Early Childhood Development',
      description: 'Early childhood education lays the foundation for lifelong learning. This image shows young children engaged in a nurturing and stimulating learning environment.',
      src: 'https://www.umassglobal.edu/-/media/images/17-blog-images/collegis-blog-images/early-childhood-education_blog-thumb.jpg',
      alt: 'Early Childhood Development'
    },
    {
      title: 'Graduation: A Dream Fulfilled',
      description: 'Graduation represents the culmination of hard work and dedication. This image shows the joy of graduates as they achieve their dreams.',
      src: 'https://i0.wp.com/blog.hcde-texas.org/wp-content/uploads/2024/05/423A4214.jpg?fit=590%2C394&ssl=1',
      alt: 'Graduation: A Dream Fulfilled'
    },
    {
      title: 'E-Learning and Innovation',
      description: 'E-learning platforms offer innovative ways to learn, breaking down barriers of location and time. This image showcases the growth of online learning technologies.',
      src: 'https://researchleap.com/wp-content/uploads/2020/03/ed-tech1553237040995.jpg',
      alt: 'E-Learning and Innovation'
    },
    {
      title: 'Community Learning Centers',
      description: 'Community learning centers provide accessible education opportunities for individuals of all ages in local communities. This image depicts a vibrant learning environment.',
      src: 'https://www.dekkofoundation.org/wp-content/uploads/2021/04/Community-Learning-Center-scaled.jpg',
      alt: 'Community Learning Centers'
    },
    {
      title: 'Education in Rural Areas',
      description: 'Providing quality education in rural areas is vital to breaking the cycle of poverty. This image illustrates the importance of access to education in underserved communities.',
      src: 'https://miro.medium.com/v2/resize:fit:1200/1*tTb1ynhcI0wO8rVEehlsqw.jpeg',
      alt: 'Education in Rural Areas'
    }
  ];

  rawVideos = [
    {
      title: 'The Importance of Quality Education',
      description: 'This video explores the role of quality education in shaping a better future for communities worldwide.',
      src: 'https://youtu.be/LIExX9St4oA',
      link: 'https://youtu.be/LIExX9St4oA'
    },
    {
      title: 'Digital Learning in the 21st Century',
      description: 'Learn how technology is transforming education in the modern world.',
      src: 'https://youtu.be/aisOouTDATM',
      link: 'https://youtu.be/aisOouTDATM'
    },
    {
      title: 'Building Future Leaders in Education',
      description: 'A detailed look at how educational programs foster leadership in youth.',
      src: 'https://youtu.be/ACjielzX_oc',
      link: 'https://youtu.be/ACjielzX_oc'
    },
    {
      title: 'Empowering Girls Through Education',
      description: 'This video sheds light on the importance of education for girls across the globe.',
      src: 'https://youtu.be/GR1TliA-aus',
      link: 'https://youtu.be/GR1TliA-aus'
    },
    {
      title: 'Access to Digital Learning in Rural Areas',
      description: 'Watch how rural communities are overcoming barriers to education through digital resources.',
      src: 'https://youtu.be/__fajmDr4XM',
      link: 'https://youtu.be/__fajmDr4XM'
    },
    {
      title: 'Revolutionizing Education with E-Learning',
      description: 'Discover how e-learning is shaping the future of education worldwide.',
      src: 'https://youtu.be/Gz0ERWClvz0',
      link: 'https://youtu.be/Gz0ERWClvz0'
    }
  ];

  videos: {
    title: string;
    description: string;
    link: string;
    embedUrl: SafeResourceUrl;
  }[] = [];

  getEmbedUrl(youtubeUrl: string): SafeResourceUrl {
    const videoId = youtubeUrl.includes('youtu.be/')
      ? youtubeUrl.split('youtu.be/')[1]
      : youtubeUrl.split('v=')[1];
    const cleanVideoId = videoId.includes('&') ? videoId.split('&')[0] : videoId;
    const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  caseStudies = [
    {
      title: 'Transforming Rural Education',
      description: 'This case study explores how a mobile education initiative brought learning to remote communities.',
      link: 'https://www.academia.edu/37086009/Transforming_Education_in_Rural_Philippines_A_Case_Study_Analysis_Presented_to#:~:text=A%20technology%20solution%20designed%20for%20rural%20infrastructure%20has,support%20from%20principal%20and%20parents%20in%20the%20community.'
    },
    {
      title: 'Digital Inclusion for Girls',
      description: 'A program focused on increasing digital literacy among girls in underprivileged areas.',
      link: 'https://www.worldbenchmarkingalliance.org/impact/the-role-of-benchmarking-in-improving-the-inclusion-of-women-and-girls-in-tech/'
    },
    {
      title: 'Global Case Studies in Womens Leadership',
      description: 'This case study highlights the success of mentorship programs in developing young educational leaders.',
      link: 'https://www.researchgate.net/publication/387663251_Global_Case_Studies_in_Women%27s_Leadership_Lessons_from_Successful_Mentorship_Programs'
    }
  ];
  
  get filteredCaseStudies() {
    return this.caseStudies.filter(cs =>
      cs.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      cs.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
