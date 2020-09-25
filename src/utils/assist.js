// const secret = `08294D859.40EDC95F 79DA51B24838DCD6329C5DE`
export function findComponentUpward(context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent
        if (parent) {
            name = parent.$options.name
        }
    }

    return parent
}

export function oneOf(value, validList) {
    for(let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}

export function findComponentsUpward(context, componentName) {
    let result = []
    let parent = context.$parent

    if (parent) {
        if (parent.$options.name === componentName) {
            result.push(parent)
        }
        return result.concat(findComponentsUpward(parent, componentName))
    } else {
        return []
    }
}

export function findComponentDownWard(context, componentName) {
    let childrens = context.$childrens
    let children = null
    if (childrens.length) {
        for(const child of childrens) {
            const name = child.$options.name
            if (name === componentName) {
                children = child
                break
            } else {
                children = findComponentDownWard(child, componentName)
                if (children) {
                    break
                }
            }
        }
    }

    return children
}

export function findComponentsDownWard(context, componentName) {
    // let childrens = context.$childrens
    // let children = []

    // if (childrens.length) {
    //     for(const child of childrens) {
    //         const name = child.$options.name
    //         if (name === componentName) {
    //             children.push(child)
    //             return children.concat(findComponentsDownWard(child, context))
    //         } 
    //     }
    // }

    // return children

    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) {
            components.push(child)
        }
        const foundChilds = findComponentsDownWard(child, componentName)
        return components.concat(foundChilds)
    }, [])
}


export function findBrotherComponents(context, componentName, exceptMe = true) {
    let res = context.$parent.$children.filter(item => {
        return item.$options.name === componentName
    })
    let index = res.findIndex(item => item._uid === context._uid)
    if (exceptMe) {
        res.splice(index, 1)
    }
    return res
}

// export const findBrotherComponents = findBrotherComponents
// export const findComponentsDownWard = findComponentsDownWard
// export const findComponentDownWard = findComponentDownWard
// export const findComponentUpward = findComponentUpward
// export const findComponentsUpward = findComponentsUpward

// export default {
//     findBrotherComponents,
//     findComponentsDownWard,
//     findComponentDownWard,
//     findComponentUpward,
//     findComponentsUpward,
// }