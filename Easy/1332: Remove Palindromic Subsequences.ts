function removePalindromeSub(s: string): number {
    return s === [...s].reverse().join('') ? 1 : 2;
};
