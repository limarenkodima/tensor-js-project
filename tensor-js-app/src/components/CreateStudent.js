import styled from "styled-components";
import registration from "../actions/user.js";

const CreateStudent = (props) => {
  return (
    <Page>
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
          <button onClick={() => registration(document.getElementById("name").value, 
          document.getElementById("city").value, 
          document.getElementById("university").value, 
          document.getElementById("telephone").value, 
          document.getElementById("mail").value)}>Отправить</button>
        </div>
      </form>
    </Page>
  );
};



const Page = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  input[type="text"] {
    font-family: inherit; /* 1 */
    font-size: inherit; /* 1 */
    line-height: inherit; /* 1 */
    margin: 0; /* 2 */
  }
  .text-field {
    margin-bottom: 1rem;
  }
  /* стили для label */
  .text-field__label {
    display: block;
    margin-bottom: 0.25rem;
  }
  /* стили для input */
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

export default CreateStudent;
