import React from "react";
/**
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;
**/
const CategoryItems = ({ item }) => {
  return (
   /**  <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
**/
    <div className="flex-1 m-2 h-screen relative">
        <img className="w-full h-[350px] object-cover shrink" src={item.img} alt="category"/>
        <div className="absolute top-0 left-0 w-full h-[350px] flex flex-col items-center justify-center">
            <div className="mb-5 text-white font-bold">{item.title}</div>
            <button className="p-3 bg-white text-black font-semibold">SHOP NOW</button>
        </div>
    </div>
  );
};

export default CategoryItems;