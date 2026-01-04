import { COURSES } from './constants';

export default function CoursesSection() {
  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Popular Courses</span>
          <h2 className="section-title">Start Your Journey Today</h2>
        </div>
        <div className="courses-grid">
          {COURSES.map((course, index) => (
            <div key={index} className="course-card reveal">
              <div className="course-image" style={{ background: course.image }}>
                <span className="course-badge">{course.badge}</span>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span className="course-duration">{course.duration}</span>
                  <span className="course-level">{course.level}</span>
                </div>
                <button className="btn-course">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}