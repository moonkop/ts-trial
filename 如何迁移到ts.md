# webpack 配置修改
``` js
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.jsx', '.js', '.ts', '.tsx']
    },

    module: {
        rules: [{
                exclude: /node_modules/,
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
}
```

或

``` js
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    module: {
        rules: [
            // 	{
            // 	exclude: /node_modules/,
            // 	test: /\.(ts|tsx)?$/,
            // 	use: "ts-loader",
            // },
            {
                test: /\.(jsx|js|ts|tsx)?$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: true,
            memoryLimit: 8192,
        }),
    ],
}
```


# package.json配置修改
```
    "typescript": "^3.3.1",
    "fork-ts-checker-webpack-plugin": "3.1.1",
    "ts-loader": "^5.3.3",
```

# 添加tsconfig.json

```json
{
	"compilerOptions": {
		"experimentalDecorators": true, //允许使用装饰器语法
		"target": "es5", //编译的目标语言
		"lib": [ //需要额外全局添加的类型库
			"dom", //dom上的方法
			"dom.iterable",
			"esnext"
		],
		"allowJs": true, //允许存在js
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": false,
		"forceConsistentCasingInFileNames": true,
		"module": "esnext",
		"moduleResolution": "node",  //模块解析方式
		"resolveJsonModule": true,
		"suppressImplicitAnyIndexErrors": true, //在any[somekey]的时候不报错
		//"isolatedModules": true,
		"noEmit": true, //不将ts输出为js文件
		"jsx": "react",
		"baseUrl": ".", //根路径
		"paths": { //路径映射
			"pages/*": ["src/pages/*"],
			"components/*": ["src/components/*"],
			"tradePolyfills/*": ["src/tradePolyfills/*"],
			"tradePublic/*":["src/tradePublic/*"],
			"publicComponents/*": ["src/public/components/*"],
			"utils/*": ["src/public/utils/*"],
			"public/*": ["src/public/*"],
		}
	}

}
```