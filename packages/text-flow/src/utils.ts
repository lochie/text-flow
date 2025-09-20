export const findLCS = (a: string, b: string): string => {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0),
  );
  let maxLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (a[i - 1] === b[j - 1]) {
        // @ts-expect-error Property 'dp' does not exist on type 'number[][]'.
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // @ts-expect-error Property 'dp' does not exist on type 'number[][]'.
        if (dp[i][j] > maxLength) {
          // @ts-expect-error Property 'dp' does not exist on type 'number[][]'.
          maxLength = dp[i][j];
          endIndex = i;
        }
      }
    }
  }
  return a.substring(endIndex - maxLength, endIndex);
};

export const debug = false;
