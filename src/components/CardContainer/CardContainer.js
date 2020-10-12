import React from "react";
import "./CardContainer.css";
import DiaryCard from "../DiaryCard/DiaryCard";


const CardContainer = ({ Diaries, deleteDiary }) => {
  const DiaryList = Diaries.length ? (
    Diaries.map((diary) => {
      return (
        <DiaryCard
          title={diary.title}
          subtitle={diary.subtitle}
          discription={diary.discription}
          key={diary.id}
          deleteDiary={deleteDiary}
          id={diary.id}
        />
      );
    })
  ) : (
    <p className="center">
      {" "}
      You have no Diary items today , have Fun , Life is short!{" "}
    </p>
  );

  return <div className="row container  collections">
    
    {DiaryList}</div>;
};
export default CardContainer;
