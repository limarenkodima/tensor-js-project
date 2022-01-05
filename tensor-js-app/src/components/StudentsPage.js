import UserCard from "./UserCard.js";
import styled from "styled-components";
import { Student } from "./Student.js";
import read from "../actions/read.js";
import React from "react";

class StudentsPage extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.students = [];
    this.state = { students: this.students };
  }

  async componentDidMount() {
    this._isMounted = true;
    if( this._isMounted)
       this.updStudents();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async updStudents() {
      this.students = await read();
        
      this.setState({
          students: this.students
      });
  }

  outputStudents = () => {
      return (this.state.students.map((student, index) => (
        <li key={index}>
          <UserCard
            uuid={student.uuid}
            name={student.name}
            city={student.city}
            university={student.university}
            telephone={student.telephone}
            mail={student.mail}
            avatar={student.avatar}
          />
        </li>
      )));
  }

  render() {
    return (
      <Page>
        <LogoBlock>
          <img src="/images/horizontal_logo.svg" alt=""></img>
        </LogoBlock>
        <StudentsFlex>
          <ul>
            <li>
              <EmptyStudent onClick={() => window.open("/createStudent")}>
                <a>Добавить студента</a>
              </EmptyStudent>
            </li>
            <this.outputStudents />
          </ul>
        </StudentsFlex>
      </Page>
    );
  }
}

const Page = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  ul {
    list-style-type: none;
    margin: 0px 20px 0px 0px;
    padding: 0px;
    column-count: 2;
  }
  li {
    break-inside: avoid;
    margin-bottom: 10px;
  }
`;

const EmptyStudent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  position: static;
  width: 392px;
  height: 105px;
  border-radius: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  border-width: 2px; /* Толщина линии внизу */
  border-style: dotted; /* Стиль линии внизу */
  border-color: #7388a8;
  background: white;

  :hover {
    background: #eef8fe;
  }

  a {
    position: relative;
    margin: auto auto;

    font-family: "SF UI Display";
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: left;

    color: #7388a8;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const StudentsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  width: 800px;
  margin: 0 auto;
  height: 120px;

  background: #ffffff;
`;
export default StudentsPage;
