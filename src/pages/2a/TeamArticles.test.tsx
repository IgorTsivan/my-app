import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TeamArticles } from "./TeamArticles";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<TeamArticles />);
  expect(queryByTestId("input-group")).toBeTruthy();
  expect(queryByPlaceholderText("Team Articles")).toBeTruthy();
});

describe("task validation", () => {
  it("updates on сhange", () => {
    const { queryByPlaceholderText } = render(<TeamArticles />);
    const teamInput: any = queryByPlaceholderText("Team Articles");
    fireEvent.change(teamInput, { target: { value: "1" } });
    expect(teamInput.value).toBe("1");
  });

  it("checking team number input", async () => {
    const { queryByTestId, findByTestId, queryByPlaceholderText } = render(
      <TeamArticles />
    );

    const teamBtn: any = queryByTestId("input-group");
    const teamInput: any = queryByPlaceholderText("Team Articles");
    fireEvent.change(teamInput, {
      target: { value: 1 },
    });
    const teamInputValue: number = +teamInput.value;

    fireEvent.click(teamBtn);
    const teamOutput: any = (await findByTestId("outputTeam")).textContent;

    const articles: any[] = [
      { id: 1, text: "MobX in practise", authors: [3] },
      {
        id: 33,
        text: "RxJS and redux-observable",
        authors: [1, 2, 3, 5, 6, 7],
      },
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
    const getTeamArticles = (teamId: number | string): string => {
      let team: any = teams.find((t: any) => t.id === teamId);
      let articleStrings: any = team.members.map((memberId: number) => {
        let author: any = authors.find((a: any) => a.id === memberId);
        let authorArticles: any[] = articles.filter(
          (article: any) =>
            article.authors && article.authors.includes(memberId)
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
        return `${author.name} wrote an articles '${
          authorArticles[0].text
        }', '${authorArticles[1].text}' and ${authorArticles.length - 2} more.`;
      });
      return articleStrings.join("\n");
    };

    let result: string;
    if (teamInputValue === 1 || teamInputValue === 2) {
      result = getTeamArticles(teamInputValue);
    } else {
      result = getTeamArticles(1);
    }
    expect(teamOutput).toBe(result);
  });
});
