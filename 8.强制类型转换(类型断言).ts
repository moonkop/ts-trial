/**
 * 在ts中 as类似于其他语言中的强制类型转换 
 * 正常情况下是不推荐使用的
 * 因为用 as 会破坏类型的流动性 
 * 这个关键词 与 any 类似 都是兜底的关键词 实在没有办法才用as
 **/

function someFun(something:any) {
    return (something as string).replace('1', '2')
}

interface Foo {
    bar: number;
    bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

function someFun1(){
    const obj:Foo={};
    obj.bar=123;
    obj.bas='hello';
}

function someFun2(){
    const obj={} as Foo;
    obj.bar=123;
    obj.bas='hello';
}