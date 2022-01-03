import UserCard from "./UserCard.js";
import styled from "styled-components";
import { Student } from "./Student.js";

const students = [
  new Student(
    "Мария Иванова",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
  new Student(
    "Дима Лимаренко",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
  new Student(
    "Антон Войтко",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
  new Student(
    "Паша Абрамов",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
  new Student(
    "Мария Иванова",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
  new Student(
    "Дима Лимаренко",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
  new Student(
    "Антон Войтко",
    "Ярославль",
    "ЯрГУ",
    "+79200001284",
    "ivanova@mail.ru"
  ),
];

const listStudents = students.map((student) => (
  <li key={student.name.toString()}>
    <UserCard name={student.name} />
  </li>
));

const StudentsPage = (props) => {
  return (
    <Page>
      <LogoBlock>
        <img src="/images/horizontal_logo.svg" alt=""></img>
      </LogoBlock>
      <StudentsFlex>
      <ul>{listStudents}</ul>
      <ul>{listStudents}</ul>
      </StudentsFlex>
    </Page>
  );
};

const Page = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;
    ul {
        list-style-type: none;
        margin: 0px 20px 0px 0px;
        padding: 0px;
    }
`;

const StudentsFlex = styled.div`
display: flex;
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
