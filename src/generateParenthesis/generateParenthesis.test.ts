import generateParenthesis from "./generateParenthesis";

describe("generateParenthesis", () => {
  it("should generate valid parentheses for n = 1", () => {
    const result = generateParenthesis(1);
    expect(result).toEqual(["()"]);
  });

  it("should generate valid parentheses for n = 2", () => {
    const result = generateParenthesis(2);
    expect(result).toEqual(["(())", "()()"]);
  });

  it("should generate valid parentheses for n = 3", () => {
    const result = generateParenthesis(3);
    expect(result).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
  });

  it("should generate valid parentheses for n = 0", () => {
    const result = generateParenthesis(0);
    expect(result).toEqual([""]);
  });

  it("should generate valid parentheses for n = 4", () => {
    const result = generateParenthesis(4);
    expect(result).toEqual([
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ]);
  });
});
