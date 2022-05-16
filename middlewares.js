//  Middleware patern (chain of responsibility)
const passoA = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passoB = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passoC = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice  < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}

const ctx = {}
exec(ctx, passoA, passoB, passoC)
console.log(ctx)