export default function isValid(s: string): boolean {
  const stack: string[] = [];
  let char: string = "";
  const map: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (map[char]) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

function isValidLeetCode(s: string): boolean {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const top = stack.pop();

      if (
        (s[i] === ")" && top !== "(") ||
        (s[i] === "}" && top !== "{") ||
        (s[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
