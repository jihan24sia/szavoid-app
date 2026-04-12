import profile from "../assets/profile.jpeg"
import "./custom.css"

function BiodataDiri() {
    return (
        <div className="container">

            <div className="left">
                <Profile />
            </div>

            <div className="right">
                <About />
                <Education />
                <Contact />
                <Experience />

            </div>

        </div>
    )
}

function Profile() {
    return (
        <div className="profile">
            <img src={profile} alt="profile" />
            <h2>Jihan Zahra</h2>
            <p>Software Engineer</p>
        </div>
    )
}

function About() {
    return (
        <div className="card">
            <h3>About</h3>
            <p>Halo, saya Jihan Zahra, seorang mahasiswa yang memiliki minat besar di bidang pengembangan perangkat lunak.
                Saya sangat tertarik pada pengembangan web, terutama dalam membuat tampilan antarmuka yang menarik dan interaktif.
                Saya senang mempelajari teknologi baru seperti HTML, CSS, JavaScript, dan React untuk meningkatkan kemampuan saya dalam
                pengembangan web.</p>
        </div>
    )
}

function Contact() {
    return (
        <div className="card contact">
            <h3>Contact</h3>
            <p>Email : jihan24si@email.com</p>
            <p>Phone : 08123456789</p>
        </div>
    )
}

function Experience() {
    return (
        <div className="card experience">
            <h3>Experience</h3>
            <p>2023 - Web Design Project</p>
            <p>2024 - React Development</p>
        </div>
    )
}

function Education() {
    return (
        <div className="card">
            <h3>Education</h3>
            <p>Politeknik Caltex Riau</p>
            <p>Sistem Informasi</p>

            <Skills />

        </div>
    )
}

function Skills() {
    return (
        <div>
            <h4>Skills</h4>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
        </div>
    )
}


export default BiodataDiri