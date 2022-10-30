function createSecrets() {
    return new Array(100).fill(null).map((_, i) => Array.from(Array(32), () => Math.floor(Math.random() * 36).toString(36)).join(''))
}

export default createSecrets;