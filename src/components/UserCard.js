import React from "react";
import styled from "@emotion/styled";

const UserCard = ({ name, avatar, description }) => {
  return (
    <CardContainer>
      <img src={avatar} alt={name} className="rounded-full" />
      <div className="text-center">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 300px;
  width: 100%;
`;

export default UserCard;
