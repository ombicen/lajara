

export function limitWords(text, limit = 100, ending = '...') {

    let words = text.split(' ');

    if (words.length <= limit) return words.join(' ');

    return words.filter((w,i) => i < limit).join(' ') + ending;
}