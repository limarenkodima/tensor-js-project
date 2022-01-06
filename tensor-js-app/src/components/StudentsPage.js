import styled from "styled-components";
import { Student } from "./Student.js";
import read from "../actions/read.js";
import React from "react";
import create from "../actions/create.js";
import uuid from "react-uuid/uuid.js";
import Delete from "../actions/delete.js";

class StudentsPage extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.students = [];
    this.state = { students: this.students, creating: false, deleting: "" };
  }

  async componentDidUpdate() {
    if (this.state.deleting.length > 1) {
      await this.DeleteStudent(this.state.deleting);
      await this.updStudents();
    }
  }

  async DeleteStudent(uuid) {
    await Delete(uuid);
    let studentIndex = this.state.students.findIndex(
      (item) => item.uuid == uuid
    );
    let tempArray = this.state.students.splice(studentIndex, 1);
    this.setState({ students: tempArray });
    this.setState({ deleting: "" });
  }

  async componentDidMount() {
    this._isMounted = true;
    this.updStudents();
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

  UserCard = (props) => {
    if (props.name.length > 15)
      return (
        <Card>
          <Avatar ava={props.avatar} />
          <Info>
            <SubFrame>
              <a>{props.name.substr(0, 12) + "..."}</a>
              <SubInfo>
                <a>{props.university}</a>
                <a>{props.city}</a>
              </SubInfo>
            </SubFrame>
            <Trash
              onClick={() => {
                this.setState({ deleting: props.uuid });
              }}
            />
          </Info>
        </Card>
      );
    return (
      <Card>
        <Avatar ava={props.avatar} />
        <Info>
          <SubFrame>
            <a>{props.name}</a>
            <SubInfo>
              <a>{props.university}</a>
              <a>{props.city}</a>
            </SubInfo>
          </SubFrame>
          <Trash onClick={() => this.setState({ deleting: props.uuid })} />
        </Info>
      </Card>
    );
  };

  OutputListStudents = () => {
    return this.state.students.map((student, index) => (
      <li key={index}>
        <this.UserCard
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

const Card = styled.div`
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

  :hover {
    background: #eef8fe;
  }
`;

const Avatar = styled.div`
  position: static;
  width: 80px;
  height: 80px;

  background: center no-repeat url(${({ ava }) => ava});
  object-fit: cover;
  border-radius: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 284px;
  height: 80px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12px 12px;
`;

const SubFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 212px;
  height: 50px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  a {
    position: static;
    width: 212px;
    height: 29px;

    font-family: "SF UI Display";
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: left;

    color: #333333;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 137px;
  height: 17px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  a {
    position: static;
    width: 84px;

    font-family: "SF UI Display";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: #7a91b5;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 12px 0px 0px;
  }
`;

const Trash = styled.div`
  position: static;
  width: 24px;
  height: 24px;

  background: url("/images/Trash.svg") no-repeat;
  border-radius: 8px;
  border-color: white;
  opacity: 0.2;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 12px 12px;

  :hover {
    opacity: 1;
  }
`;

export default StudentsPage;
