/*let root = document.getElementById("root")

let child = document.createElement("DIV")

child.textContent = " hello world"
root.appendChild(child)*/

let root = document.getElementById("root");

/*let element = React.createElement("div", {
    children: "HATIM"
})*/

let CV = (
  <div>
    <div className="info">
      <h2>Personal Info</h2>
      <b>Name: </b> <span>Hatim</span>
      <br />
      <b>Residence: </b> <span>Najran</span>
      <br />
      <b>Phone Number: </b> <span className="s">+996 5857296</span>
      <br />
      <b>Email </b> <span className="s">hatim@gmail.com</span>
    </div>

    <div className="career-objective">
      <h2>Career Objective</h2>
      <p>
        To obtain knowledge regarding web development and to enhance my skills
        in web development specifically in the front-end side and also to be
        able to contribute to the company achievements.
      </p>
    </div>

    <div className="Education">
      <h2>Education</h2>
      <b>Bachelor of Computer Science</b>
      <p>Najran University | 2017-2022</p>
    </div>

    <div className="Senior-Design-Project">
      <h2>Graduation Project</h2>
      <p>
        A smart gate system at Najran University that allows only the authorized
        people to pass through the gate by using a card holds his personal
        information. Najran University |December 2020 – December 2022.
      </p>
    </div>

    <div className="Certifications">
      <h2>Certifications</h2>
      <ul>
        <li>
          
          Professional Project Management Agile , from Technical and Vocational
          Training Corporation for 15 hours in 3 days started on: June 4, 2022
        </li>
        <li>
          Web programming by using HTML, CSS, JavaScript from Technical and
          Vocational Training Corporation for 24 hours in 8 days started on: May
          20, 2022
        </li>

        <li>
          Web programming by using PHP, MySQL Database from Technical and
          Vocational Training Corporation for 24 hours in 8 days started on: May
          20, 2022.
        </li>
      </ul>
    </div>

    <div className="Courses">
      <h2>Courses</h2>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NodeJS</li>
        <li>Php</li>
        <li>React native</li>

      </ul>
    </div>

    <div className="Skills">
      <h2>Skills</h2>
      <ul>
        <li>Web development</li>
      </ul>
    </div>

    <div className="other-Skills">
      <h2>Other Skills</h2>
      <ul>
        <li>Willing to learn</li>
        <li>Teamwork</li>
      </ul>
    </div>
  </div>
);


 
ReactDOM.render(CV, root);
 
