import React, { useState } from "react";
import { InputGroup } from "../../components/InputGroup";

export const TeamArticles: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>("");
  const [output, setOutput] = useState<number | string>(1);

  const articles: any[] = [
    { id: 1, text: "MobX in practise", authors: [3] },
    { id: 33, text: "RxJS and redux-observable", authors: [1, 2, 3, 5, 6, 7] },
    { id: 23, text: "Firebase", authors: [7, 2, 3] },
    { id: 333, text: "Really cool article" },
    { id: 1234, text: "Ramda.js and Redux combined", authors: [2] },
    { id: 2, text: "CSS in JS", authors: [3, 5] },
  ];

  const authors: any[] = [
    { id: 1, name: "Oliver" },
    { id: 2, name: "Jan" },
    { id: 3, name: "Jakub" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Tomas" },
    { id: 6, name: "Drahoslav" },
    { id: 7, name: "Honza" },
  ];

  const teams: any[] = [
    { id: 1, name: "Webscope 1", members: [1, 2, 3, 4] },
    { id: 2, name: "Webscope 2", members: [5, 6, 7] },
  ];

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const reg: RegExp = /^\d+$/;
    if (reg.test(event.target.value)) {
      setInputValue(+event.target.value);
    }
  };

  const keyHandler = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      if (inputValue !== 1 && inputValue !== 2) {
        alert("confirm 1 or 2");
        setInputValue("");
      } else {
        setOutput(inputValue);
        setInputValue("");
      }
    }
  };

  const submitHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (inputValue !== 1 && inputValue !== 2) {
      alert("confirm 1 or 2");
      setInputValue("");
    } else {
      setOutput(inputValue);
      setInputValue("");
    }
  };

  const getTeamArticles = (teamId: number | string): string => {
    let team: any = teams.find((t: any) => t.id === teamId);
    let articleStrings: any = team.members.map((memberId: number) => {
      let author: any = authors.find((a: any) => a.id === memberId);
      let authorArticles: any[] = articles.filter(
        (article: any) => article.authors && article.authors.includes(memberId)
      );
      if (authorArticles.length === 0) {
        return `${author.name} wrote 0 articles.`;
      }
      if (authorArticles.length === 1) {
        return `${author.name} wrote an article '${authorArticles[0].text}.'`;
      }
      if (authorArticles.length === 2) {
        return `${author.name} wrote an articles '${authorArticles[0].text}' and '${authorArticles[1].text}'.`;
      }
      return `${author.name} wrote an articles '${authorArticles[0].text}', '${
        authorArticles[1].text
      }' and ${authorArticles.length - 2} more.`;
    });
    return articleStrings.join("\n");
  };

  return (
    <div className="container task_box">
      <div className="row">
        <div className="col">
          <h2 className="center">Team Articles method task</h2>
          <p className="center">Default team number is 1</p>
          <p className="center">Choose team number 1 or number 2</p>
        </div>
      </div>
      <div className="row">
        <div className="col task">
          <InputGroup
            test={"input-group"}
            placeholderInput={"Team Articles"}
            type={"text"}
            changeHandler={changeInput}
            enterHandler={keyHandler}
            getValue={inputValue}
            btnHandler={submitHandler}
            btnClass={"btn btn-info"}
          />
        </div>
      </div>
      <div className="row output">
        <div className="box">
          <p data-testid="outputTeam">{getTeamArticles(output)}</p>
        </div>
      </div>
    </div>
  );
};
