import React from 'react'
import firebaseImage from 'images/devicon/firebase.svg'
import reactImage from 'images/devicon/react.svg'
import expressImage from 'images/devicon/express.svg'
import reduxSagaImage from 'images/devicon/redux-saga.svg'
import gatsbyImage from 'images/devicon/gatsby.svg'
import githubImage from 'images/devicon/github.svg'
import reduxImage from 'images/devicon/redux.svg'
const reactComponent = () => (
  <div>
    <h2>
      Component 단위로 웹서비스를
      <br />
      효율적으로 개발하기 위해
      <br />
      React를 활용한 경험이 있습니다.
    </h2>
    <div>
      <h3>Toy Project</h3>
      <ul>
        <li>
          <a href="https://crypto-application.herokuapp.com/" target="_blank">
            암호화폐 코리아프리미엄 조회 웹 서비스
          </a>
          <ul>
            <li>
              <img src={reactImage} alt="react" />
            </li>
            <li>
              <img
                src={reduxSagaImage}
                alt="redux-saga"
                style={{ top: '-6px' }}
              />
            </li>
            <li>
              <img src={firebaseImage} alt="firebase" />
            </li>
            <li>
              <img
                src={expressImage}
                alt="express"
                style={{
                  transform: 'scale(1.8)',
                  left: '10px',
                  top: '3px',
                }}
              />
            </li>
          </ul>
        </li>
        <li>
          <a href="https://ruden91.github.io/" target="_blank">
            개인 블로그
          </a>
          <ul>
            <li>
              <img src={reactImage} alt="react" />
            </li>
            <li>
              <img src={gatsbyImage} alt="gatsby" />
            </li>
            <li>
              <img src={githubImage} alt="github" />
            </li>
          </ul>
        </li>
        <li>
          <a href="https://whatsthiscolor.firebaseapp.com/" target="_blank">
            컬러코드 카피 서비스
          </a>
          <ul>
            <li>
              <img src={reactImage} alt="react" />
            </li>
            <li>
              <img src={firebaseImage} alt="firebase" />
            </li>
          </ul>
        </li>
        <li>
          <a href="https://todoapp-131c9.firebaseapp.com/" target="_blank">
            일정관리 서비스
          </a>
          <ul>
            <li>
              <img src={reactImage} alt="react" />
            </li>
            <li>
              <img src={reduxImage} alt="redux" />
            </li>
            <li>
              <img src={firebaseImage} alt="firebase" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
)

export default reactComponent
