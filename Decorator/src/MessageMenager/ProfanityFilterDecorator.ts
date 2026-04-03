import { StreamDecorator } from "./StreamDecorator";

export class ProfanityFilterDecorator extends StreamDecorator {
    private forbidenWords = ['bobo', 'tanso'];

    process(data: string): string {
        let message = super.process(data);
        this.forbidenWords.forEach(word => message = message.replace(word, this.mask(word)));
        return message;
    }

    private mask(word: string): string {
        return word.split('').map(() => '*').join('')
    }
}