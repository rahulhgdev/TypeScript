# TypeScript - It superpowers the JS.
# Pre-requists:
- Node.js
- npm
- Typescript
- IDE

# How to Install 
run npm i typescript -g (install TS globally on your system)

# How to configure 
- Create 1 .ts file ex., app.ts (else it'll give error in tsconfig.json as it requires atleast 1 .ts file)
- create tsconfig.json (tsc --init or npx tsc --init)
- tsconfig.json is used for defining rules like., don't compile if .ts file consists not assigned variable or if function is not called on declared

# Compile TS -> JS
- TS uses tsc (typescript compiler) to compile TS code to vanilla JS
- You can type tsc file.js or only tsc to compile ts file
- To avoid compiling TS file each time run tsc --watch


## Topics - 
1. Premitives - DataTypes like number, boolean, string..., in short without {}, [], ()
2. Reference - DataTypes like array, object inshort with {}, [], ()