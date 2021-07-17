export default class ArrayBufferConverter {
    static load(buffer) {
        return new Uint16Array(buffer);
    }

    static toString(buffer) {
        const data = this.load(buffer);
        return String.fromCodePoint(...data);
    }
}
