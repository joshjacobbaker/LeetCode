export default function letterCombinations(digits: string): string[] {
  let result: string[] = [];
  if (digits.length === 0) return result;
  const map: { [key: string]: string } = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let count = 0;

  const dfs = (index: number, path: string) => {
    if (index === digits.length) {
      result.push(path.trim());
      return;
    }

    const digit = digits[index];
    const letters = map[digit];
    for (let i = 0; i < letters.length; i++) {
      dfs(index + 1, path + letters[i]);
    }
  };

  dfs(0, "");
  return result;
}
