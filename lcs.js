console.log(longestCommonSubstring(process.argv.slice(2)));

function longestCommonSubstring(strings) {
    if (strings.length === 0) return '';

    let shortest = strings.reduce((shortest, str) => str.length < shortest.length ? str : shortest, strings[0]);
    let result = '';

    for (let i = 0; i < shortest.length; i++) {
        for (let j = i + 1; j <= shortest.length; j++) {
            let substring = shortest.slice(i, j);
            if (strings.every(str => str.includes(substring))) {
                if (substring.length > result.length) {
                    result = substring;
                }
            }
        }
    }

    return result;
}
