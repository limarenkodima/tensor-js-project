import UserCard from "./UserCard.js";
import styled from "styled-components";
import { Student } from "./Student.js";
import read from "../actions/read.js";
import React from "react";
import create from "../actions/create.js";
import uuid from "react-uuid/uuid.js";

class StudentsPage extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.students = [];
    this.state = { students: this.students, creating: false };
  }

  async componentDidMount() {
    this._isMounted = true;
    if (this._isMounted && !this.state.creating) this.updStudents();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async updStudents() {
    this.students = await read();

    this.setState({
      students: this.students,
    });
  }

  async CreateStudent() {
    await create(
      uuid(),
      document.getElementById("name").value,
      document.getElementById("city").value,
      document.getElementById("university").value,
      document.getElementById("telephone").value,
      document.getElementById("mail").value,
      document.getElementById("avatar").value.toString()
    );

    this.setState({ creating: false });
  }

  OutputListStudents = () => {
    return this.state.students.map((student, index) => (
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
    ));
  };

  render() {
    // Если в состоянии создания студента — возвращаем совершенно другую страницу
    if (this.state.creating)
      return (
        <FormPage>
          <form>
            <div class="text-field">
              <label class="text-field__label" for="login">
                Имя и фамилия студента
              </label>
              <input
                class="text-field__input"
                type="text"
                name="name"
                id="name"
                placeholder="Дмитрий Лимаренко"
              />
              <label class="text-field__label" for="login">
                Название университета
              </label>
              <input
                class="text-field__input"
                type="text"
                name="university"
                id="university"
                placeholder="ЯрГУ"
              />
              <label class="text-field__label" for="login">
                Город
              </label>
              <input
                class="text-field__input"
                type="text"
                name="city"
                id="city"
                placeholder="Ярославль"
              />
              <label class="text-field__label" for="login">
                Телефон
              </label>
              <input
                class="text-field__input"
                type="text"
                name="telephone"
                id="telephone"
                placeholder="+79203441693"
              />
              <label class="text-field__label" for="login">
                Адрес электронной почты
              </label>
              <input
                class="text-field__input"
                type="text"
                name="mail"
                id="mail"
                placeholder="limarenkoit22@mail.ru"
              />
              <label class="text-field__label" for="login">
                Ссылка на аватарку
              </label>
              <input
                class="text-field__input"
                type="text"
                name="avatar"
                id="avatar"
                placeholder="link.jpg"
              />
              <button onClick={() => this.CreateStudent()}>Отправить</button>
            </div>
          </form>
        </FormPage>
      );

    return (
      <Page>
        <LogoBlock>
          <img src="/images/horizontal_logo.svg" alt=""></img>
        </LogoBlock>
        <StudentsFlex>
          <ul>
            <li>
              <EmptyStudent onClick={() => this.setState({ creating: true })}>
                <a>Добавить студента</a>
              </EmptyStudent>
            </li>
            <this.OutputListStudents />
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

  border-width: 2px;
  border-style: dotted; 
  border-color: #7388a8;
  background: white;

  :hover {
    background: #eef8fe;
  }

  a {
    position: relative;
    margin: auto auto;

    font-family: "SF UI Display", Arial, Helvetica, sans-serif;
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

const FormPage = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  input[type="text"] {
    font-family: inherit; 
    font-size: inherit; 
    line-height: inherit; 
    margin: 0; 
  }
  .text-field {
    margin-bottom: 1rem;
  }

  .text-field__label {
    display: block;
    margin-bottom: 0.25rem;
  }
  
  .text-field__input {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .text-field__input::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  .text-field__input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
export default StudentsPage;
