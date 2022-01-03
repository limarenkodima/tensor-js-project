import styled from "styled-components";
import { Student } from "./Student";

const st = new Student("Мария Иванова", "Ярославль", "ЯрГУ", "+79200001284", "ivanova@mail.ru");

const UserCard = (Student) => {
  return (
    <Card>
      <Avatar />
      <Info>
          <SubFrame>
            <a>{Student.name}</a>
            <SubInfo>
              <a>УГАТУ 2 курс</a>
              <a>г.Уфа</a>
            </SubInfo>
          </SubFrame>
          <Trash />
      </Info>
    </Card>
  );
};

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
      background: #EEF8FE;
  }
`;

const Avatar = styled.div`
  position: static;
  width: 80px;
  height: 80px;

  background: url("/images/Frame 4.png") no-repeat;
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
  opacity: .2;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 12px 12px;

  :hover {
      opacity: 1;
  }
`;

export default UserCard;
