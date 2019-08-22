declare type AnimateFn = (time: number, beginValue: number, changeValue: number, during: number) => number;
declare type AnimateType = {
    [x: string]: AnimateFn;
};
declare type DefaultOpts = {
    from: number;
    to: number;
    during: number;
    type: string;
    callback(value: number): void;
};
declare type SimpleAnimate = {
    animateType: AnimateType;
    defaultOpts: DefaultOpts;
    extend(type: string): void;
    play(options: DefaultOpts): Promise<undefined>;
};
declare const simpleAnimate: SimpleAnimate;
export default simpleAnimate;
