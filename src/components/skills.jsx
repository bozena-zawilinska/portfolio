import React, { Component } from "react";
import laptop from "./icons/laptop.svg";
import reactIcon from "./icons/react-icon.svg";
import plus from "./icons/plus.svg";
import user from "./icons/user.svg";
import "../sass/style.scss";

class Skills extends Component {
  render() {
    return (
          <div className="col">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h3>Technical Skills</h3>
                    </th>
                    <th scope="col">
                      <figure className="image">
                          <img className="icon" src={laptop} alt="laptop" />
                      </figure>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><label class="ts-l" for="wordpress">WordPress</label></td>
                    <td><progress class="ts-p" id="wordpress" max="100" value="80"> 80% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="php">PHP</label></td>
                    <td><progress class="ts-p" id="php" max="100" value="60"> 60% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="java-script">JavaScript</label></td>
                    <td><progress class="ts-p" id="java-script" max="100" value="60"> 60% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="python">Python</label></td>
                    <td><progress class="ts-p" id="python" max="100" value="30"> 30% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="html5">HTML5</label></td>
                    <td><progress class="ts-p" id="html5" max="100" value="90"> 90% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="css3">CSS3</label></td>
                    <td><progress class="ts-p" id="css3" max="100" value="90"> 90% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="sass">Sass</label></td>
                    <td><progress class="ts-p" id="sass" max="100" value="60"> 60% </progress></td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h3>Frameworks and Libraries</h3>
                    </th>
                    <th scope="col">
                      <figure className="image">
                          <img className="icon" src={reactIcon} alt="react icon" />
                      </figure>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><label class="ts-l" for="react-js">React.js</label></td>
                    <td><progress class="ts-p" id="react-js" max="100" value="60"> 60% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="jquery">jQuery</label></td>
                    <td><progress class="ts-p" id="jquery" max="100" value="80"> 70% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="bootstrap">Bootstrap</label></td>
                    <td><progress class="ts-p" id="bootstrap" max="100" value="60"> 80% </progress></td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h3>Other Technical Skills</h3>
                    </th>
                    <th scope="col">
                      <figure className="image">
                        <img className="icon ml-4" src={plus} alt="plus" />
                      </figure>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><label class="ts-l" for="git">Git</label></td>
                    <td><progress class="ts-p" id="git" max="100" value="90"> 90% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="seo">SEO</label></td>
                    <td><progress class="ts-p" id="seo" max="100" value="60"> 60% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="vsc">Visual Studio Code</label></td>
                    <td><progress class="ts-p" id="vsc" max="100" value="70"> 70% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="a5">Adobe Photoshop</label></td>
                    <td><progress class="ts-p" id="a5" max="100" value="40"> 40% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="ai">Adobe Illustrator</label></td>
                    <td><progress class="ts-p" id="ai" max="100" value="40"> 40% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="asana">Asana</label></td>
                    <td><progress class="ts-p" id="asana" max="100" value="100"> 100% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="slack">Slack</label></td>
                    <td><progress class="ts-p" id="slack" max="100" value="100"> 100% </progress> </td>
                  </tr>
                </tbody>
              </table>  
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h3>Personal Skills</h3>
                    </th>
                    <th scope="col">
                      <figure className="image">
                        <img className="icon ml-4" src={user} alt="user" />
                      </figure>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><label class="ts-l" for="gm">Growth Mindset</label></td>
                    <td><progress class="ts-p" id="gm" max="100" value="100"> 100% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="sm">Self-Motivated</label></td>
                    <td><progress class="ts-p" id="sm" max="100" value="100"> 100% </progress> </td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="ho">Highly Organized</label></td>
                    <td><progress class="ts-p" id="ho" max="100" value="100"> 100% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="saa">Strong Analytical Abilities</label></td>
                    <td><progress class="ts-p" id="saa" max="100" value="100"> 100% </progress></td>
                  </tr>
                  <tr>
                    <td><label class="ts-l" for="dtm">Dedicated Team Member</label></td>
                    <td><progress class="ts-p" id="dtm" max="100" value="100"> 100% </progress> </td>
                  </tr>
                </tbody>
              </table>   
          </div>
    );
  }
}

export default Skills;
