declare module 'typewriter-effect' {
    import { Component } from 'react';

    export interface Options {
        strings?: string | string[];
        cursor?: string;
        delay?: number | 'natural';
        deleteSpeed?: number | 'natural';
        loop?: boolean;
        autoStart?: boolean;
        pauseFor?: number;
        devMode?: boolean;
        skipAddStyles?: boolean;
        wrapperClassName?: string;
        cursorClassName?: string;
        stringSplitter?: (string: string) => string[];
        onCreateTextNode?: (character: string, textNode: Text) => Text;
        onRemoveNode?: (node: Node | void) => void;
    }

    export interface Typewriterprops {
        options?: Options;
        onInit?: (typewriter: TypewriterClass) => void;
    }

    export class TypewriterClass {
        typeString(string: string): TypewriterClass;
        deleteAll(speed?: number): TypewriterClass;
        pauseFor(ms: number): TypewriterClass;
        start(): TypewriterClass;
        stop(): TypewriterClass;
        pause(): TypewriterClass;
        deleteChars(amount: number): TypewriterClass;
        callFunction(cb: () => void): TypewriterClass;
    }

    export default class Typewriter extends Component<Typewriterprops> { }
}
