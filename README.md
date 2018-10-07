This repo is a MVCE of `ts-jest` not working unless you `import "jest";` in any one file. This issue appears in Visual Studio Code 1.27.2, I have not tested it in other IDEs.

I do not know if this is a configuration issue or a `jest` / `ts-jest` issue.

## Steps to Reproduce

1. Observe `6` problems down by Visual Studio Code in `bar.spec.ts` and `foo.spec.ts`

2. Run the tests 

```
cd sub-project
npm install
npm test
```

3. Observe that the tests are functioning, even though the problems exist

4. Uncomment line `4` in `foo.spec.ts`

5. Observe that `ts-jest` is now working in both `foo.spec.ts` and `bar.spec.ts`